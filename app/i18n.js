export const DICTIONARY = {
    en: {
        nav: {
            products: "Products",
            diagnostic: "Diagnostic",
            about: "Why Us",
            contact: "Contact",
            repair: "Repair Now"
        },
        hero: {
            title: "Next Level",
            subtitle: "Gaming & Repairs",
            desc: "Your destination for the latest consoles and expert diagnostics. We bring your gear back to life.",
            viewProducts: "View Products",
            diagnose: "Diagnose Console"
        },
        products: {
            title: "Featured",
            subtitle: "Gear",
            desc: "Top tier equipment for the ultimate gaming experience.",
            viewDetails: "View Details"
        },
        features: {
            title: "Why Choose",
            subtitle: "NeonCore"
        },
        contact: {
            title: "Get in",
            subtitle: "Touch",
            desc: "Have questions? We're here to help you get back in the game.",
            location: "Location",
            phone: "Phone",
            email: "Email",
            form: {
                name: "Your Name",
                email: "Your Email",
                message: "How can we help?",
                send: "Send Message"
            }
        },
        diagnostic: {
            title: "Console",
            subtitle: "Diagnostic",
            center: "Center",
            desc: "Identify the problem and get an instant repair estimate.",
            steps: {
                console: "Console",
                issue: "Issue",
                estimate: "Estimate"
            },
            issuePrompt: "What seems to be the problem?",
            smallNote: "(Select all that apply)",
            noIssues: "No specific issues listed. Please contact us.",
            back: "← Back",
            calculate: "Calculate Estimate",
            analysis: "Diagnostic Analysis",
            total: "Total Estimated Cost",
            disclaimer: "*Estimates are preliminary. Valid after inspection.",
            book: "Book Repair Now",
            startOver: "Start Over"
        },
        branding: {
            builtBy: "Built by Xrion Agency"
        },
        copyright: "All rights reserved."
    },
    fr: {
        nav: {
            products: "Produits",
            diagnostic: "Diagnostic",
            about: "Pourquoi Nous",
            contact: "Contact",
            repair: "Réparer Maintenant"
        },
        hero: {
            title: "Niveau",
            subtitle: "Supérieur",
            desc: "Votre destination pour les dernières consoles et diagnostics experts. Nous redonnons vie à votre équipement.",
            viewProducts: "Voir les Produits",
            diagnose: "Diagnostiquer la Console"
        },
        products: {
            title: "Équipement",
            subtitle: "Vedette",
            desc: "Équipement haut de gamme pour une expérience de jeu ultime.",
            viewDetails: "Voir les Détails"
        },
        features: {
            title: "Pourquoi Choisir",
            subtitle: "NeonCore"
        },
        contact: {
            title: "Contactez",
            subtitle: "Nous",
            desc: "Des questions ? Nous sommes là pour vous aider à revenir dans le jeu.",
            location: "Localisation",
            phone: "Téléphone",
            email: "Email",
            form: {
                name: "Votre Nom",
                email: "Votre Email",
                message: "Comment pouvons-nous vous aider ?",
                send: "Envoyer le Message"
            }
        },
        diagnostic: {
            title: "Centre de",
            subtitle: "Diagnostic",
            center: "Console",
            desc: "Identifiez le problème et obtenez un devis de réparation instantané.",
            steps: {
                console: "Console",
                issue: "Problème",
                estimate: "Devis"
            },
            issuePrompt: "Quel semble être le problème ?",
            smallNote: "(Sélectionnez tout ce qui s'applique)",
            noIssues: "Aucun problème spécifique répertorié. Veuillez nous contacter.",
            back: "← Retour",
            calculate: "Calculer le Devis",
            analysis: "Analyse du Diagnostic",
            total: "Coût Total Estimé",
            disclaimer: "*Les estimations sont préliminaires. Valables après inspection.",
            book: "Réserver la Réparation",
            startOver: "Recommencer"
        },
        branding: {
            builtBy: "Développé par Xrion Agency"
        },
        copyright: "Tous droits réservés."
    }
};

