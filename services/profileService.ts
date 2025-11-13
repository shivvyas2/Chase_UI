const API_BASE_URL = 'https://staging.futeur.app/api/v1';

export interface UserProfileResponse {
  message?: string;
  data?: {
    id: string;
    clerkId?: string;
    email?: string;
    business?: Array<{
      id: string;
      name?: string;
      [key: string]: any;
    }>;
    [key: string]: any;
  };
}

export interface ExperianScoreResponse {
  message?: string;
  data?: {
    scoreInformation?: {
      fsrScore?: {
        score?: number;
        [key: string]: any;
      };
      commercialScore?: {
        score?: number;
        [key: string]: any;
      };
      [key: string]: any;
    };
    expandedCreditSummary?: {
      activeTradelineCount?: number;
      allTradelineBalance?: number;
      currentDbt?: number;
      collectionCount?: number;
      [key: string]: any;
    };
    [key: string]: any;
  };
  businessId?: string;
  score?: number;
  creditScore?: number;
  experianData?: any;
  [key: string]: any;
}

export interface RecommendationResponse {
  message?: string;
  recommendations?: any[];
  businessId?: string;
  [key: string]: any;
}

/**
 * Fetch user profile to get businessId
 * Requires authentication token
 */
export async function getUserProfile(token: string): Promise<UserProfileResponse> {
  const response = await fetch(`${API_BASE_URL}/auth/profile`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to fetch user profile');
  }

  return await response.json();
}

/**
 * Fetch Experian credit score and profile data
 * Requires authentication token
 */
export async function getExperianScore(token: string): Promise<ExperianScoreResponse> {
  const response = await fetch(`${API_BASE_URL}/crs-credit/experian/score`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to fetch Experian score');
  }

  return await response.json();
}

/**
 * Get business card recommendations
 * @param token - Authentication token
 * @param businessId - Optional business ID. If not provided, uses general recommendations endpoint
 */
export async function getRecommendations(
  token: string,
  businessId?: string
): Promise<RecommendationResponse> {
  const url = businessId
    ? `${API_BASE_URL}/recommendations/${businessId}`
    : `${API_BASE_URL}/recommendations`;

  // Log the request
  console.log('📤 Sending Recommendations API Request:');
  console.log('📍 URL:', url);
  console.log('🔧 Method: GET');
  console.log('🔑 Authorization:', `Bearer ${token.substring(0, 20)}...`);
  console.log('📋 Business ID:', businessId || 'Not provided (general recommendations)');

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('❌ Recommendations API Request Failed:', {
      status: response.status,
      statusText: response.statusText,
      url,
      businessId,
      error: errorData,
    });
    throw new Error(errorData.message || 'Failed to fetch recommendations');
  }

  const responseData: RecommendationResponse = await response.json();
  
  // Log the response
  console.log('✅ Recommendations API Response Received:');
  console.log('📥 Full Response:', JSON.stringify(responseData, null, 2));
  console.log('📊 Response Summary:', {
    message: responseData.message,
    businessId: responseData.businessId,
    recommendationsCount: responseData.recommendations?.length || 0,
    score: responseData.score,
    recommendations: responseData.recommendations?.map((rec: any) => ({
      cardId: rec.cardId,
      cardName: rec.cardName,
      fitScore: rec.fitScore,
    })),
  });

  return responseData;
}

/**
 * Get both Experian score and recommendations in one call
 * Fetches profile first to get businessId, then uses it for personalized recommendations
 */
export async function getCreditProfileAndRecommendations(
  token: string
): Promise<{
  profile: UserProfileResponse;
  experianData: ExperianScoreResponse;
  recommendations: RecommendationResponse;
  businessId: string | null;
}> {
  console.log('🔄 Starting credit profile and recommendations fetch...');
  
  // First, fetch user profile to get businessId
  const profile = await getUserProfile(token);
  
  // Extract businessId from profile (use first business if multiple)
  const businessId = profile.data?.business?.[0]?.id || null;
  console.log('📋 Profile fetched - Business ID:', businessId);

  // Fetch Experian score and recommendations in parallel
  console.log('📊 Fetching Experian score and recommendations in parallel...');
  const [experianData, recommendations] = await Promise.all([
    getExperianScore(token),
    businessId ? getRecommendations(token, businessId) : getRecommendations(token),
  ]);

  // If we got businessId but general recommendations, try personalized ones
  if (businessId && (!recommendations.recommendations || recommendations.recommendations.length === 0)) {
    console.log('🔄 No recommendations found, trying personalized recommendations with businessId:', businessId);
    try {
      const personalizedRecommendations = await getRecommendations(token, businessId);
      console.log('✅ Personalized recommendations fetched successfully');
      return {
        profile,
        experianData,
        recommendations: personalizedRecommendations,
        businessId,
      };
    } catch (error) {
      console.warn('⚠️ Failed to fetch personalized recommendations, using general ones');
      return {
        profile,
        experianData,
        recommendations,
        businessId,
      };
    }
  }

  console.log('✅ Credit profile and recommendations fetch completed');
  return {
    profile,
    experianData,
    recommendations,
    businessId,
  };
}

/**
 * Track when a user applies for a recommended card
 * @param token - Authentication token
 * @param businessId - Business ID (used in the endpoint path)
 * @param cardId - The card ID from the recommendation
 * @param notes - Optional notes about the application
 * @param metadata - Optional metadata object
 */
export interface CardApplicationResponse {
  message: string;
  data: {
    id: string;
    businessId: string;
    cardId: string;
    status: string;
    fitScore?: number;
    reason?: string;
    suggestedUsage?: string;
    notes: string;
    metadata: Record<string, any>;
    createdAt: string;
    updatedAt: string;
    card?: {
      id: string;
      name: string;
      brand?: string;
      network?: string | null;
      annualFee?: number | null;
      createdAt: string;
      updatedAt: string;
    };
  };
}

/**
 * Expected API Response Structure:
 * {
 *   "message": "Card application recorded",
 *   "data": {
 *     "id": "ffe5c44f-b061-4f59-9cb7-86f46b2bb0c2",
 *     "businessId": "5b1d0990-d47a-4dc3-8e3f-e81a92bb1f3d",
 *     "cardId": "149e1ee2-d30b-4769-b099-ea2b7b477183",
 *     "status": "APPLIED",
 *     "fitScore": 0.95,
 *     "reason": "...",
 *     "suggestedUsage": "...",
 *     "notes": "string",
 *     "metadata": {},
 *     "createdAt": "2025-11-13T03:11:41.395Z",
 *     "updatedAt": "2025-11-13T03:11:41.395Z",
 *     "card": {
 *       "id": "149e1ee2-d30b-4769-b099-ea2b7b477183",
 *       "name": "Ink Business Premier",
 *       "brand": "Ink",
 *       "network": null,
 *       "annualFee": null,
 *       "createdAt": "2025-11-07T07:50:21.198Z",
 *       "updatedAt": "2025-11-07T07:50:21.198Z"
 *     }
 *   }
 * }
 */

export async function trackCardApplication(
  token: string,
  businessId: string,
  cardId: string,
  notes?: string,
  metadata?: Record<string, any>
): Promise<CardApplicationResponse> {
  const url = `${API_BASE_URL}/recommendations/${businessId}/applications`;

  const requestBody = {
    cardId,
    status: 'APPLIED',
    notes: notes || '',
    metadata: metadata || {},
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to track card application');
  }

  const responseData: CardApplicationResponse = await response.json();
  return responseData;
}

