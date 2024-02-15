import type { Metadata } from 'next';
import "../styles/index.scss";


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

        {children}
      </body>
    </html>
  )
}
