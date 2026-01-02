import './globals.css';
import type { Metadata } from 'next';
import ClientLayout from '@/components/ClientLayout';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  metadataBase: new URL('https://cardly.app'),
  title: {
    default: 'Cardly | Never Forget a Gift Card Again',
    template: '%s | Cardly',
  },
  description: 'Track all your gift cards in one place. Get reminders before they expire. Stop losing money to forgotten cards.',
  keywords: ['gift card manager', 'gift card tracker', 'gift card app', 'save money', 'gift card wallet', 'gift card organizer', 'gift card balance', 'gift card reminder', 'expired gift cards'],
  authors: [{ name: 'Cardly' }],
  creator: 'Cardly',
  publisher: 'Cardly',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/CardlyGooglePlayIcon.png',
    shortcut: '/CardlyGooglePlayIcon.png',
    apple: '/CardlyGooglePlayIcon.png',
  },
  openGraph: {
    title: 'Cardly | Never Forget a Gift Card Again',
    description: 'Track all your gift cards in one place. Get reminders before they expire. Stop losing money to forgotten cards.',
    url: 'https://cardly.app',
    siteName: 'Cardly',
    images: [
      {
        url: '/CardlyGooglePlayIcon.png',
        width: 512,
        height: 512,
        alt: 'Cardly - Gift Card Manager App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cardlyapp',
    creator: '@cardlyapp',
    title: 'Cardly | Never Forget a Gift Card Again',
    description: 'Track all your gift cards in one place. Get reminders before they expire.',
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
        <ClientLayout>
          <Navbar />
          <main>{children}</main>
        </ClientLayout>
      </body>
    </html>
  );
}
