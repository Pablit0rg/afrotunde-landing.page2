import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Afrotunde | Afrotunde: Trancista e Loctician em Curitiba (Nagô, Locs)',
  description: 'Procurando trancista negra em Curitiba? A Afrotunde é especialista em tranças nagô e locs. A arte ancestral que cuida do seu Ori.',
  keywords: 'trancista curitiba, loctician curitiba, trancista negra curitiba, tranças nago curitiba, locs curitiba, salão afro curitiba, cic',
  openGraph: {
    title: 'Afrotunde | Trancista e Loctician em Curitiba',
    description: 'Procurando trancista negra em Curitiba? A Afrotunde é especialista em tranças nagô e locs.',
    url: 'https://afrotunde-landing-page.vercel.app/',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HairSalon',
              name: 'Afrotunde',
              description: 'Trancista e Loctician em Curitiba, especialista na arte ancestral que revela o seu Ori.',
              telephone: '+5541999999999',
              priceRange: 'R$$-$$$',
              url: 'https://afrotunde-landing-page.vercel.app/',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Curitiba',
                addressRegion: 'PR',
                addressCountry: 'BR',
              },
              openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-18:00',
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
