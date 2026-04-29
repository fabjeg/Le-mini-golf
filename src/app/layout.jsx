import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-poppins',
});

export const metadata = {
    title: 'Le Mini Golf Du Golfe Du Morbihan | Saint Armel - Parcours 18 Trous',
    description:
        'Découvrez notre parcours de mini-golf unique à Saint Armel (56450) avec 18 trous créatifs et colorés. Parfait pour toute la famille ! Ouvert juillet-août, vacances scolaires et week-ends. Tarifs : 4€ à 7€.',
    keywords:
        'mini golf, Saint Armel, Golfe du Morbihan, mini-golf Morbihan, loisirs famille Bretagne, activité enfants 56, parcours 18 trous, mini golf Vannes, Sarzeau loisirs',
    authors: [{ name: 'Le Mini Golf Du Golfe Du Morbihan' }],
    robots: { index: true, follow: true },
    alternates: {
        canonical: 'https://leminigolfdugolfedumorbihan.fr',
    },
    openGraph: {
        type: 'website',
        url: 'https://leminigolfdugolfedumorbihan.fr',
        title: 'Le Mini Golf Du Golfe Du Morbihan | Parcours 18 Trous à Saint Armel',
        description:
            'Parcours de mini-golf unique avec 18 trous créatifs. Amusement garanti pour toute la famille ! 4€ à 7€ par personne.',
        images: [
            {
                url: 'https://leminigolfdugolfedumorbihan.fr/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Le Mini Golf Du Golfe Du Morbihan',
            },
        ],
        locale: 'fr_FR',
        siteName: 'Le Mini Golf Du Golfe Du Morbihan',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Le Mini Golf Du Golfe Du Morbihan | Parcours 18 Trous',
        description:
            'Parcours de mini-golf unique avec 18 trous créatifs à Saint Armel. Parfait pour toute la famille !',
        images: ['https://leminigolfdugolfedumorbihan.fr/og-image.jpg'],
    },
    other: {
        'geo.region': 'FR-56',
        'geo.placename': 'Saint Armel',
        'geo.position': '47.559186;-2.702891',
        ICBM: '47.559186, -2.702891',
    },
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Le Mini Golf Du Golfe Du Morbihan',
    description:
        'Parcours de mini-golf avec 18 trous créatifs et colorés, parfait pour passer un moment inoubliable en famille ou entre amis.',
    image: 'https://leminigolfdugolfedumorbihan.fr/og-image.jpg',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rond point de la Vache Enragée Route de Penvins',
        addressLocality: 'Saint Armel',
        postalCode: '56450',
        addressCountry: 'FR',
    },
    telephone: '+33647827449',
    email: 'minigolfdugolfe@gmail.com',
    url: 'https://leminigolfdugolfedumorbihan.fr',
    priceRange: '4€ - 7€',
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '10:00',
            closes: '20:00',
            validFrom: '2025-07-01',
            validThrough: '2025-08-31',
        },
    ],
    geo: {
        '@type': 'GeoCoordinates',
        latitude: '47.559186',
        longitude: '-2.702891',
    },
    sameAs: [
        'https://www.facebook.com/profile.php?id=61576806734332',
        'https://www.instagram.com/le_mini_golf_du_golfe_du_morbi/',
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={poppins.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
