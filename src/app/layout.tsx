import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header/Header'
import styles from './page.module.css'


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'My Phone',
  description: "It's my phone but not",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable}`}>
        <div className={styles.screen}>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
