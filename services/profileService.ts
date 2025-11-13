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

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to fetch recommendations');
  }

  return await response.json();
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
  // First, fetch user profile to get businessId
  const profile = await getUserProfile(token);
  
  // Extract businessId from profile (use first business if multiple)
  const businessId = profile.data?.business?.[0]?.id || null;
  
  console.log('📋 Profile fetched - Business ID:', businessId);
  console.log('Businesses:', profile.data?.business?.map(b => ({ id: b.id, name: b.name })));

  // Fetch Experian score and recommendations in parallel
  const [experianData, recommendations] = await Promise.all([
    getExperianScore(token),
    businessId ? getRecommendations(token, businessId) : getRecommendations(token),
  ]);

  // If we got businessId but general recommendations, try personalized ones
  if (businessId && (!recommendations.recommendations || recommendations.recommendations.length === 0)) {
    try {
      console.log('🔄 Fetching personalized recommendations with businessId:', businessId);
      const personalizedRecommendations = await getRecommendations(token, businessId);
      return {
        profile,
        experianData,
        recommendations: personalizedRecommendations,
        businessId,
      };
    } catch (error) {
      console.warn('⚠️ Failed to fetch personalized recommendations, using general ones:', error);
      return {
        profile,
        experianData,
        recommendations,
        businessId,
      };
    }
  }

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

export async function trackCardApplication(
  token: string,
  businessId: string,
  cardId: string,
  notes?: string,
  metadata?: Record<string, any>
): Promise<CardApplicationResponse> {
  const url = `${API_BASE_URL}/recommendations/${businessId}/applications`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      cardId,
      status: 'APPLIED',
      notes: notes || '',
      metadata: metadata || {},
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to track card application');
  }

  const responseData: CardApplicationResponse = await response.json();
  console.log('✅ Card application tracked successfully:', {
    applicationId: responseData.data.id,
    cardId,
    cardName: responseData.data.card?.name,
    businessId,
    status: responseData.data.status,
  });
  
  return responseData;
}

