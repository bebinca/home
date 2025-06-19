import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const noto = Noto_Sans_SC({ subsets: ['latin'], weight: ['400', '600'],})

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
      <body className={`${inter.className} ${noto.className}`}>
        {children}
      </body>
    </html>
  )
}
