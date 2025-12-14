import type { Metadata } from 'next';
import WaitlistForm from './WaitlistForm';

export const metadata: Metadata = {
  title: 'Join Waitlist',
  description: 'Join the Cardly waitlist and be the first to know when we launch. Get exclusive early access to the smart gift card manager app.',
  openGraph: {
    title: 'Join the Cardly Waitlist',
    description: 'Be the first to know when Cardly launches. Join our waitlist for exclusive early access to the smart gift card manager.',
    url: 'https://cardly.app/join-waitlist',
  },
  twitter: {
    title: 'Join the Cardly Waitlist',
    description: 'Be the first to know when Cardly launches. Join our waitlist for exclusive early access.',
  },
  alternates: {
    canonical: 'https://cardly.app/join-waitlist',
  },
};

export default function JoinWaitlistPage() {
  return <WaitlistForm />;
}
