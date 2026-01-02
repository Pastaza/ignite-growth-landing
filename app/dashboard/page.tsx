'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthProvider';
import { useGiftCards } from '@/contexts/GiftCardContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import AddCardModal from '@/components/AddCardModal';
import { Plus, CreditCard, TrendingUp, AlertCircle } from 'lucide-react';
import { calculateMetrics } from '@/lib/calculations';
import { formatCurrency } from '@/lib/utils';

export default function DashboardPage() {
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
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  const metrics = calculateMetrics(cards);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">
              Manage your gift cards and track your savings
            </p>
          </div>
          <Button onClick={() => setIsAddModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Card
          </Button>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
                <span className="text-2xl font-bold">
                  {formatCurrency(metrics.totalValue)}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Cards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2 text-primary" />
                <span className="text-2xl font-bold">{metrics.activeCards}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Expiring Soon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <AlertCircle className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-2xl font-bold">{metrics.expiringCards}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Cards */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Gift Cards</CardTitle>
          </CardHeader>
          <CardContent>
            {cards.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  No gift cards yet. Add your first card to get started!
                </p>
                <Button onClick={() => setIsAddModalOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Card
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cards.slice(0, 5).map((card) => (
                  <div
                    key={card.id}
                    className="flex justify-between items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => router.push(`/cards/${card.id}`)}
                  >
                    <div>
                      <h3 className="font-semibold">{card.merchant}</h3>
                      <p className="text-sm text-muted-foreground">
                        {card.card_number ? `•••• ${card.card_number.slice(-4)}` : 'No card number'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatCurrency(card.balance)}</p>
                      {card.expiration_date && (
                        <p className="text-sm text-muted-foreground">
                          Expires: {new Date(card.expiration_date).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <AddCardModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      </div>
    </div>
  );
}
