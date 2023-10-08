import NavBar from '@/app/_components/screen/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Martian_Mono } from 'next/font/google'
import Footer from '@/app/_components/screen/Footer'

const inter = Martian_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bonani',
  description: 'Amazing Cake Toppers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
