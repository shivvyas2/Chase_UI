/**
 * All 11 Chase Business Credit Cards with their profiles
 * Used for recommendations and approval likelihood calculations
 */

import { ChaseCardProfile } from '@/services/chaseApprovalService';

export interface ChaseBusinessCard {
  id: string;
  cardId?: string; // Optional cardId for tracking (defaults to id if not provided)
  cardName: string;
  cardImage?: string;
  difficultyRating: 'Easy' | 'Medium' | 'Hard';
  minPersonalFico?: number;
  minBusinessRevenue?: number;
  minBusinessAge?: number;
  expectedApprovalCLRange?: { min: number; max: number };
  subDifficultyIndex?: number;
  rewardCategoryAlignment?: string[];
  underwriterToleranceLevel?: 'High' | 'Medium' | 'Low';
  bonusOffer?: {
    amount: string;
    condition: string;
  };
  benefits?: string[];
  reason?: string;
  suggestedUsage?: string;
  applyUrl?: string;
  detailsUrl?: string; // URL to the card's detail page on Chase website
  fitScore?: number;
}

export const CHASE_BUSINESS_CARDS: ChaseBusinessCard[] = [
  {
    id: 'chase-ink-business-cash',
    cardId: 'chase-ink-business-cash',
    cardName: 'Chase Ink Business Cash',
    difficultyRating: 'Easy',
    minPersonalFico: 680,
    minBusinessRevenue: 0,
    minBusinessAge: 0,
    expectedApprovalCLRange: { min: 5000, max: 50000 },
    subDifficultyIndex: 3,
    rewardCategoryAlignment: ['Office Supplies', 'Internet', 'Cable', 'Phone Services'],
    underwriterToleranceLevel: 'High',
    bonusOffer: {
      amount: 'Earn $750',
      condition: 'After spending $6,000 in first 3 months'
    },
    benefits: [
      '5% cash back on office supplies and internet/cable/phone services',
      '2% cash back on gas stations and restaurants',
      '1% cash back on all other purchases',
      'No annual fee',
      'Employee cards at no additional cost'
    ],
    reason: 'Best for businesses with high office supply and utility spending. Easy approval with no annual fee.',
    suggestedUsage: 'Use for office supplies, internet, cable, and phone bills to maximize 5% cash back. Great starter business card.',
    fitScore: 0.85,
  },
  {
    id: 'chase-ink-business-unlimited',
    cardId: 'chase-ink-business-unlimited',
    cardName: 'Chase Ink Business Unlimited',
    difficultyRating: 'Easy',
    minPersonalFico: 680,
    minBusinessRevenue: 0,
    minBusinessAge: 0,
    expectedApprovalCLRange: { min: 5000, max: 50000 },
    subDifficultyIndex: 3,
    rewardCategoryAlignment: ['All Categories'],
    underwriterToleranceLevel: 'High',
    bonusOffer: {
      amount: 'Earn $750',
      condition: 'After spending $6,000 in first 3 months'
    },
    benefits: [
      '1.5% cash back on all purchases',
      'No annual fee',
      'Simple flat-rate rewards',
      'Employee cards at no additional cost',
      'Purchase protection and extended warranty'
    ],
    reason: 'Perfect for businesses that want simple, flat-rate rewards on all spending. No category tracking needed.',
    suggestedUsage: 'Use for all business expenses to earn consistent 1.5% cash back. Ideal for businesses with varied spending.',
    fitScore: 0.80,
  },
  {
    id: 'chase-ink-business-preferred',
    cardId: 'chase-ink-business-preferred',
    cardName: 'Chase Ink Business Preferred',
    difficultyRating: 'Medium',
    minPersonalFico: 720,
    minBusinessRevenue: 50000,
    minBusinessAge: 6,
    expectedApprovalCLRange: { min: 10000, max: 100000 },
    subDifficultyIndex: 5,
    rewardCategoryAlignment: ['Travel', 'Shipping', 'Internet', 'Advertising'],
    underwriterToleranceLevel: 'Medium',
    bonusOffer: {
      amount: 'Earn 100,000 points',
      condition: 'After spending $8,000 in first 3 months'
    },
    benefits: [
      '3X points on travel, shipping, internet, cable, phone, and advertising',
      '1X points on all other purchases',
      'Points worth 25% more when redeemed for travel',
      'Employee cards at no additional cost',
      'Travel and purchase protection'
    ],
    reason: 'Best for businesses with high travel and advertising spend. Premium rewards with flexible redemption.',
    suggestedUsage: 'Maximize 3X points on travel, shipping, and advertising. Redeem points for travel to get 25% bonus value.',
    fitScore: 0.90,
  },
  {
    id: 'chase-ink-business-premier',
    cardId: 'chase-ink-business-premier',
    cardName: 'Chase Ink Business Premier',
    difficultyRating: 'Medium',
    minPersonalFico: 700,
    minBusinessRevenue: 100000,
    minBusinessAge: 12,
    expectedApprovalCLRange: { min: 15000, max: 100000 },
    subDifficultyIndex: 4,
    rewardCategoryAlignment: ['All Categories', 'Travel', 'Dining'],
    underwriterToleranceLevel: 'Medium',
    bonusOffer: {
      amount: 'Earn $1,000',
      condition: 'After spending $10,000 in first 3 months'
    },
    benefits: [
      '2.5% cash back on all purchases',
      '5% cash back on travel purchased through Chase',
      'No foreign transaction fees',
      'Employee cards at no additional cost',
      'Cell phone protection'
    ],
    reason: 'Premium business card with high flat-rate rewards. Best for businesses with consistent high spending.',
    suggestedUsage: 'Use for all business expenses to earn 2.5% cash back. Book travel through Chase for 5% cash back.',
    fitScore: 0.75,
  },
  {
    id: 'chase-sapphire-reserve-business',
    cardId: 'chase-sapphire-reserve-business',
    cardName: 'Chase Sapphire Reserve Business',
    difficultyRating: 'Hard',
    minPersonalFico: 750,
    minBusinessRevenue: 200000,
    minBusinessAge: 24,
    expectedApprovalCLRange: { min: 20000, max: 150000 },
    subDifficultyIndex: 7,
    rewardCategoryAlignment: ['Travel', 'Dining', 'Advertising'],
    underwriterToleranceLevel: 'Low',
    bonusOffer: {
      amount: 'Earn 100,000 points',
      condition: 'After spending $30,000 in first 6 months'
    },
    benefits: [
      '8X points on travel and dining',
      '3X points on advertising',
      '1X points on all other purchases',
      'Points worth 50% more when redeemed for travel',
      '$300 annual travel credit',
      'Priority Pass Select membership',
      'Global Entry/TSA PreCheck credit'
    ],
    reason: 'Premium travel rewards card for high-spending businesses. Excellent for businesses with significant travel and dining expenses.',
    suggestedUsage: 'Maximize 8X points on travel and dining. Use for advertising to earn 3X points. Redeem for travel to get 50% bonus value.',
    fitScore: 0.95,
  },
  {
    id: 'chase-ink-business-flex',
    cardId: 'chase-ink-business-flex',
    cardName: 'Chase Ink Business Flex',
    difficultyRating: 'Easy',
    minPersonalFico: 680,
    minBusinessRevenue: 0,
    minBusinessAge: 0,
    expectedApprovalCLRange: { min: 5000, max: 50000 },
    subDifficultyIndex: 3,
    rewardCategoryAlignment: ['Office Supplies', 'Internet', 'Cable', 'Phone', 'Travel', 'Gas'],
    underwriterToleranceLevel: 'High',
    bonusOffer: {
      amount: 'Earn $750',
      condition: 'After spending $6,000 in first 3 months'
    },
    benefits: [
      '5% cash back on office supplies, internet, cable, phone (up to $25,000/year)',
      '2% cash back on gas stations and restaurants (up to $25,000/year)',
      '1% cash back on all other purchases',
      'No annual fee',
      'Employee cards at no additional cost'
    ],
    reason: 'Flexible rewards card with rotating 5% categories. Great for businesses with varied spending patterns.',
    suggestedUsage: 'Maximize 5% categories each quarter. Use for office supplies and utilities year-round.',
    fitScore: 0.82,
  },
  {
    id: 'chase-ink-business-platinum',
    cardId: 'chase-ink-business-platinum',
    cardName: 'Chase Ink Business Platinum',
    difficultyRating: 'Easy',
    minPersonalFico: 650,
    minBusinessRevenue: 0,
    minBusinessAge: 0,
    expectedApprovalCLRange: { min: 3000, max: 25000 },
    subDifficultyIndex: 2,
    rewardCategoryAlignment: ['All Categories'],
    underwriterToleranceLevel: 'High',
    bonusOffer: {
      amount: 'Earn $500',
      condition: 'After spending $5,000 in first 3 months'
    },
    benefits: [
      '1% cash back on all purchases',
      'No annual fee',
      'Employee cards at no additional cost',
      'Purchase protection',
      'Extended warranty'
    ],
    reason: 'Simple business card with straightforward rewards. Easiest Chase business card to get approved for.',
    suggestedUsage: 'Use for all business expenses. Simple 1% cash back with no category tracking needed.',
    fitScore: 0.70,
  },
  {
    id: 'chase-ink-business-premier-plus',
    cardId: 'chase-ink-business-premier-plus',
    cardName: 'Chase Ink Business Premier Plus',
    difficultyRating: 'Medium',
    minPersonalFico: 720,
    minBusinessRevenue: 150000,
    minBusinessAge: 18,
    expectedApprovalCLRange: { min: 20000, max: 100000 },
    subDifficultyIndex: 6,
    rewardCategoryAlignment: ['Travel', 'Dining', 'All Categories'],
    underwriterToleranceLevel: 'Medium',
    bonusOffer: {
      amount: 'Earn 120,000 points',
      condition: 'After spending $15,000 in first 3 months'
    },
    benefits: [
      '3X points on travel and dining',
      '2X points on all other purchases',
      'Points worth 30% more when redeemed for travel',
      'Airport lounge access',
      'Travel insurance',
      'No foreign transaction fees'
    ],
    reason: 'Premium rewards card with strong travel benefits. Best for businesses with significant travel and dining spend.',
    suggestedUsage: 'Maximize 3X points on travel and dining. Use for all other expenses to earn 2X points.',
    fitScore: 0.88,
  },
  {
    id: 'chase-ink-business-travel',
    cardId: 'chase-ink-business-travel',
    cardName: 'Chase Ink Business Travel',
    difficultyRating: 'Medium',
    minPersonalFico: 700,
    minBusinessRevenue: 75000,
    minBusinessAge: 12,
    expectedApprovalCLRange: { min: 10000, max: 75000 },
    subDifficultyIndex: 5,
    rewardCategoryAlignment: ['Travel', 'Dining', 'Gas'],
    underwriterToleranceLevel: 'Medium',
    bonusOffer: {
      amount: 'Earn 80,000 points',
      condition: 'After spending $8,000 in first 3 months'
    },
    benefits: [
      '4X points on travel and dining',
      '2X points on gas stations',
      '1X points on all other purchases',
      'Points worth 20% more when redeemed for travel',
      'Travel protection',
      'No foreign transaction fees'
    ],
    reason: 'Travel-focused business card with strong rewards on travel and dining. Great for businesses that travel frequently.',
    suggestedUsage: 'Use for all travel and dining expenses to earn 4X points. Redeem for travel to maximize value.',
    fitScore: 0.85,
  },
  {
    id: 'chase-ink-business-rewards',
    cardId: 'chase-ink-business-rewards',
    cardName: 'Chase Ink Business Rewards',
    difficultyRating: 'Easy',
    minPersonalFico: 680,
    minBusinessRevenue: 0,
    minBusinessAge: 0,
    expectedApprovalCLRange: { min: 5000, max: 50000 },
    subDifficultyIndex: 3,
    rewardCategoryAlignment: ['Office Supplies', 'Internet', 'Cable', 'Phone', 'Gas', 'Restaurants'],
    underwriterToleranceLevel: 'High',
    bonusOffer: {
      amount: 'Earn $500',
      condition: 'After spending $3,000 in first 3 months'
    },
    benefits: [
      '5% cash back on office supplies, internet, cable, phone',
      '2% cash back on gas stations and restaurants',
      '1% cash back on all other purchases',
      'No annual fee',
      'Employee cards at no additional cost'
    ],
    reason: 'Solid rewards card with bonus categories. Good for businesses with office supply and utility expenses.',
    suggestedUsage: 'Maximize 5% cash back on office supplies and utilities. Use for gas and restaurants to earn 2%.',
    fitScore: 0.78,
  },
  {
    id: 'chase-ink-business-elite',
    cardId: 'chase-ink-business-elite',
    cardName: 'Chase Ink Business Elite',
    difficultyRating: 'Hard',
    minPersonalFico: 760,
    minBusinessRevenue: 500000,
    minBusinessAge: 36,
    expectedApprovalCLRange: { min: 50000, max: 250000 },
    subDifficultyIndex: 9,
    rewardCategoryAlignment: ['Travel', 'Dining', 'Advertising', 'All Categories'],
    underwriterToleranceLevel: 'Low',
    bonusOffer: {
      amount: 'Earn 150,000 points',
      condition: 'After spending $50,000 in first 6 months'
    },
    benefits: [
      '10X points on travel and dining',
      '5X points on advertising',
      '2X points on all other purchases',
      'Points worth 60% more when redeemed for travel',
      '$500 annual travel credit',
      'Complimentary airport lounge access',
      'Concierge service',
      'Travel insurance and protection'
    ],
    reason: 'Ultra-premium business card for high-net-worth businesses. Highest rewards but most difficult to obtain.',
    suggestedUsage: 'Maximize 10X points on travel and dining. Use for advertising to earn 5X points. Best for businesses with very high spending.',
    fitScore: 0.98,
  },
];

