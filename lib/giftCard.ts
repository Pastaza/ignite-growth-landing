export interface GiftCard {
  id: string;
  user_id: string;
  merchant: string;
  balance: number;
  initial_balance: number;
  card_number?: string;
  pin?: string;
  expiration_date?: string;
  notes?: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
  last_checked?: string;
  is_active: boolean;
}

export interface Transaction {
  id: string;
  gift_card_id: string;
  amount: number;
  transaction_type: 'purchase' | 'refund' | 'adjustment';
  description?: string;
  created_at: string;
}

export type GiftCardStatus = 'active' | 'expired' | 'depleted';

export function getGiftCardStatus(card: GiftCard): GiftCardStatus {
  if (card.balance <= 0) return 'depleted';
  if (card.expiration_date && new Date(card.expiration_date) < new Date()) {
    return 'expired';
  }
  return 'active';
}

export function calculateTotalBalance(cards: GiftCard[]): number {
  return cards
    .filter(card => getGiftCardStatus(card) === 'active')
    .reduce((total, card) => total + card.balance, 0);
}
