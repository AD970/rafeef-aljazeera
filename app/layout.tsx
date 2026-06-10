import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'رفيف الجزيرة - Rafeef Al-Jazeera',
  description: 'شركة متخصصة في المقاولات والإنشاءات بأعلى معايير الجودة - Leading Saudi construction and contracting company',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
      <body className="font-sans antialiased text-slate-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
