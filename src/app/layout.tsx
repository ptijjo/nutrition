
import initScrollReveal from '@/components/ScrollRevealConfig';
import type { Metadata } from 'next';
import { useEffect } from 'react';


export const metadata: Metadata = {
  title: 'Site Choupette',
  description: 'Nutrition',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fr">
      <body >

        {children}
      </body>
    </html>
  )
}
