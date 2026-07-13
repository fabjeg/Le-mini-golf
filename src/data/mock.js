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
            id: 1,
            category: "Tarif unique",
            price: "7€",
            description: "Par joueur",
            features: [],
        },
        {
            id: 2,
            category: "Accompagnateur",
            price: "3€",
            description: "Sans partie",
            features: [],
        },
    ],

    schedule: {
        announcement: "",
        periods: [
            {
                title: "Juillet - Août",
                hours: [
                    { day: "Du lundi au vendredi", hours: "10h à 20h" },
                    { day: "Samedi et dimanche", hours: "Fermé" },
                ],
                showWeatherNotice: false,
            },
        ],
    },

    notes: [
        "Dernière admission 1h avant la fermeture",
        "Fermé le week-end",
    ],
};
