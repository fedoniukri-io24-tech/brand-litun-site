import type { Metadata } from 'next'
import { BRAND_COURSE } from './data/course'

export const SITE = {
  name: 'Ілля Літун',
  brand: 'TURBO EDUCATION',
  title: 'Особистий бренд для викладача — курс Іллі Літуна',
  shortTitle: 'Особистий бренд',
  description: BRAND_COURSE.hero.lead,
  locale: 'uk_UA',
  language: 'uk',
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://brand.illyalitun.com',
  email: 'hello@turbo.education',
  phone: '+380670000000',
  image: '/images/brand-hero.png',
  twitter: '@illya_litun',
  keywords: [
    'особистий бренд викладача',
    'освітній бренд викладача',
    'курс Ілля Літун',
    'як знайти учнів викладачу',
    'блог викладача',
    'продажі послуг викладача',
    'особистий бренд освіта',
    'TURBO EDUCATION',
  ],
} as const

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function rootMetadata(): Metadata {
  const url = absoluteUrl('/')
  const ogImage = absoluteUrl(SITE.image)

  return {
    title: { absolute: SITE.title },
    description: SITE.description,
    keywords: [...SITE.keywords],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.brand,
    category: 'education',
    alternates: {
      canonical: url,
      languages: {
        'uk-UA': url,
        uk: url,
      },
    },
    openGraph: {
      title: SITE.title,
      description: SITE.description,
      url,
      siteName: SITE.title,
      locale: SITE.locale,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: SITE.title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE.title,
      description: SITE.description,
      images: [ogImage],
      creator: SITE.twitter,
      site: SITE.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}
