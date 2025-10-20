import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import { Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const lato = Lato({ subsets: ['latin'], weight: ['300', '400'], variable: '--font-lato'})
const noto = Noto_Sans_SC({ subsets: ['latin'], weight: ['400', '600'], variable: '--font-noto'})

export const metadata: Metadata = {
  title: 'Yuan Tian\'s Homepage',
  description: 'Yuan Tian\'s Homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        {children}
      </body>
    </html>
  )
}
