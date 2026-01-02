import { GiftCard } from './giftCard';

export function calculateTotalValue(cards: GiftCard[]): number {
  return cards.reduce((sum, card) => sum + card.balance, 0);
}

export function calculateActiveCards(cards: GiftCard[]): number {
  return cards.filter(card => card.is_active && card.balance > 0).length;
}

export function calculateExpiringCards(cards: GiftCard[], daysThreshold: number = 30): number {
  const now = new Date();
  const threshold = new Date(now.getTime() + daysThreshold * 24 * 60 * 60 * 1000);
  
  return cards.filter(card => {
    if (!card.expiration_date || !card.is_active) return false;
    const expDate = new Date(card.expiration_date);
    return expDate <= threshold && expDate > now;
  }).length;
}

export function calculateSavings(cards: GiftCard[]): number {
  // Calculate how much value would have been lost to expired/forgotten cards
  // This is a simple calculation based on cards that are now being tracked
  return cards.filter(card => card.is_active).reduce((sum, card) => sum + card.balance, 0);
}

export interface CardMetrics {
  totalValue: number;
  activeCards: number;
  expiringCards: number;
  savings: number;
}

export function calculateMetrics(cards: GiftCard[]): CardMetrics {
  return {
    totalValue: calculateTotalValue(cards),
    activeCards: calculateActiveCards(cards),
    expiringCards: calculateExpiringCards(cards),
    savings: calculateSavings(cards),
  };
}
