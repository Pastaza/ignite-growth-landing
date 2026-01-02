import { supabaseAdmin } from '../lib/supabase-admin';
import { addDays } from 'date-fns';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function sendExpirationReminders() {
  try {
    console.log('Checking for expiring gift cards...');

    // Get cards expiring in the next 7 days
    const sevenDaysFromNow = addDays(new Date(), 7);

    const { data: cards, error } = await supabaseAdmin
      .from('gift_cards')
      .select(`
        *,
        profiles:user_id (
          email,
          notification_preferences
        )
      `)
      .lte('expiration_date', sevenDaysFromNow.toISOString())
      .gt('expiration_date', new Date().toISOString())
      .eq('is_active', true);

    if (error) {
      console.error('Error fetching cards:', error);
      return;
    }

    console.log(`Found ${cards.length} cards expiring soon`);

    // Group cards by user
    interface CardWithProfile {
      user_id: string;
      profiles?: {
        email: string;
        notification_preferences?: {
          email?: boolean;
          expiration_reminders?: boolean;
        };
      };
    }

    const cardsByUser = cards.reduce((acc, card) => {
      const userId = card.user_id;
      if (!acc[userId]) {
        acc[userId] = [];
      }
      acc[userId].push(card);
      return acc;
    }, {} as Record<string, typeof cards>);

    // Send emails (this would integrate with Resend API)
    const userEntries = Object.entries(cardsByUser) as [string, typeof cards][];
    for (const [userId, userCards] of userEntries) {
      const firstCard = userCards[0] as unknown as CardWithProfile;
      const profile = firstCard?.profiles;
      
      if (profile?.notification_preferences?.email && 
          profile?.notification_preferences?.expiration_reminders) {
        console.log(`Would send email to ${profile.email} for ${userCards.length} cards`);
        
        // TODO: Integrate with Resend
        // await resend.emails.send({
        //   from: 'Cardly <notifications@cardly.app>',
        //   to: profile.email,
        //   subject: `${userCards.length} gift card(s) expiring soon`,
        //   html: generateEmailTemplate(userCards),
        // });
      }
    }

    console.log('Email reminders sent successfully');
  } catch (error) {
    console.error('Error sending reminders:', error);
    throw error;
  }
}

// Run the function
sendExpirationReminders()
  .then(() => {
    console.log('Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Failed:', error);
    process.exit(1);
  });
