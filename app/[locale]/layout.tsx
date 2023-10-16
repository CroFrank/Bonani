import Footer from '@/app/[locale]/_components/screen/Footer'
import NavBar from '@/app/[locale]/_components/screen/NavBar'
import type { Metadata } from 'next'
import { useLocale } from 'next-intl'
import { Martian_Mono } from 'next/font/google'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import './globals.css'

const inter = Martian_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bonani',
  description: 'Amazing Cake Toppers',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = useLocale()
  if (params.locale !== locale) {
    notFound()
  }
  return (
    <html lang={locale}>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <NavBar lang={params.locale} />
        {children}
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/+385976785381?text=Hello,%20how%20can%20I%20help%20you"
          className="fixed bottom-20 right-10 z-40"
          target="blank"
        >
          <Image
            alt="Chat on WhatsApp"
            src="/whatsapp-logo.png"
            width={50}
            height={50}
            className="hover:w-10"
          />
        </a>
        <Footer />
      </body>
    </html>
  )
}
