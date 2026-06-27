import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://aryendra-pratap-singh.vercel.app'
const description =
  'Computer Science undergrad building AI-powered and full-stack systems — backend, databases, and applied ML. Open to Summer 2026 / 2027 internships and co-ops.'

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
  colorScheme: 'dark',
  themeColor: '#0A0A0B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
