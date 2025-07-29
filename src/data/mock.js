// Mock data for mini-golf website
export const mockData = {
    siteInfo: {
        name: "Mini-Golf Paradise",
        slogan: "Amusement pour toute la famille !",
        description: "Découvrez notre parcours de mini-golf unique avec 18 trous créatifs et colorés, parfait pour passer un moment inoubliable en famille ou entre amis.",
        phone: "+33 1 23 45 67 89",
        email: "contact@minigolf-paradise.fr",
        address: {
            street: "123 Avenue des Loisirs",
            city: "75001 Paris",
            country: "France"
        }
    },

    pricing: [
        {
            id: 1,
            category: "Adulte",
            price: "12€",
            description: "18 ans et plus",
            features: ["Accès au parcours 18 trous", "Location du matériel incluse", "Durée illimitée"]
        },
        {
            id: 2,
            category: "Enfant",
            price: "8€",
            description: "3 à 17 ans",
            features: ["Accès au parcours adapté", "Matériel enfant inclus", "Durée illimitée"]
        },
        {
            id: 3,
            category: "Famille",
            price: "35€",
            description: "2 adultes + 2 enfants",
            features: ["Accès parcours complet", "Matériel pour tous", "Boisson offerte"],
            popular: true
        },
        {
            id: 4,
            category: "Groupe",
            price: "9€",
            description: "À partir de 10 personnes",
            features: ["Tarif réduit par personne", "Réservation obligatoire", "Animation possible"]
        }
    ],

    schedule: {
        periods: [
            {
                title: "Période Estivale (Avril - Septembre)",
                hours: [
                    { day: "Lundi - Vendredi", hours: "14h00 - 19h00" },
                    { day: "Samedi - Dimanche", hours: "10h00 - 20h00" }
                ]
            },
            {
                title: "Période Hivernale (Octobre - Mars)",
                hours: [
                    { day: "Lundi - Vendredi", hours: "14h00 - 18h00" },
                    { day: "Samedi - Dimanche", hours: "10h00 - 19h00" }
                ]
            }
        ],
        notes: [
            "Fermeture le 25 décembre et 1er janvier",
            "Dernière admission 1h avant la fermeture",
            "Réservation recommandée le week-end"
        ]
    },

    gallery: [
        {
            id: 1,
            url: "https://images.pexels.com/photos/2048892/pexels-photo-2048892.jpeg",
            alt: "Vue aérienne du parcours de mini-golf coloré",
            title: "Parcours principal"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1661768227053-504d6857f5c9",
            alt: "Joueur sur le parcours de mini-golf",
            title: "En action"
        },
        {
            id: 3,
            url: "https://images.pexels.com/photos/6370050/pexels-photo-6370050.jpeg",
            alt: "Femme jouant au mini-golf en famille",
            title: "Ambiance familiale"
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1561840883-dbdb5300f464",
            alt: "Balle de golf près du trou",
            title: "Détail du parcours"
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1662197166285-fabcbe509d6f",
            alt: "Obstacles colorés du parcours",
            title: "Obstacles créatifs"
        }
    ],

    socialLinks: [
        { name: "Facebook", url: "https://facebook.com/minigolf-paradise", icon: "facebook" },
        { name: "Instagram", url: "https://instagram.com/minigolf_paradise", icon: "instagram" },
        { name: "Twitter", url: "https://twitter.com/minigolf_paradise", icon: "twitter" }
    ]
};