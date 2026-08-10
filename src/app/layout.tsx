import './globals.css'
import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Insaf Muktar Plaza | Premium Residential & Commercial Spaces in Jatrabari',
  description: 'Discover Insaf Muktar Plaza, a RAJUK-approved mixed-use development adjacent to Rayarbag Bus Stand in Jatrabari, Dhaka, offering residential apartments and commercial spaces.',
  openGraph: {
    title: 'Insaf Muktar Plaza | Modern Living & Business Opportunities',
    description: 'A RAJUK-approved 14-storey landmark (B + G + 12) developed by Insaf Real Estate Ltd. offering 168 commercial shops and 30 residential apartments.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insaf Muktar Plaza | Jatrabari, Dhaka',
    description: 'Your address for modern living and new business possibilities.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} scroll-smooth`}>
      <body className="bg-obsidian text-white selection:bg-gold-500 selection:text-black antialiased">
        {children}
      </body>
    </html>
  )
}
