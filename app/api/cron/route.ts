import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { addDays } from 'date-fns';

export async function GET(request: Request) {
  try {
    // Check if supabase admin is configured
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Supabase admin not configured' },
        { status: 500 }
      );
    }

    // Verify cron secret
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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

    if (error) throw error;

    // TODO: Send email notifications using Resend
    // This would be implemented based on the Resend API
    
    return NextResponse.json({
      success: true,
      cardsProcessed: cards?.length || 0,
    });
  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