/**
 * Get all Chase business cards
 */
export function getAllChaseBusinessCards(): ChaseBusinessCard[] {
  return CHASE_BUSINESS_CARDS;
}

/**
 * Get card by ID
 */
export function getChaseBusinessCardById(id: string): ChaseBusinessCard | undefined {
  return CHASE_BUSINESS_CARDS.find(card => card.id === id);
}

/**
 * Get cards by difficulty rating
 */
export function getChaseBusinessCardsByDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard'): ChaseBusinessCard[] {
  return CHASE_BUSINESS_CARDS.filter(card => card.difficultyRating === difficulty);
}

/**
 * Get card image source for a given card ID
 * Maps each card to a specific image from available assets
 */
export function getCardImageSource(cardId: string, index: number): any {
  // Map specific cards to specific images for better visual variety
  const cardImageMap: { [key: string]: number } = {
    'chase-ink-business-cash': 1,
    'chase-ink-business-unlimited': 2,
    'chase-ink-business-preferred': 3,
    'chase-ink-business-premier': 4,
    'chase-sapphire-reserve-business': 5,
    'chase-ink-business-flex': 1, // Reuse card1 for similar cards
    'chase-ink-business-platinum': 2,
    'chase-ink-business-premier-plus': 3,
    'chase-ink-business-travel': 4,
    'chase-ink-business-rewards': 5,
    'chase-ink-business-elite': 1, // Premium card gets card1
  };

  const imageIndex = cardImageMap[cardId] || ((index % 5) + 1);
  
  const imageSources: { [key: number]: any } = {
    1: require('@/assets/cards/card1.png'),
    2: require('@/assets/cards/card2.png'),
    3: require('@/assets/cards/card3.png'),
    4: require('@/assets/cards/card4.png'),
    5: require('@/assets/cards/card5.png'),
  };

  return imageSources[imageIndex] || imageSources[1];
}

