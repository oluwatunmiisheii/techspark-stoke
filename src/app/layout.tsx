import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Spark Stoke, UK',
  description:
    'Tech Spark Stoke, UK is a community of tech enthusiasts in Stoke-on-Trent. We host events, workshops, and meetups to help you learn and grow in tech.',
  keywords: [
    'Tech',
    'Spark',
    'Stoke',
    'UK',
    'Community',
    'Events',
    'Workshops',
    'Meetups',
    'Learn',
    'Grow',
    'Tech Enthusiasts',
    'Stoke-on-Trent',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="bg-white antialiased js-focus-visible tss-stoke" lang="en" data-js-focus-visible="">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
