import './globals.css'
import { Inter } from 'next/font/google'
import { NavBar } from '@/components/layout/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MBA 204 Operations Study Guide',
  description: 'Interactive study guide for MBA 204 Operations Management at UC Berkeley Haas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}