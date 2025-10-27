import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calcoz - Premium Clothing Costing Calculator',
  description: 'Smart, Apple-grade costing calculator for clothing manufacturers. Calculate accurate per-piece and batch costs for apparel products.',
  keywords: 'clothing calculator, costing calculator, apparel manufacturing, garment costing, clothing manufacturer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
