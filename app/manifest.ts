import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'すれちがい寮ログ',
    short_name: '寮ログ',
    start_url: '/home',
    display: 'standalone',
    background_color: '#f4f8ff',
    theme_color: '#4f8dff',
    icons: [
      { src: '/icon-192.svg', sizes: '192x192', type: 'image/svg+xml' },
      { src: '/icon-512.svg', sizes: '512x512', type: 'image/svg+xml' }
    ]
  };
}