export const PRODUCTS_LOCALIZED = {
    en: [
        {
            id: 'ps5',
            name: 'PlayStation 5',
            price: 130000,
            tag: 'Best Seller',
            description: 'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
            features: ['4K Gaming', 'up to 120fps', 'HDR Technology', '825GB SSD'],
            images: ['/images/ps5-1.jpg', '/images/ps5-2.jpg', '/images/ps5-3.jpg']
        },
        {
            id: 'xbox-series-x',
            name: 'Xbox Series X',
            price: 110000,
            tag: null,
            description: 'The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming.',
            features: ['12 Teraflops', 'True 4K Gaming', '1TB SSD', '8K HDR'],
            images: ['/images/seriesx-1.jpg', '/images/seriesx-2.jpg', '/images/seriesx-3.jpg']
        },
        {
            id: 'ps4-slim',
            name: 'PS4 Slim',
            price: 30000,
            tag: 'Refurbished',
            description: 'The incredible games, entertainment and vibrant community of the PlayStation 4 system, packed into a slimmer, lighter console.',
            features: ['1TB Storage', 'HDR Support', 'DualShock 4', 'Refurbished Grade A'],
            images: ['/images/ps4-1.jpg', '/images/ps4-2.jpg']
        },
        {
            id: 'dualsense',
            name: 'DualSense Controller',
            price: 7000,
            tag: null,
            description: 'Discover a deeper, highly immersive gaming experience that brings the action to life in the palms of your hands.',
            features: ['Haptic Feedback', 'Adaptive Triggers', 'Built-in Microphone'],
            images: ['/images/controller-1.jpg', '/images/controller-2.jpg']
        },
        {
            id: 'headset',
            name: 'Pro Gaming Headset',
            price: 9000,
            tag: 'Popular',
            description: 'Hear every enemy footstep with 7.1 surround sound. Designed for comfort during marathon gaming sessions.',
            features: ['7.1 Surround', 'Noise Cancelling Mic', 'Memory Foam Earcups'],
            images: ['/images/headphone-1.jpg', '/images/headphone-2.jpg']
        }
    ],
    fr: [
        {
            id: 'ps5',
            name: 'PlayStation 5',
            price: 130000,
            tag: 'Meilleure Vente',
            description: 'Découvrez des chargements ultra-rapides grâce à un disque SSD ultra-haute vitesse, une immersion plus profonde grâce au retour haptique, aux gâchettes adaptatives et à l\'audio 3D, et une toute nouvelle génération de jeux PlayStation incroyables.',
            features: ['Jeux 4K', 'jusqu\'à 120 fps', 'Technologie HDR', 'SSD 825 Go'],
            images: ['/images/ps5-1.jpg', '/images/ps5-2.jpg', '/images/ps5-3.jpg']
        },
        {
            id: 'xbox-series-x',
            name: 'Xbox Series X',
            price: 110000,
            tag: null,
            description: 'La Xbox la plus rapide et la plus puissante jamais conçue. Explorez de nouveaux mondes riches avec 12 téraflops de puissance de traitement graphique brute, le lancer de rayons DirectX, un SSD personnalisé et des jeux 4K.',
            features: ['12 Téraflops', 'Vrai Jeu 4K', 'SSD 1 To', '8K HDR'],
            images: ['/images/seriesx-1.jpg', '/images/seriesx-2.jpg', '/images/seriesx-3.jpg']
        },
        {
            id: 'ps4-slim',
            name: 'PS4 Slim',
            price: 30000,
            tag: 'Remis à neuf',
            description: 'Les jeux incroyables, le divertissement et la communauté vibrante du système PlayStation 4, regroupés dans une console plus fine et plus légère.',
            features: ['Stockage 1 To', 'Support HDR', 'DualShock 4', 'Grade A Remis à neuf'],
            images: ['/images/ps4-1.jpg', '/images/ps4-2.jpg']
        },
        {
            id: 'dualsense',
            name: 'Manette DualSense',
            price: 7000,
            tag: null,
            description: 'Découvrez une expérience de jeu plus profonde et hautement immersive qui donne vie à l\'action au creux de vos mains.',
            features: ['Retour Haptique', 'Gâchettes Adaptatives', 'Microphone Intégré'],
            images: ['/images/controller-1.jpg', '/images/controller-2.jpg']
        },
        {
            id: 'headset',
            name: 'Casque Gaming Pro',
            price: 9000,
            tag: 'Populaire',
            description: 'Entendez chaque pas de l\'ennemi avec un son surround 7.1. Conçu pour le confort lors des sessions de jeu marathon.',
            features: ['Surround 7.1', 'Micro Anti-Bruit', 'Écouteurs à Mémoire de Forme'],
            images: ['/images/headphone-1.jpg', '/images/headphone-2.jpg']
        }
    ]
};

