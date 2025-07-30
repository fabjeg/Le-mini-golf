export const mockData = {
    siteInfo: {
        name: "Le Mini Golf Du Golfe Du Morbihan",
        slogan: "Amusement pour toute la famille !",
        description: "Découvrez notre parcours de mini-golf unique avec 18 trous créatifs et colorés, parfait pour passer un moment inoubliable en famille ou entre amis.",
        phone: "+33 6 47 82 74 49",
        email: "minigolfdugolfe@gmail.com",
        address: {
            street: "Rond point de la Vache Enragée Route de Penvins",
            city: "56450 Saint Armel",
            country: "France"
        }
    },

    pricing: [
        {
            id: 4,
            category: "Pour les petits",
            price: "4€",
            description: "moins de 7 ans",
            features: []
        },
        {
            id: 2,
            category: "Pour les moyens",
            price: "5.50€",
            description: "7 à 15 ans",
            features: []
        },
        {
            id: 1,
            category: "Pour les grands",
            price: "7€",
            description: "16 ans et plus",
            features: []
        },
    ],

    schedule: {
        periods: [
            {
                title: "Période Estivale (Avril - juin)",
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


    socialLinks: [
        { name: "Facebook", url: "https://facebook.com/minigolf-paradise", icon: "facebook" },
        { name: "Instagram", url: "https://instagram.com/minigolf_paradise", icon: "instagram" },
        { name: "Twitter", url: "https://twitter.com/minigolf_paradise", icon: "twitter" }
    ]
};