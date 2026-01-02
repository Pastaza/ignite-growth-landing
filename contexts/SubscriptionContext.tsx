'use client';

import { createContext, useContext } from 'react';
import { useAuth } from './AuthProvider';
import { SUBSCRIPTION_TIERS, SubscriptionTier, canAddCard } from '@/lib/subscription';

interface SubscriptionContextType {
  currentTier: SubscriptionTier;
  canAddCard: (currentCount: number) => boolean;
  upgrade: (tierId: string) => Promise<void>;
  downgrade: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { profile } = useAuth();

  const getCurrentTier = (): SubscriptionTier => {
    const tierId = profile?.subscription_tier || 'free';
    return SUBSCRIPTION_TIERS.find(tier => tier.id === tierId) || SUBSCRIPTION_TIERS[0];
  };

  const canAddCardCheck = (currentCount: number): boolean => {
    const tierId = profile?.subscription_tier || 'free';
    return canAddCard(currentCount, tierId);
  };

  const upgrade = async (tierId: string) => {
    // TODO: Implement payment processing
    // This would integrate with a payment provider like Stripe
    console.log('Upgrading to tier:', tierId);
    throw new Error('Payment integration not yet implemented');
  };

  const downgrade = async () => {
    // TODO: Implement downgrade logic
    console.log('Downgrading subscription');
    throw new Error('Downgrade logic not yet implemented');
  };

  const value = {
    currentTier: getCurrentTier(),
    canAddCard: canAddCardCheck,
    upgrade,
    downgrade,
  };

  return <SubscriptionContext.Provider value={value}>{children}</SubscriptionContext.Provider>;
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
}
