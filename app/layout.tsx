import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/Nav/NavBar'
import { AuthProvider } from './Provider'
import QueryProvider from './QueryProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog App',
  description: 'Next Blog App by RSJ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <>
            <NavBar />
            <QueryProvider>
            {children}
            </QueryProvider>
          </>
        </AuthProvider>
      </body>
    </html>
  
  )
}
