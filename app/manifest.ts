import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cardly - Gift Card Manager',
    short_name: 'Cardly',
    description: 'Track all your gift cards in one place. Get reminders before they expire. Stop losing money to forgotten cards.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/CardlyGooglePlayIcon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/CardlyGooglePlayIcon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
