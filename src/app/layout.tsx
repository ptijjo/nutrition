import type { Metadata } from 'next';
import "../styles/index.scss";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Nutrition saine',
  description: 'Nutrition , Remise en forme, Perte de poids, détox, Prise de masse, Rééquilibrage alimentaire, sport, renforcement musculaire, complément alimentaire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="fr">
      <body >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
