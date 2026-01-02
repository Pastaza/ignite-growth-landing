export interface UserProfile {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  subscription_tier: string;
  subscription_status: 'active' | 'inactive' | 'cancelled';
  notification_preferences: {
    email: boolean;
    push: boolean;
    expiration_reminders: boolean;
    location_reminders: boolean;
  };
  created_at: string;
  updated_at: string;
}

export const DEFAULT_NOTIFICATION_PREFERENCES = {
  email: true,
  push: true,
  expiration_reminders: true,
  location_reminders: false,
};

export function createDefaultProfile(userId: string, email: string): Partial<UserProfile> {
  return {
    id: userId,
    email,
    subscription_tier: 'free',
    subscription_status: 'active',
    notification_preferences: DEFAULT_NOTIFICATION_PREFERENCES,
  };
}
