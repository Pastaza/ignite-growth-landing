'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { GiftCard, Transaction } from '@/lib/giftCard';
import { useAuth } from './AuthProvider';

interface GiftCardContextType {
  cards: GiftCard[];
  loading: boolean;
  addCard: (card: Omit<GiftCard, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => Promise<void>;
  updateCard: (id: string, updates: Partial<GiftCard>) => Promise<void>;
  deleteCard: (id: string) => Promise<void>;
  getCardById: (id: string) => GiftCard | undefined;
  getTransactions: (cardId: string) => Promise<Transaction[]>;
  addTransaction: (transaction: Omit<Transaction, 'id' | 'created_at'>) => Promise<void>;
  refreshCards: () => Promise<void>;
}

const GiftCardContext = createContext<GiftCardContextType | undefined>(undefined);

export function GiftCardProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [cards, setCards] = useState<GiftCard[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCards = useCallback(async () => {
    if (!user) {
      setCards([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('gift_cards')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCards(data || []);
    } catch (error) {
      console.error('Error fetching gift cards:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const addCard = async (cardData: Omit<GiftCard, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    if (!user) throw new Error('User must be logged in');

    const { data, error } = await supabase
      .from('gift_cards')
      .insert([
        {
          ...cardData,
          user_id: user.id,
        },
      ])
      .select()
      .single();

    if (error) throw error;
    setCards(prev => [data, ...prev]);
  };

  const updateCard = async (id: string, updates: Partial<GiftCard>) => {
    const { data, error } = await supabase
      .from('gift_cards')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    setCards(prev => prev.map(card => (card.id === id ? data : card)));
  };

  const deleteCard = async (id: string) => {
    const { error } = await supabase.from('gift_cards').delete().eq('id', id);

    if (error) throw error;
    setCards(prev => prev.filter(card => card.id !== id));
  };

  const getCardById = (id: string) => {
    return cards.find(card => card.id === id);
  };

  const getTransactions = async (cardId: string): Promise<Transaction[]> => {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('gift_card_id', cardId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  };

  const addTransaction = async (transactionData: Omit<Transaction, 'id' | 'created_at'>) => {
    const { error } = await supabase.from('transactions').insert([transactionData]);

    if (error) throw error;

    // Update card balance
    const card = cards.find(c => c.id === transactionData.gift_card_id);
    if (card) {
      const newBalance = card.balance + (transactionData.transaction_type === 'refund' ? transactionData.amount : -transactionData.amount);
      await updateCard(card.id, { balance: newBalance });
    }
  };

  const refreshCards = async () => {
    setLoading(true);
    await fetchCards();
  };

  const value = {
    cards,
    loading,
    addCard,
    updateCard,
    deleteCard,
    getCardById,
    getTransactions,
    addTransaction,
    refreshCards,
  };

  return <GiftCardContext.Provider value={value}>{children}</GiftCardContext.Provider>;
}

export function useGiftCards() {
  const context = useContext(GiftCardContext);
  if (context === undefined) {
    throw new Error('useGiftCards must be used within a GiftCardProvider');
  }
  return context;
}
