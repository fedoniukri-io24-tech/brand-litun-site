import type { Metadata, Viewport } from 'next'
import { SITE, absoluteUrl, rootMetadata } from './seo'
import Providers from './components/Providers'
import './globals.css'
import './litun.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...rootMetadata(),
  applicationName: SITE.shortTitle,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/site.webmanifest',
  other: {
    'geo.region': 'UA',
    'geo.placename': 'Kyiv',
    'content-language': 'uk',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#e8efff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a3169' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="canonical" href={absoluteUrl('/')} />
      </head>
      <body>
        <Providers>
          <div className="litun">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