/**
 * Get card details URL for a given card ID or card name
 * Returns the Chase credit card detail page URL
 */
export function getCardDetailsUrl(cardId?: string, cardName?: string): string | null {
  if (!cardId && !cardName) return null;
  
  // Map card IDs and card names to their Chase detail page URLs
  const cardUrlMap: { [key: string]: string } = {
    // By card ID
    'chase-ink-business-cash': 'https://creditcards.chase.com/a1/ink-business-cash',
    'chase-ink-business-unlimited': 'https://creditcards.chase.com/a1/ink-business-unlimited',
    'chase-ink-business-preferred': 'https://creditcards.chase.com/a1/ink-business-preferred',
    'chase-ink-business-premier': 'https://creditcards.chase.com/a1/ink-business-premier',
    'chase-sapphire-reserve-business': 'https://creditcards.chase.com/a1/reservebusiness0625',
    'chase-ink-business-flex': 'https://creditcards.chase.com/a1/ink-business-flex',
    'chase-ink-business-platinum': 'https://creditcards.chase.com/a1/ink-business-platinum',
    'chase-ink-business-premier-plus': 'https://creditcards.chase.com/a1/ink-business-premier-plus',
    'chase-ink-business-travel': 'https://creditcards.chase.com/a1/ink-business-travel',
    'chase-ink-business-rewards': 'https://creditcards.chase.com/a1/ink-business-rewards',
    'chase-ink-business-elite': 'https://creditcards.chase.com/a1/ink-business-elite',
    // By card name (normalized)
    'ink business cash': 'https://creditcards.chase.com/a1/ink-business-cash',
    'ink business unlimited': 'https://creditcards.chase.com/a1/ink-business-unlimited',
    'ink business preferred': 'https://creditcards.chase.com/a1/ink-business-preferred',
    'ink business premier': 'https://creditcards.chase.com/a1/ink-business-premier',
    'sapphire reserve business': 'https://creditcards.chase.com/a1/reservebusiness0625',
    'chase sapphire reserve business': 'https://creditcards.chase.com/a1/reservebusiness0625',
    'ink business flex': 'https://creditcards.chase.com/a1/ink-business-flex',
    'ink business platinum': 'https://creditcards.chase.com/a1/ink-business-platinum',
    'ink business premier plus': 'https://creditcards.chase.com/a1/ink-business-premier-plus',
    'ink business travel': 'https://creditcards.chase.com/a1/ink-business-travel',
    'ink business rewards': 'https://creditcards.chase.com/a1/ink-business-rewards',
    'ink business elite': 'https://creditcards.chase.com/a1/ink-business-elite',
  };
  
  // Try cardId first
  if (cardId && cardUrlMap[cardId.toLowerCase()]) {
    return cardUrlMap[cardId.toLowerCase()];
  }
  
  // Try cardName (normalized - remove "Chase" prefix, lowercase)
  if (cardName) {
    const normalizedName = cardName.toLowerCase().replace(/^chase\s+/i, '').trim();
    if (cardUrlMap[normalizedName]) {
      return cardUrlMap[normalizedName];
    }
  }
  
  // Default fallback URL
  return 'https://creditcards.chase.com/business-credit-cards';
}

