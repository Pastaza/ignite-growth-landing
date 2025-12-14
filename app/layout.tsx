import '../src/index.css';
import { Providers } from "./providers";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://cardly.app'),
  title: {
    default: 'Cardly | Never Forget a Gift Card Again',
    template: '%s | Cardly',
  },
  description: 'Cardly tracks all your gift cards in one place, reminds you before they expire, and helps you spend every dollar. Stop losing money to forgotten cards.',
  authors: [{ name: 'Cardly' }],
  keywords: ['gift card manager', 'gift card tracker', 'gift card app', 'save money', 'gift card wallet', 'gift card organizer', 'gift card balance', 'gift card reminder', 'expired gift cards'],
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
  alternates: {
    canonical: 'https://cardly.app',
  },
  verification: {
    // Add Google Search Console and Bing verification codes when available
    // google: 'your-google-verification-code',
    // other: { 'msvalidate.01': 'your-bing-verification-code' },
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
