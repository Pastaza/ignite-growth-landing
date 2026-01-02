'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthProvider';
import { useGiftCards } from '@/contexts/GiftCardContext';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import EmptyState from '@/components/EmptyState';
import AddCardModal from '@/components/AddCardModal';
import { Plus, Gift } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import { getGiftCardStatus } from '@/lib/giftCard';

export default function CardsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { cards, loading: cardsLoading } = useGiftCards();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  if (authLoading || cardsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Gift Cards</h1>
            <p className="text-muted-foreground">
              View and manage all your gift cards
            </p>
          </div>
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Card
          </Button>
        </div>

        {cards.length === 0 ? (
          <Card>
            <CardContent className="py-12">
              <EmptyState
                icon={<Gift className="h-12 w-12 text-muted-foreground" />}
                title="No gift cards yet"
                description="Add your first gift card to start tracking your balances and expiration dates."
                action={
                  <Button onClick={() => setIsAddModalOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Card
                  </Button>
                }
              />
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => {
              const status = getGiftCardStatus(card);
              return (
                <Card
                  key={card.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => router.push(`/cards/${card.id}`)}
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <span>{card.merchant}</span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          status === 'active'
                            ? 'bg-green-100 text-green-800'
                            : status === 'expired'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {status}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <p className="text-2xl font-bold">{formatCurrency(card.balance)}</p>
                        <p className="text-sm text-muted-foreground">
                          of {formatCurrency(card.initial_balance)} initial
                        </p>
                      </div>
                      {card.expiration_date && (
                        <p className="text-sm text-muted-foreground">
                          Expires: {new Date(card.expiration_date).toLocaleDateString()}
                        </p>
                      )}
                      {card.card_number && (
                        <p className="text-sm text-muted-foreground">
                          •••• {card.card_number.slice(-4)}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        <AddCardModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      </div>
    </div>
  );
}