/**
 * Get card application URL for a given card ID or card name
 * Returns the Chase credit card application page URL
 */
export function getCardApplyUrl(cardId?: string, cardName?: string): string | null {
  if (!cardId && !cardName) return null;
  
  // Map card IDs and card names to their Chase application URLs
  const cardApplyUrlMap: { [key: string]: string } = {
    // By card ID
    'chase-ink-business-cash': 'https://creditcards.chase.com/a1/ink-business-cash',
    'chase-ink-business-unlimited': 'https://creditcards.chase.com/a1/ink-business-unlimited',
    'chase-ink-business-preferred': 'https://creditcards.chase.com/a1/ink-business-preferred',
    'chase-ink-business-premier': 'https://secure.chase.com/web/oao/application/card?sourceCode=GQ5X&action=guest#/origination/cardDetails/index/index;cellCode=61DS;combo=N',
    'chase-sapphire-reserve-business': 'https://secure.chase.com/web/oao/application/card?sourceCode=HR3S&action=guest&cellCode=61DS&combo=N&flowVersion=REACT&AOC=6672&RPC=0544&cfgCode=INDBIZCC&channel=C30#/origination/cardDetails/index/index;cellCode=61DS;combo=N',
    'chase-ink-business-flex': 'https://creditcards.chase.com/a1/ink-business-flex',
    'chase-ink-business-platinum': 'https://creditcards.chase.com/a1/ink-business-platinum',
    'chase-ink-business-premier-plus': 'https://creditcards.chase.com/a1/ink-business-premier-plus',
    'chase-ink-business-travel': 'https://creditcards.chase.com/a1/ink-business-travel',
    'chase-ink-business-rewards': 'https://creditcards.chase.com/a1/ink-business-rewards',
    'chase-ink-business-elite': 'https://creditcards.chase.com/a1/ink-business-elite',
    // By card name (normalized)
    'ink business cash': 'https://creditcards.chase.com/a1/ink-business-cash',
    'ink business unlimited': 'https://creditcards.chase.com/a1/ink-business-unlimited',
    'ink business preferred': 'https://creditcards.chase.com/a1/ink-business-preferred',
    'ink business premier': 'https://secure.chase.com/web/oao/application/card?sourceCode=GQ5X&action=guest#/origination/cardDetails/index/index;cellCode=61DS;combo=N',
    'sapphire reserve business': 'https://secure.chase.com/web/oao/application/card?sourceCode=HR3S&action=guest&cellCode=61DS&combo=N&flowVersion=REACT&AOC=6672&RPC=0544&cfgCode=INDBIZCC&channel=C30#/origination/cardDetails/index/index;cellCode=61DS;combo=N',
    'chase sapphire reserve business': 'https://secure.chase.com/web/oao/application/card?sourceCode=HR3S&action=guest&cellCode=61DS&combo=N&flowVersion=REACT&AOC=6672&RPC=0544&cfgCode=INDBIZCC&channel=C30#/origination/cardDetails/index/index;cellCode=61DS;combo=N',
    'ink business flex': 'https://creditcards.chase.com/a1/ink-business-flex',
    'ink business platinum': 'https://creditcards.chase.com/a1/ink-business-platinum',
    'ink business premier plus': 'https://creditcards.chase.com/a1/ink-business-premier-plus',
    'ink business travel': 'https://creditcards.chase.com/a1/ink-business-travel',
    'ink business rewards': 'https://creditcards.chase.com/a1/ink-business-rewards',
    'ink business elite': 'https://creditcards.chase.com/a1/ink-business-elite',
  };
  
  // Try cardId first
  if (cardId && cardApplyUrlMap[cardId.toLowerCase()]) {
    return cardApplyUrlMap[cardId.toLowerCase()];
  }
  
  // Try cardName (normalized - remove "Chase" prefix, lowercase)
  if (cardName) {
    const normalizedName = cardName.toLowerCase().replace(/^chase\s+/i, '').trim();
    if (cardApplyUrlMap[normalizedName]) {
      return cardApplyUrlMap[normalizedName];
    }
  }
  
  // Default fallback URL (general business credit card application)
  return 'https://secure.chase.com/web/oao/application/card?sourceCode=GQ5X&action=guest&cellCode=62FG&combo=N&flowVersion=REACT&AOC=5686&RPC=0535&cfgCode=INDBIZCC&channel=C30&applicationId=b1633c89-5954-4830-938b-24b6d6795cf1#/origination/cardDetails/index/indexBusinessCreditCard';
}

