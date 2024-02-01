import type { Metadata } from 'next';


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
