import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
  display: 'swap',
})
const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

const siteUrl = 'https://aryendra-pratap-singh.vercel.app'
const description =
  'Computer Science undergrad building AI-powered and full-stack systems — backend, databases, applied ML, and intelligent document processing. Open to 2027 internships and co-ops.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aryendra Pratap Singh — Software / AI / Data',
  description,
  generator: 'v0.app',
  keywords: [
    'Aryendra Pratap Singh',
    'Software Engineer Intern',
    'AI/ML',
    'Data',
    'Computer Science',
    'Lakehead University',
    'RAG',
    'FastAPI',
    'Gemini API',
    'Intelligent Document Processing',
    'OCR',
    'Next.js',
  ],
  authors: [{ name: 'Aryendra Pratap Singh' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Aryendra Pratap Singh — Software / AI / Data',
    description,
    siteName: 'Aryendra Pratap Singh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aryendra Pratap Singh — Software / AI / Data',
    description,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F8E8D0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexMono.variable} ${dmSans.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
