export interface SubscriptionTier {
  id: string;
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  limits: {
    maxCards: number;
    maxTransactions: number;
  };
}

export const SUBSCRIPTION_TIERS: SubscriptionTier[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    interval: 'month',
    features: [
      'Up to 5 gift cards',
      'Basic card tracking',
      'Expiration reminders',
      'Email notifications',
    ],
    limits: {
      maxCards: 5,
      maxTransactions: 50,
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 4.99,
    interval: 'month',
    features: [
      'Unlimited gift cards',
      'Unlimited transactions',
      'Advanced analytics',
      'Priority support',
      'Location-based reminders',
      'Card balance auto-check',
    ],
    limits: {
      maxCards: Infinity,
      maxTransactions: Infinity,
    },
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 8.99,
    interval: 'month',
    features: [
      'Everything in Pro',
      'Family sharing (up to 5 members)',
      'Bulk card import',
      'API access',
      'White-label options',
      'Dedicated support',
    ],
    limits: {
      maxCards: Infinity,
      maxTransactions: Infinity,
    },
  },
];

export function getSubscriptionTier(tierId: string): SubscriptionTier | undefined {
  return SUBSCRIPTION_TIERS.find(tier => tier.id === tierId);
}

export function canAddCard(currentCount: number, tierId: string): boolean {
  const tier = getSubscriptionTier(tierId);
  if (!tier) return false;
  return currentCount < tier.limits.maxCards;
}