export const ISSUES_LOCALIZED = {
    en: {
        ps4: [
            { id: 'power', name: 'Does not turn on', causes: [{ cause: 'Power Supply', prob: 70, cost: 5000 }, { cause: 'Motherboard', prob: 30, cost: 8000 }] },
            { id: 'fan', name: 'Loud fan / Noise', causes: [{ cause: 'Fan Replacement', prob: 80, cost: 3000 }, { cause: 'Deep Cleaning', prob: 20, cost: 2000 }] },
            { id: 'hdmi', name: 'HDMI / No Signal', causes: [{ cause: 'HDMI Port', prob: 90, cost: 4000 }, { cause: 'IC Chip', prob: 10, cost: 6000 }] },
            { id: 'disc', name: 'Disc not reading', causes: [{ cause: 'Laser Lens', prob: 60, cost: 3500 }, { cause: 'Drive Mechanism', prob: 40, cost: 4500 }] },
        ],
        ps5: [
            { id: 'power', name: 'Does not turn on', causes: [{ cause: 'Power Supply', prob: 60, cost: 8000 }, { cause: 'Main Board', prob: 40, cost: 12000 }] },
            { id: 'hdmi', name: 'HDMI Port Broken', causes: [{ cause: 'HDMI Port Replacement', prob: 100, cost: 7000 }] },
            { id: 'drift', name: 'Stick Drift (Controller)', causes: [{ cause: 'Stick Replacement', prob: 100, cost: 2500 }] },
        ],
        xbox_one: [
            { id: 'power', name: 'Does not turn on', causes: [{ cause: 'Power Brick', prob: 80, cost: 3000 }] },
            { id: 'drive', name: 'Disc Drive Issue', causes: [{ cause: 'Drive Replacement', prob: 100, cost: 5000 }] },
        ],
        xbox_sx: [
            { id: 'power', name: 'No Power', causes: [{ cause: 'Internal PSU', prob: 90, cost: 9000 }] },
            { id: 'hdmi', name: 'Display Issue', causes: [{ cause: 'HDMI Port', prob: 100, cost: 8000 }] },
        ],
    },
    fr: {
        ps4: [
            { id: 'power', name: 'Ne s\'allume pas', causes: [{ cause: 'Alimentation', prob: 70, cost: 5000 }, { cause: 'Carte Mère', prob: 30, cost: 8000 }] },
            { id: 'fan', name: 'Ventilateur bruyant', causes: [{ cause: 'Remplacement Ventilateur', prob: 80, cost: 3000 }, { cause: 'Nettoyage Profond', prob: 20, cost: 2000 }] },
            { id: 'hdmi', name: 'HDMI / Aucun Signal', causes: [{ cause: 'Port HDMI', prob: 90, cost: 4000 }, { cause: 'Puce IC', prob: 10, cost: 6000 }] },
            { id: 'disc', name: 'Le disque ne s\'affiche pas', causes: [{ cause: 'Lentille Laser', prob: 60, cost: 3500 }, { cause: 'Mécanisme du Lecteur', prob: 40, cost: 4500 }] },
        ],
        ps5: [
            { id: 'power', name: 'Ne s\'allume pas', causes: [{ cause: 'Alimentation', prob: 60, cost: 8000 }, { cause: 'Carte Principale', prob: 40, cost: 12000 }] },
            { id: 'hdmi', name: 'Port HDMI Cassé', causes: [{ cause: 'Remplacement Port HDMI', prob: 100, cost: 7000 }] },
            { id: 'drift', name: 'Dérive du Joystick (Manette)', causes: [{ cause: 'Remplacement Joystick', prob: 100, cost: 2500 }] },
        ],
        xbox_one: [
            { id: 'power', name: 'Ne s\'allume pas', causes: [{ cause: 'Bloc d\'alimentation', prob: 80, cost: 3000 }] },
            { id: 'drive', name: 'Problème de Lecteur Disque', causes: [{ cause: 'Remplacement Lecteur', prob: 100, cost: 5000 }] },
        ],
        xbox_sx: [
            { id: 'power', name: 'Pas de courant', causes: [{ cause: 'Alimentation Interne', prob: 90, cost: 9000 }] },
            { id: 'hdmi', name: 'Problème d\'affichage', causes: [{ cause: 'Port HDMI', prob: 100, cost: 8000 }] },
        ],
    }
};
