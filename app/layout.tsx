 // Note: If layout doesn't use hooks, you can keep it server-side. Since you have process.env checks, server-side is best. Remove 'use client' if it was added automatically by mistake.

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Tajawal, Amiri } from 'next/font/google'
import './globals.css'

const tajawal = Tajawal({
  variable: '--font-tajawal',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800', '900'],
})

const amiri = Amiri({
  variable: '--font-amiri',
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
})

// Cleanly isolate viewport configuration as recommended in modern Next.js versions
export const viewport: Viewport = {
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'شركة رفيف الجزيرة للمقاولات العامة | الرياض',
    template: '%s | رفيف الجزيرة'
  },
  description: 'شركة رفيف الجزيرة للمقاولات العامة بالرياض. متخصصون في إنشاء القصور، الفلل، العمائر، أعمال الترميم والتشطيبات الفاخرة وبناء الملاحق وفق أعلى معايير الكود السعودي للبناء.',
  keywords: [
    'مقاولات عامة الرياض',
    'بناء قصور وفلل الرياض',
    'شركة تشطيبات الرياض',
    'ترميم مباني',
    'بناء ملاحق ومجالس',
    'مقاول بناء معتمد',
    'رفيف الجزيرة للمقاولات',
    'الكود السعودي للبناء'
  ],
  authors: [{ name: 'رفيف الجزيرة', url: 'https://rafeef-aljazeera.com' }],
  creator: 'شركة رفيف الجزيرة للمقاولات',
  metadataBase: new URL('https://rafeef-aljazeera.com'), // Replace with your actual live production domain URL
  
  // Open Graph metadata for rich link previews on WhatsApp, LinkedIn, Facebook
  openGraph: {
    title: 'شركة رفيف الجزيرة للمقاولات العامة والإنشاءات',
    description: 'إنشاء القصور، الفلل، أعمال التشطيبات والترميم في الرياض بأعلى جودة ودقة وكفاءة معمارية هندسية ملتزمة بالكود السعودي.',
    url: 'https://rafeef-aljazeera.com',
    siteName: 'رفيف الجزيرة',
    locale: 'ar_SA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Place a 1200x630px dynamic preview card banner image inside your public folder
        width: 1200,
        height: 630,
        alt: 'شركة رفيف الجزيرة للمقاولات العامة',
      },
    ],
  },

  // Twitter visual preview cards layout mapping
  twitter: {
    card: 'summary_large_image',
    title: 'شركة رفيف الجزيرة للمقاولات العامة والإنشاءات',
    description: 'متخصصون في بناء الفلل، القصور، التشطيب والترميم بالرياض وفق أعلى معايير الجودة والسلامة المعمارية.',
    images: ['/og-image.jpg'],
  },

  // Localized verification configurations (Optional but great for crawl prioritization)
  alternates: {
    canonical: 'https://rafeef-aljazeera.com',
  },

  // Robots indexing instructions configuration
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
    icon: [
      { url: '/logo.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${amiri.variable} scroll-smooth bg-neutral-50`}
      suppressHydrationWarning
    >
      <head>
<link rel="icon" href="/logo.png" />
<link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      {/* Head tag is automatically populated by metadata engine */}
      <body className="font-sans antialiased text-slate-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}