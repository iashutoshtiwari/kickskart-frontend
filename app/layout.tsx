import type React from 'react';
import type { Metadata } from 'next';
import { Anton, Bebas_Neue, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Header from './components/Header';
import Footer from './components/Footer';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
});

export const metadata: Metadata = {
  title: 'KicksKart - Premium Sneakers',
  description: 'Discover the latest sneakers and athletic footwear',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bebas.variable} ${inter.variable} ${grotesk.variable}`}
    >
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
