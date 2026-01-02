'use client';

import { AuthProvider } from '@/contexts/AuthProvider';
import { GiftCardProvider } from '@/contexts/GiftCardContext';
import { SubscriptionProvider } from '@/contexts/SubscriptionContext';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <GiftCardProvider>
        <SubscriptionProvider>{children}</SubscriptionProvider>
      </GiftCardProvider>
    </AuthProvider>
  );
}
