/* Everstmart — shared product list.
   "collection" decides which Shop-by-Collection card shows the product:
   incense | home-decor | lifestyle | traditional
   Edit prices, stock, packs and GST details HERE only.
   Used by index.html, product.html and cart.html. */
window.EVERSTMART_PRODUCTS = {

        carpet: {
    id: "EM-CARPET-001",
    name: "Tibetan Traditional Carpet",
        price: 15000,
        stock: 10,
        category: "Tibetan Collection",
        collection: "traditional",
        image: "Carpet.PNG",
        description:
        "A beautiful Tibetan-inspired traditional carpet featuring distinctive cultural patterns and Himalayan character. Designed to bring warmth, elegance and a timeless Tibetan aesthetic to your home or workspace. The set includes 1 carpet and 2 bolster cushions. Suitable for living rooms, bedrooms, meditation rooms and offices.",

        details: {
            productDetails: [
                ["Set Includes", "1 Carpet + 2 Bolster Cushions"],
                ["Material", "Premium-quality synthetic fibre"],
                ["Design", "Traditional Tibetan-inspired pattern with Himalayan cultural motifs"],
                ["Size", "Approx. 5 × 7 feet"],
                ["Suitable For", "Living rooms, bedrooms, meditation rooms and offices"],
                ["Usage", "Ideal for home décor, relaxation spaces and traditional interiors"]
            ],

            careInstructions: [
                "Vacuum or gently brush regularly to remove dust.",
                "Clean spills promptly using a soft, damp cloth.",
                "Avoid bleach and harsh chemical cleaners.",
                "Do not soak the carpet in water.",
                "Keep away from prolonged moisture.",
                "For deep cleaning, professional carpet cleaning is recommended.",
                "Allow the carpet to dry completely before use."
            ],

            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    potala: {
        id: "EM-INCENSE-001",
        hsn: "33074100",
        gstRate: 5,
        name: "Potala Incense",
        price: 100,
stock: 50,
category: "Incense & Herbal Products",
        collection: "incense",
packOptions: [
    { label: "1 pc", quantity: 1, price: 100 },
    { label: "5 pcs", quantity: 5, price: 300 },
    { label: "10 pcs", quantity: 10, price: 600 },
    { label: "15 pcs", quantity: 15, price: 900 },
    { label: "20 pcs", quantity: 20, price: 1200 },
    { label: "1 Box (25 pcs)", quantity: 25, price: 1400 }
],
wholesale: true,
images: [
    "Potala big.PNG",
    "Potala-incense-2.PNG"
],
        description:
        "Traditional Potala incense made with carefully selected natural ingredients and inspired by the rich incense traditions of Tibet and the Himalayas. Ideal for meditation, relaxation, prayer spaces and creating a peaceful atmosphere at home or work.",

        details: {
            productDetails: [
                ["Set Includes", "1 pack of Potala Incense"],
                ["Number of Sticks", "25 sticks"],
                ["Weight", "Approx. 50 g"],
                ["Burning Time", "Approx. 30–40 minutes per stick"],
                ["Suitable For", "Meditation, prayer, relaxation and home use"],
                ["Usage", "Ideal for creating a peaceful and calming atmosphere"]
            ],

            careInstructions: [
                "Store in a cool, dry place.",
                "Keep away from moisture and direct sunlight.",
                "Keep out of reach of children and pets.",
                "Burn incense in a suitable incense holder.",
                "Never leave burning incense unattended."
            ],

            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

        himalayanAroma: {
        id: "EM-INCENSE-002",
        hsn: "33074100",
        gstRate: 5,
        name: "Himalayan Aroma 10 Inch",
        price: 500,
        stock: 25,
        category: "Incense & Herbal Products",
        collection: "incense",

        packOptions: [
            { label: "1 pc", quantity: 1, price: 500 },
            { label: "5 pcs", quantity: 5, price: 2249 }
        ],

        wholesale: true,

        images: [
            "Himalayan-Aroma-10-1.PNG",
            "Himalayan-Aroma-10-2.PNG",
            "Himalayan-Aroma-10-3.PNG"
        ],

        description:
            "Himalayan Aroma incense inspired by the natural beauty and peaceful atmosphere of the Himalayas. Ideal for meditation, relaxation, prayer spaces and creating a calm and pleasant atmosphere at home or work.",

        details: {
            productDetails: [
                ["Product Type", "Himalayan Aroma Incense"],
                ["Size", "10 Inch"],
                ["Available Packs", "1 pc and 5 pcs"],
                ["Suitable For", "Meditation, prayer, relaxation and home use"],
                ["Usage", "Ideal for creating a peaceful and calming atmosphere"]
            ],

            careInstructions: [
                "Store in a cool, dry place.",
                "Keep away from moisture and direct sunlight.",
                "Keep out of reach of children and pets.",
                "Burn incense in a suitable incense holder.",
                "Never leave burning incense unattended."
            ]
        }
    },
    himalayanAroma6: {
    id: "EM-INCENSE-003",
        hsn: "33074100",
        gstRate: 5,
    name: "Himalayan Aroma 6 Inch",
    price: 349,
    stock: 25,
    category: "Incense & Herbal Products",
        collection: "incense",

    packOptions: [
        { label: "1 pc", quantity: 1, price: 349 },
        { label: "5 pcs", quantity: 5, price: 1500 }
    ],

    wholesale: true,

    images: [
    "himalayan-aroma-6-1.PNG",
    "himalayan-aroma-6-2.PNG"
],

    description:
    "Himalayan Aroma 6 Inch incense inspired by the natural beauty and peaceful atmosphere of the Himalayas. Ideal for meditation, relaxation, prayer spaces and creating a calm and pleasant atmosphere at home or work.",

    details: {
        productDetails: [
            ["Product Type", "Himalayan Aroma Incense"],
            ["Size", "6 Inch"],
            ["Available Packs", "1 pc and 5 pcs"],
            ["Suitable For", "Meditation, prayer, relaxation and home use"],
            ["Usage", "Ideal for creating a peaceful and calming atmosphere"]
        ],

        careInstructions: [
            "Store in a cool, dry place.",
            "Keep away from moisture and direct sunlight.",
            "Keep out of reach of children and pets.",
            "Burn incense in a suitable incense holder.",
            "Never leave burning incense unattended."
        ]
    }
    },

     redCrystalIncense: {
    id: "EM-INCENSE-005",
        hsn: "33074100",
        gstRate: 5,
    name: "Red Crystal Incense",
    price: 1099,
    stock: 10,
    category: "Incense & Herbal Products",
        collection: "incense",

    packOptions: [
        { label: "1 pc", quantity: 1, price: 1099 },
        { label: "5 pcs", quantity: 5, price: 5199 }
    ],

    wholesale: true,

    images: [
    "redcrystal1.PNG",
    "redcrystal2.PNG"
],

    description:
        "Red Crystal Incense crafted for purification, spaciousness and serene surroundings.",

    details: {
        productDetails: [
            ["Product Type", "Red Crystal Incense"],
            ["Sticks", "25 sticks"],
            ["Suitable For", "Meditation, purification and peaceful spaces"],
            ["Usage", "Ideal for home, meditation and spiritual practices"]
        ],

        careInstructions: [
            "Store in a cool, dry place.",
            "Keep away from moisture.",
            "Keep out of reach of children.",
            "Burn incense in a suitable holder.",
            "Never leave burning incense unattended."
        ]
    }
},
    ratnaIncense10: {
        id: "EM-INCENSE-004",
        hsn: "33074100",
        gstRate: 5,
        name: "Ratna Incense 10 Inch",
        price: 250,
        stock: 20,
        category: "Incense & Herbal Products",
        collection: "incense",

        packOptions: [
            { label: "1 pc", quantity: 1, price: 250 },
            { label: "5 pcs", quantity: 5, price: 1149 }
        ],

        wholesale: true,

        images: [
            "ratna-incense-10-1.PNG",
            "ratna-incense-10-2.PNG",
            "ratna-incense-10-3.PNG"
        ],

        description:
            "Ratna Incense 10 Inch is a traditional incense inspired by the rich cultural incense traditions of the Himalayas. Ideal for meditation, prayer, relaxation and creating a peaceful atmosphere at home or work.",

        details: {
            productDetails: [
                ["Product Type", "Ratna Incense"],
                ["Size", "10 Inch"],
                ["Available Packs", "1 pc and 5 pcs"],
                ["Suitable For", "Meditation, prayer, relaxation and home use"],
                ["Usage", "Ideal for creating a peaceful and calming atmosphere"]
            ],

            careInstructions: [
                "Store in a cool, dry place.",
                "Keep away from moisture and direct sunlight.",
                "Keep out of reach of children and pets.",
                "Burn incense in a suitable incense holder.",
                "Never leave burning incense unattended."
            ]
        }
    },
};
