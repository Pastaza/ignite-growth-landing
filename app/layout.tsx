import '../src/index.css';
import { Providers } from "./providers";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cardly | Never Forget a Gift Card Again',
  description: 'Cardly tracks all your gift cards in one place, reminds you before they expire, and helps you spend every dollar.  Stop losing money to forgotten cards.',
  authors: [{ name: 'Cardly' }],
  keywords: ['gift card manager', 'gift card tracker', 'gift card app', 'save money', 'gift card wallet', 'gift card organizer'],
  icons: {
    icon: '/CardlyGooglePlayIcon.png',
    shortcut: '/CardlyGooglePlayIcon.png',
    apple: '/CardlyGooglePlayIcon. png',
  },
  openGraph: {
    title: 'Cardly | Never Forget a Gift Card Again',
    description: 'Track all your gift cards in one place.  Get reminders before they expire. Stop losing money to forgotten cards.',
    url: 'https://cardly.app',
    siteName: 'Cardly',
    images: ['/CardlyGooglePlayIcon.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cardlyapp',
    title: 'Cardly | Never Forget a Gift Card Again',
    description:  'Track all your gift cards in one place. Get reminders before they expire.',
    images: ['/CardlyGooglePlayIcon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
