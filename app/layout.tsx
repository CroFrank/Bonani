import Footer from '@/app/_components/screen/Footer';
import NavBar from '@/app/_components/screen/NavBar';
import type { Metadata } from 'next';
import { Martian_Mono } from 'next/font/google';

import './globals.css';

const inter = Martian_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bonani',
  description: 'Amazing Cake Toppers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen flex-col`}>
        <NavBar />
        {children}
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/+385976785381?text=Hello,%20how%20can%20I%20help%20you"
          className="fixed bottom-20 right-10"
        >
          <img alt="Chat on WhatsApp" src="WhatsAppButtonGreenSmall.svg" />
        </a>
        <Footer />
      </body>
    </html>
  );
}
