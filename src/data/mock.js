export const mockData = {
    siteInfo: {
        name: "Le Mini Golf Du Golfe Du Morbihan",
        slogan: "Amusement pour toute la famille et les amis !",
        description:
            "Découvrez notre parcours de mini-golf unique avec 18 trous créatifs et colorés, parfait pour passer un moment inoubliable en famille ou entre amis.",
        phone: "+33 6 47 82 74 49",
        email: "minigolfdugolfe@gmail.com",
        address: {
            street: "Rond point de la Vache Enragée Route de Penvins",
            city: "56450 Saint Armel",
            country: "France",
        },
    },

    socialLinks: [
        {
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=61576806734332",
            icon: "facebook",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/le_mini_golf_du_golfe_du_morbi/",
            icon: "instagram",
        },
    ],

    pricing: [
        {
            id: 4,
            category: "Pour les petits",
            price: "4€",
            description: "moins de 7 ans",
            features: [],
        },
        {
            id: 2,
            category: "Pour les moyens",
            price: "5.50€",
            description: "7 à 15 ans",
            features: [],
        },
        {
            id: 1,
            category: "Pour les grands",
            price: "7€",
            description: "16 ans et plus",
            features: [],
        },
    ],

    schedule: {
        periods: [
            {
                title: "Juillet - Août",
                hours: [{ day: "Tous les jours", hours: "10h à 20h" }],
                showWeatherNotice: false,
            },
            {
                title: "Du 1er septembre au 15 octobre",
                hours: [{ day: "Week-ends & Mercredis", hours: "10h à 18h" }],
                showWeatherNotice: true,
            },
            {
                title: "Vacances de la Toussaint",
                hours: [{ day: "Du 23 octobre au 2 novembre", hours: "10h à 18h" }],
                showWeatherNotice: true,
            },
            {
                title: "Vacances d'hiver",
                hours: [{ day: "Du 7 février au 8 mars", hours: "10h à 18h" }],
                showWeatherNotice: true,
            },
            {
                title: "Du 4 mars au 1er avril",
                hours: [{ day: "Mercredis & week-ends", hours: "14h à 18h" }],
                showWeatherNotice: true,
            },
            {
                title: "Vacances de Pâques",
                hours: [{ day: "Du 4 avril au 4 mai", hours: "10h à 18h" }],
                showWeatherNotice: true,
            },
        ],
    },

    notes: [
        "Fermeture le 25 décembre et 1er janvier",
        "Dernière admission 1h avant la fermeture",
        "Réservation recommandée le week-end",
    ],
};
