import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: 'KicksKart - Premium Sneakers',
  description: 'Discover the latest sneakers and athletic footwear',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} ${bebasNeue.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
