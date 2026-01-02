'use client';

import { useState } from 'react';
import { Modal } from './ui/Modal';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { useGiftCards } from '@/contexts/GiftCardContext';

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddCardModal({ isOpen, onClose }: AddCardModalProps) {
  const { addCard } = useGiftCards();
  const [formData, setFormData] = useState({
    merchant: '',
    balance: '',
    initial_balance: '',
    card_number: '',
    pin: '',
    expiration_date: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await addCard({
        merchant: formData.merchant,
        balance: parseFloat(formData.balance),
        initial_balance: parseFloat(formData.initial_balance || formData.balance),
        card_number: formData.card_number || undefined,
        pin: formData.pin || undefined,
        expiration_date: formData.expiration_date || undefined,
        notes: formData.notes || undefined,
        is_active: true,
      });

      // Reset form
      setFormData({
        merchant: '',
        balance: '',
        initial_balance: '',
        card_number: '',
        pin: '',
        expiration_date: '',
        notes: '',
      });
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add card');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add Gift Card"
      description="Enter your gift card details"
      className="max-w-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Merchant *</label>
          <Input
            required
            value={formData.merchant}
            onChange={(e) => setFormData({ ...formData, merchant: e.target.value })}
            placeholder="e.g. Amazon, Starbucks"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Current Balance *</label>
            <Input
              required
              type="number"
              step="0.01"
              value={formData.balance}
              onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
              placeholder="25.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Initial Balance</label>
            <Input
              type="number"
              step="0.01"
              value={formData.initial_balance}
              onChange={(e) => setFormData({ ...formData, initial_balance: e.target.value })}
              placeholder="25.00"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Card Number (last 4 digits)</label>
          <Input
            value={formData.card_number}
            onChange={(e) => setFormData({ ...formData, card_number: e.target.value })}
            placeholder="1234"
            maxLength={20}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">PIN</label>
          <Input
            type="password"
            value={formData.pin}
            onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
            placeholder="••••"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Expiration Date</label>
          <Input
            type="date"
            value={formData.expiration_date}
            onChange={(e) => setFormData({ ...formData, expiration_date: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Notes</label>
          <Input
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Optional notes"
          />
        </div>

        {error && (
          <div className="text-sm text-destructive">{error}</div>
        )}

        <div className="flex justify-end gap-2 pt-4">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Card'}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
