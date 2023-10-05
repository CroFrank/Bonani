import NavBar from '@/components/screen/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Martian_Mono } from 'next/font/google'
import Footer from '@/components/screen/Footer'

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
      <body className={`bg-stone-50 ${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
