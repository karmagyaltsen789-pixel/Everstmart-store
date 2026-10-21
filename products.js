/* Everstmart — shared product list.
   "collection" decides which Shop-by-Collection card shows the product:
   incense | home-decor | lifestyle | traditional
   "featured: true" puts a product in the Featured Products row on the homepage.
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
        featured: true,
        images: [
            "carpet-set.jpg",
            "carpet-living-room.jpg",
            "carpet-closeup.jpg"
        ],
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
        featured: true,
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
    "potala-single-box.jpg",
    "potala-stack.jpg"
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
            "himalayan-aroma-10-1.jpg",
            "himalayan-aroma-10-2.jpg",
            "himalayan-aroma-10-3.jpg"
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
    "himalayan-aroma-6-1.jpg",
    "himalayan-aroma-6-2.jpg"
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
        featured: true,

    packOptions: [
        { label: "1 pc", quantity: 1, price: 1099 },
        { label: "5 pcs", quantity: 5, price: 5199 }
    ],

    wholesale: true,

    images: [
    "redcrystal1.jpg",
    "redcrystal2.jpg"
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
            "ratna-incense-10-1.jpg",
            "ratna-incense-10-2.jpg",
            "ratna-incense-10-3.jpg"
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

    prayerFlagLarge: {
        id: "EM-FLAG-001",
        name: "Prayer Flag Large (Green Tara)",
        price: 119,
        stock: 50,
        category: "Prayer Flags",
        collection: "traditional",
        optionTitle: "Choose Quality",
        packOptions: [
            { label: "Standard", quantity: 1, price: 119 },
            { label: "Premium", quantity: 1, price: 159 }
        ],
        wholesale: true,
        images: [
            "prayer-flag-large-1.jpg",
            "prayer-flag-large-2.jpg",
            "prayer-flag-large-3.jpg",
            "prayer-flag-large-4.jpg"
        ],
        description:
            "Large Tibetan prayer flags printed with Green Tara and traditional Tibetan prayers. One string of 10 cotton flags in the five traditional colours, made to be hung where the wind can carry their blessings. Choose Standard or Premium quality: Premium has better fabric and a sharper print.",
        details: {
            productDetails: [
                ["Product Type", "Tibetan Prayer Flags (one string)"],
                ["Flags per String", "10 flags in 5 traditional colours (blue, white, red, green, yellow), repeated twice"],
                ["Flag Size", "Approx. 39 × 25 cm"],
                ["Total Length", "Approx. 250 cm (2.5 m)"],
                ["Available Qualities", "Standard and Premium (Premium has better fabric and sharper print)"],
                ["Suitable For", "Homes, rooftops, balconies, prayer rooms, shops and vehicles"]
            ],
            careInstructions: [
                "Hang in a clean, high place such as a rooftop, balcony, window, doorway or vehicle.",
                "Avoid placing prayer flags on the floor or stepping over them.",
                "Colours will gently fade outdoors with sun and wind; this is traditional and expected.",
                "When replacing old flags, take them down respectfully."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    prayerFlagMedium: {
        id: "EM-FLAG-002",
        name: "Prayer Flag Medium (Wind Horse)",
        price: 99,
        stock: 50,
        category: "Prayer Flags",
        collection: "traditional",
        featured: true,
        optionTitle: "Choose Quality",
        packOptions: [
            { label: "Standard", quantity: 1, price: 99 },
            { label: "Premium", quantity: 1, price: 120 }
        ],
        wholesale: true,
        images: [
            "prayer-flag-medium-1.jpg",
            "prayer-flag-medium-2.jpg",
            "prayer-flag-medium-3.jpg",
            "prayer-flag-medium-4.jpg"
        ],
        description:
            "Medium Tibetan prayer flags printed with the Wind Horse (Lungta) and traditional Tibetan prayers. One string of 10 cotton flags in the five traditional colours, with a loop at each end for easy hanging. Choose Standard or Premium quality: Premium has better fabric and a sharper print.",
        details: {
            productDetails: [
                ["Product Type", "Tibetan Prayer Flags (one string)"],
                ["Flags per String", "10 flags in 5 traditional colours (blue, white, red, green, yellow), repeated twice"],
                ["Flag Size", "Approx. 23 × 19 cm"],
                ["Total Length", "Approx. 237 cm (2.37 m)"],
                ["Available Qualities", "Standard and Premium (Premium has better fabric and sharper print)"],
                ["Suitable For", "Homes, rooftops, balconies, prayer rooms, shops and vehicles"]
            ],
            careInstructions: [
                "Hang in a clean, high place such as a rooftop, balcony, window, doorway or vehicle.",
                "Avoid placing prayer flags on the floor or stepping over them.",
                "Colours will gently fade outdoors with sun and wind; this is traditional and expected.",
                "When replacing old flags, take them down respectfully."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    prayerFlagSmall90: {
        id: "EM-FLAG-003",
        name: "Prayer Flag Small (Om Mani) 90 cm",
        price: 100,
        stock: 50,
        category: "Prayer Flags",
        collection: "traditional",
        featured: true,
        optionTitle: "Choose Option",
        packOptions: [
            { label: "1 string", quantity: 1, price: 100 }
        ],
        wholesale: true,
        images: [
            "om-mani-90-1.jpg",
            "om-mani-90-2.jpg",
            "om-mani-size-chart.jpg"
        ],
        description:
            "Om Mani Padme Hum prayer flags, each flag printed with one syllable of the mantra in Tibetan script with its English name. One string of 10 flags in the five traditional colours. A great size for car windows, doorways, windows and small spaces.",
        details: {
            productDetails: [
                ["Product Type", "Om Mani Padme Hum Prayer Flags (one string)"],
                ["Flags per String", "10 flags in 5 colours (blue, white, red, green, yellow), repeated twice"],
                ["Flag Size", "Approx. 12 × 9 cm"],
                ["Total Length", "Approx. 90 cm"],
                ["Suitable For", "Car windows, doorways, windows, shops and small spaces"]
            ],
            careInstructions: [
                "Hang in a clean, high place such as a rooftop, balcony, window, doorway or vehicle.",
                "Avoid placing prayer flags on the floor or stepping over them.",
                "Colours will gently fade outdoors with sun and wind; this is traditional and expected.",
                "When replacing old flags, take them down respectfully."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    prayerFlagSmall73: {
        id: "EM-FLAG-004",
        name: "Prayer Flag Small (Om Mani) 73 cm",
        price: 85,
        stock: 50,
        category: "Prayer Flags",
        collection: "traditional",
        optionTitle: "Choose Option",
        packOptions: [
            { label: "1 string", quantity: 1, price: 85 }
        ],
        wholesale: true,
        images: [
            "om-mani-73-1.jpg",
            "om-mani-73-2.jpg",
            "om-mani-size-chart.jpg"
        ],
        description:
            "Om Mani Padme Hum prayer flags, each flag printed with one syllable of the mantra in Tibetan script with its English name. One string of 10 flags in the five traditional colours. A handy size for bikes, cars, windows and desks.",
        details: {
            productDetails: [
                ["Product Type", "Om Mani Padme Hum Prayer Flags (one string)"],
                ["Flags per String", "10 flags in 5 colours (blue, white, red, green, yellow), repeated twice"],
                ["Flag Size", "Approx. 10 × 7 cm"],
                ["Total Length", "Approx. 73 cm"],
                ["Suitable For", "Motorbikes, cars, windows, desks and small spaces"]
            ],
            careInstructions: [
                "Hang in a clean, high place such as a rooftop, balcony, window, doorway or vehicle.",
                "Avoid placing prayer flags on the floor or stepping over them.",
                "Colours will gently fade outdoors with sun and wind; this is traditional and expected.",
                "When replacing old flags, take them down respectfully."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    prayerFlagMini55: {
        id: "EM-FLAG-005",
        name: "Prayer Flag Mini (Om Mani) 55 cm",
        price: 75,
        stock: 50,
        category: "Prayer Flags",
        collection: "traditional",
        optionTitle: "Choose Option",
        packOptions: [
            { label: "1 string", quantity: 1, price: 75 }
        ],
        wholesale: true,
        images: [
            "om-mani-55-1.jpg",
            "om-mani-size-chart.jpg"
        ],
        description:
            "Om Mani Padme Hum prayer flags, each flag printed with one syllable of the mantra in Tibetan script with its English name. One string of 10 flags in the five traditional colours. A mini size for car dashboards, mirrors, shelves and altars.",
        details: {
            productDetails: [
                ["Product Type", "Om Mani Padme Hum Prayer Flags (one string)"],
                ["Flags per String", "10 flags in 5 colours (blue, white, red, green, yellow), repeated twice"],
                ["Flag Size", "Approx. 6.5 × 5 cm"],
                ["Total Length", "Approx. 55 cm"],
                ["Suitable For", "Car mirrors and dashboards, shelves, altars and desks"]
            ],
            careInstructions: [
                "Hang in a clean, high place such as a rooftop, balcony, window, doorway or vehicle.",
                "Avoid placing prayer flags on the floor or stepping over them.",
                "Colours will gently fade outdoors with sun and wind; this is traditional and expected.",
                "When replacing old flags, take them down respectfully."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    prayerFlagMini43: {
        id: "EM-FLAG-006",
        name: "Prayer Flag Mini (Om Mani) 43 cm",
        price: 50,
        stock: 50,
        category: "Prayer Flags",
        collection: "traditional",
        optionTitle: "Choose Option",
        packOptions: [
            { label: "1 string", quantity: 1, price: 50 }
        ],
        wholesale: true,
        images: [
            "om-mani-43-1.jpg",
            "om-mani-size-chart.jpg"
        ],
        description:
            "Om Mani Padme Hum prayer flags, each flag printed with one syllable of the mantra in Tibetan script with its English name. One string of 10 flags in the five traditional colours. Our smallest size, perfect for car mirrors, shelves, altars and gifts.",
        details: {
            productDetails: [
                ["Product Type", "Om Mani Padme Hum Prayer Flags (one string)"],
                ["Flags per String", "10 flags in 5 colours (blue, white, red, green, yellow), repeated twice"],
                ["Flag Size", "Approx. 5.5 × 3.8 cm"],
                ["Total Length", "Approx. 43 cm"],
                ["Suitable For", "Car mirrors, shelves, altars, desks and gifts"]
            ],
            careInstructions: [
                "Hang in a clean, high place such as a rooftop, balcony, window, doorway or vehicle.",
                "Avoid placing prayer flags on the floor or stepping over them.",
                "Colours will gently fade outdoors with sun and wind; this is traditional and expected.",
                "When replacing old flags, take them down respectfully."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    urdo: {
        id: "EM-TRAD-001",
        name: "Handwoven Tibetan Urdo (Yak Herder's Sling)",
        price: 1500,
        stock: 10,
        category: "Tibetan Collection",
        collection: "traditional",
        wholesale: false,
        images: [
            "urdo-1.jpg",
            "urdo-2.jpg"
        ],
        description:
            "A handwoven Tibetan urdo, the traditional sling carried by herders on the high Himalayan grasslands to guide their yaks and sheep. Woven by hand in bold black-and-white patterns, it is a striking piece of nomadic heritage to display at home or give as a meaningful gift.",
        details: {
            productDetails: [
                ["Product Type", "Traditional Tibetan Urdo (Yak Herder's Sling)"],
                ["Making", "Handwoven"],
                ["Design", "Traditional black-and-white woven patterns"],
                ["Suitable For", "Display, collection and gifting"]
            ],
            careInstructions: [
                "Store in a dry place away from moisture.",
                "Clean gently by hand; do not machine wash.",
                "Keep out of reach of children."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    varsityJacket: {
        id: "EM-APPAREL-001",
        name: "Tibetan Embroidered Varsity Jacket – Maroon",
        price: 4999,
        stock: 3,
        category: "Clothing",
        collection: "lifestyle",
        featured: true,
        optionTitle: "Choose Size",
        packOptions: [
            { label: "Size M", quantity: 1, price: 4999, available: false },
            { label: "Size L", quantity: 1, price: 4999 },
            { label: "Size XL", quantity: 1, price: 4999, available: false }
        ],
        wholesale: false,
        images: [
            "jacket-1.jpg",
            "jacket-2.jpg",
            "jacket-3.jpg",
            "jacket-4.jpg"
        ],
        description:
            "A maroon varsity jacket that brings Tibetan heritage into modern streetwear. The front carries Tibetan script embroidery with a signature-style logo over an endless knot, and the back features a large embroidered crest built around the endless knot. Finished with snap buttons, striped ribbed collar, cuffs and hem, and grey arrow details on the pockets. Currently available in size L only; only 3 pieces in this batch.",
        details: {
            productDetails: [
                ["Product Type", "Varsity / Bomber Jacket"],
                ["Colour", "Maroon with grey and red stripes"],
                ["Front", "Tibetan script embroidery with signature-style logo over an endless knot"],
                ["Back", "Large embroidered endless knot crest"],
                ["Details", "Snap buttons, striped ribbed collar, cuffs and hem, arrow pocket trims"],
                ["Available Size", "L (M and XL not available for now)"]
            ],
            careInstructions: [
                "Dry clean recommended to protect the embroidery.",
                "Do not bleach.",
                "Iron on low heat from the inside; do not iron over the embroidery.",
                "Hang on a wide hanger to keep the shoulders in shape."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    varsityJacketMaroonSleeve: {
        id: "EM-APPAREL-002",
        name: "Tibetan Script Varsity Jacket – Black & Maroon",
        price: 4999,
        stock: 3,
        category: "Clothing",
        collection: "lifestyle",
        optionTitle: "Choose Size",
        packOptions: [
            { label: "Size M", quantity: 1, price: 4999, available: false },
            { label: "Size L", quantity: 1, price: 4999 },
            { label: "Size XL", quantity: 1, price: 4999, available: false }
        ],
        wholesale: false,
        images: [
            "jacket-maroon-sleeve-1.jpg",
            "jacket-maroon-sleeve-2.jpg",
            "jacket-maroon-sleeve-3.jpg",
            "jacket-maroon-sleeve-4.jpg"
        ],
        description:
            "A classic varsity jacket in black with maroon leather-look sleeves, finished with Tibetan touches. The chest carries embroidered script logos framed by red ornamental motifs, and the back shows two lines of flowing Tibetan calligraphy in red and white. Snap buttons, striped ribbed collar, cuffs and hem. Currently available in size L only; only 3 pieces in this batch.",
        details: {
            productDetails: [
                ["Product Type", "Varsity Jacket"],
                ["Colour", "Black body with maroon sleeves"],
                ["Sleeves", "Maroon leather-look"],
                ["Front", "Embroidered script logos with red ornamental motifs"],
                ["Back", "Two lines of Tibetan calligraphy embroidery"],
                ["Details", "Snap buttons, striped ribbed collar, cuffs and hem"],
                ["Available Size", "L (M and XL not available for now)"]
            ],
            careInstructions: [
                "Dry clean recommended to protect the embroidery and patches.",
                "Do not bleach.",
                "Iron on low heat from the inside; do not iron over embroidery, patches or leather.",
                "Hang on a wide hanger to keep the shoulders in shape."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    varsityJacketLetters: {
        id: "EM-APPAREL-003",
        name: "Tibetan Letters Varsity Jacket – Black",
        price: 4999,
        stock: 3,
        category: "Clothing",
        collection: "lifestyle",
        optionTitle: "Choose Size",
        packOptions: [
            { label: "Size M", quantity: 1, price: 4999, available: false },
            { label: "Size L", quantity: 1, price: 4999 },
            { label: "Size XL", quantity: 1, price: 4999, available: false }
        ],
        wholesale: false,
        images: [
            "jacket-letters-1.jpg",
            "jacket-letters-2.jpg",
            "jacket-letters-3.jpg",
            "jacket-letters-4.jpg"
        ],
        description:
            "An all-black varsity jacket with black leather-look sleeves that celebrates the Tibetan alphabet. The front has a large grey Tibetan letter with pink textured script across the chest, and the back is scattered with colourful embroidered Tibetan letters. Snap buttons and ribbed collar, cuffs and hem. Currently available in size L only; only 3 pieces in this batch.",
        details: {
            productDetails: [
                ["Product Type", "Varsity Jacket"],
                ["Colour", "Black"],
                ["Sleeves", "Black leather-look"],
                ["Front", "Large grey Tibetan letter patch with pink textured script"],
                ["Back", "Colourful embroidered Tibetan alphabet letters"],
                ["Details", "Snap buttons, ribbed collar, cuffs and hem"],
                ["Available Size", "L (M and XL not available for now)"]
            ],
            careInstructions: [
                "Dry clean recommended to protect the embroidery and patches.",
                "Do not bleach.",
                "Iron on low heat from the inside; do not iron over embroidery, patches or leather.",
                "Hang on a wide hanger to keep the shoulders in shape."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    varsityJacketWindHorse: {
        id: "EM-APPAREL-004",
        name: "Wind Horse Varsity Jacket – Black",
        price: 4999,
        stock: 3,
        category: "Clothing",
        collection: "lifestyle",
        optionTitle: "Choose Size",
        packOptions: [
            { label: "Size M", quantity: 1, price: 4999, available: false },
            { label: "Size L", quantity: 1, price: 4999 },
            { label: "Size XL", quantity: 1, price: 4999, available: false }
        ],
        wholesale: false,
        images: [
            "jacket-windhorse-1.jpg",
            "jacket-windhorse-2.jpg",
            "jacket-windhorse-3.jpg",
            "jacket-windhorse-4.jpg"
        ],
        description:
            "A black varsity jacket built around the Wind Horse (Lungta), the Tibetan symbol of good fortune. The back features a large embroidered Wind Horse surrounded by flames with a line of Tibetan script, the front has large grey Tibetan letter patches and a horse emblem, and one sleeve carries a column of endless knots. Gold snap buttons and ribbed collar, cuffs and hem. Currently available in size L only; only 3 pieces in this batch.",
        details: {
            productDetails: [
                ["Product Type", "Varsity Jacket"],
                ["Colour", "Black with grey embroidery"],
                ["Front", "Large grey Tibetan letter patches and Wind Horse emblem"],
                ["Back", "Large embroidered Wind Horse with flames and Tibetan script"],
                ["Sleeves", "Endless knot embroidery on one sleeve, script panel on the other"],
                ["Details", "Gold snap buttons, ribbed collar, cuffs and hem"],
                ["Available Size", "L (M and XL not available for now)"]
            ],
            careInstructions: [
                "Dry clean recommended to protect the embroidery and patches.",
                "Do not bleach.",
                "Iron on low heat from the inside; do not iron over embroidery, patches or leather.",
                "Hang on a wide hanger to keep the shoulders in shape."
            ],
            shipping: [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    /* ---------- Men-Tsee-Khang (SORIG) products ----------
       Price = Men-Tsee-Khang price + 55%, rounded. Stock 10 each.
       Products using mtk-photo-coming-soon.jpg still need a real photo. */

    mtkLoongTea: {
        "id": "EM-MTK-001",
        "gstRate": 5,
        "name": "SORIG Loong Tea",
        "price": 279,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 279
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-loong-tea.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea traditionally used to calm 'Loong' (wind) imbalance — linked with restlessness, poor sleep, back ache and low appetite, often from overthinking, irregular sleep or skipped meals.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Wild rose, caraway, nutmeg, star anise, ginger, long pepper"
                ],
                [
                    "How to Use",
                    "Pour hot water over one tea bag and steep a few minutes. Drink plain or with jaggery or a pinch of salt — best in the evening after a busy day."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTripaTea: {
        "id": "EM-MTK-002",
        "gstRate": 5,
        "name": "SORIG Tripa Tea",
        "price": 264,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 264
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tripa-tea.jpg"
        ],
        "description": "A refreshing, cooling herbal tea for 'Tripa' (bile) imbalance. Traditionally taken for headache, nausea, bitter taste, low appetite, excess thirst, body heat and sweating.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Two-flowered raspberry, Symplocos, caraway, tea leaves, wild rose, safflower, mint, liquorice"
                ],
                [
                    "How to Use",
                    "Steep one tea bag in hot water for about 2 minutes. Best in the afternoon or late night; add a teaspoon of rock sugar when symptoms appear."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkBaekanTea: {
        "id": "EM-MTK-003",
        "gstRate": 5,
        "name": "SORIG Baekan Tea",
        "price": 264,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 264
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-baekan-tea.jpg"
        ],
        "description": "A warming herbal tea for 'Baekan' (phlegm) imbalance — weak digestion, feeling cold, indigestion, heaviness and lethargy, often from cold foods, sweets and damp weather.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Pomegranate, ajwain (carom), black cumin, ginger, tea leaves, cardamom, cinnamon"
                ],
                [
                    "How to Use",
                    "Pour hot water over one tea bag and infuse a few minutes. Drink plain or with a little honey or salt — best in the morning."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkRaabGaYangzinTeaEverydayTea: {
        "id": "EM-MTK-004",
        "gstRate": 5,
        "name": "SORIG Raab-Ga-Yangzin Tea-Everyday Tea",
        "price": 248,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 248
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-raab-ga-yangzin-tea-everyday-tea.jpg"
        ],
        "description": "A gentle everyday herbal tea for all ages. Helps balance the body's energies, aids digestion, helps keep colds and flu away and makes a refreshing drink any time of day.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Red currant (Rubus), Symplocos, safflower, cardamom, ginger, wild rose"
                ],
                [
                    "How to Use",
                    "Pour hot water over one tea bag and steep a few minutes. Drink plain or with sugar or salt."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkRaabGaYangzinTeaTeaPouch: {
        "id": "EM-MTK-005",
        "gstRate": 5,
        "name": "SORIG Raab-Ga-Yangzin Tea-Tea Pouch",
        "price": 186,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "75 g",
                "quantity": 1,
                "price": 186
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-raab-ga-yangzin-tea-everyday-tea.jpg"
        ],
        "description": "A gentle everyday herbal tea for all ages. Helps balance the body's energies, aids digestion, helps keep colds and flu away and makes a refreshing drink any time of day.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "75 g"
                ],
                [
                    "Ingredients",
                    "Red currant (Rubus), Symplocos, safflower, cardamom, ginger, wild rose"
                ],
                [
                    "How to Use",
                    "Pour hot water over one tea bag and steep a few minutes. Drink plain or with sugar or salt."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkGardenTea: {
        "id": "EM-MTK-006",
        "gstRate": 5,
        "name": "SORIG Garden Tea",
        "price": 155,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 155
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-garden-tea.jpg"
        ],
        "description": "A soothing spiced herbal tea that helps relieve stress, aids digestion, refreshes the senses and helps protect against colds, flu and sore throat.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Tea leaves, clove, ginger, cinnamon, cardamom"
                ],
                [
                    "How to Use",
                    "Steep in hot water and enjoy as a refreshing drink."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTrakSheyTeaHypertensionRegulatingTea: {
        "id": "EM-MTK-007",
        "gstRate": 5,
        "name": "SORIG Trak-Shey Tea-Hypertension Regulating Tea",
        "price": 248,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 248
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-trak-shey-tea-hypertension-regulating-tea.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea that supports healthy circulation and sound sleep, and helps ease upper back pain, stiff neck, headache, dry mouth and numbness in the limbs.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "Ingredients",
                    "Red currant (Rubus), wild rose, Malabar nut, Corydalis, Indian acacia, amla, Dracocephalum, liquorice"
                ],
                [
                    "How to Use",
                    "Steep one tea bag in hot water. Best in the afternoon, or any time symptoms appear. A little sugar may be added."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkZaKhuCheeNyiiTeaDiabetesCareTea: {
        "id": "EM-MTK-008",
        "gstRate": 5,
        "name": "SORIG Za-Khu-Chee-Nyii Tea-Diabetes Care Tea",
        "price": 248,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 248
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-za-khu-chee-nyii-tea-diabetes-care-tea.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea traditionally used to support healthy blood sugar balance, digestion, appetite and sound sleep, and to ease dry mouth, frequent urination and burning palms and soles.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "Ingredients",
                    "Tea leaves, Xanthium, Indian acacia, Indian barberry, amla, turmeric"
                ],
                [
                    "How to Use",
                    "Place one tea bag in a cup and pour hot water over it. Best in the morning; a little honey may be added."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkOogmiDaewaeMenjaRespiratoryCareTea: {
        "id": "EM-MTK-009",
        "gstRate": 5,
        "name": "SORIG Oogmi-Daewae-Menja-Respiratory Care Tea",
        "price": 171,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "15 g",
                "quantity": 1,
                "price": 171
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-oogmi-daewae-menja-respiratory-care-tea.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea for the respiratory system — traditionally taken for colds, chest congestion, cough, breathlessness, heavy sweating and general weakness.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "15 g"
                ],
                [
                    "Ingredients",
                    "Gentian, Rhodiola, Selinum, cinnamon, clove, Artemisia, Phlomis, liquorice, black cardamom, grapes"
                ],
                [
                    "How to Use",
                    "Steep one tea bag in hot water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkShangDruumMenjaPilesReliefTea: {
        "id": "EM-MTK-010",
        "gstRate": 5,
        "name": "SORIG Shang-Druum-Menja-Piles Relief Tea",
        "price": 147,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "15 g",
                "quantity": 1,
                "price": 147
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-shang-druum-menja-piles-relief-tea.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea traditionally used to reduce bloating and inflammation linked with digestive upsets and piles (haemorrhoids).",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "15 g"
                ],
                [
                    "Ingredients",
                    "Pine, Tribulus, ashwagandha, kurchi, Clematis, false black pepper (Embelia), Selaginella, capsicum"
                ],
                [
                    "How to Use",
                    "Steep one tea bag in hot water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkDruumBueMenjaArthritisReliefTea: {
        "id": "EM-MTK-011",
        "gstRate": 5,
        "name": "SORIG Druum-Bue-Menja-Arthritis Relief Tea",
        "price": 147,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "15 g",
                "quantity": 1,
                "price": 147
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-druum-bue-menja-arthritis-relief-tea.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea traditionally used for joint pain, swelling, stiffness and restricted movement, by supporting kidney function and balancing blood and Loong.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "15 g"
                ],
                [
                    "Ingredients",
                    "Tribulus, Sichuan pepper, giloy (Tinospora), Indian acacia"
                ],
                [
                    "How to Use",
                    "Boil, or steep one tea bag in hot water for 2 minutes. 1–2 tea bags a day, or as directed by a physician."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTobkayMenjaTonicTea: {
        "id": "EM-MTK-012",
        "gstRate": 5,
        "name": "SORIG Tobkay-Menja-Tonic Tea",
        "price": 178,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "15 g",
                "quantity": 1,
                "price": 178
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tobkay-menja-tonic-tea.jpg"
        ],
        "description": "A Sowa Rigpa tonic tea traditionally taken to build strength and vitality, support long life, improve complexion and help with early wrinkles and greying.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "15 g"
                ],
                [
                    "Ingredients",
                    "Ashwagandha, Tribulus, clove, cardamom, areca nut, Polygonatum, shatavari, rhubarb root"
                ],
                [
                    "How to Use",
                    "Steep one tea bag in hot water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkNyiingNaeMenjaHeartCareTea: {
        "id": "EM-MTK-013",
        "gstRate": 5,
        "name": "SORIG Nyiing-Nae-Menja-Heart Care Tea",
        "price": 178,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "15 g",
                "quantity": 1,
                "price": 178
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-nyiing-nae-menja-heart-care-tea.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea traditionally used to support heart health and circulation, and to calm palpitations and restlessness.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "15 g"
                ],
                [
                    "Ingredients",
                    "Caraway, Polygonatum, garlic, sundew (Drosera), nutmeg"
                ],
                [
                    "How to Use",
                    "Steep one tea bag in hot water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkLoongTsabMenjaWomenWellnessTea: {
        "id": "EM-MTK-014",
        "gstRate": 5,
        "name": "SORIG Loong-Tsab-Menja-Women Wellness Tea",
        "price": 186,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "15 g",
                "quantity": 1,
                "price": 186
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-loong-tsab-menja-women-wellness-tea.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea for women's wellness — traditionally used for irregular periods, lower-abdominal and hip pain, low energy, poor memory and stress.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "15 g"
                ],
                [
                    "Ingredients",
                    "Rhubarb root, ashwagandha, Polygonatum, Tribulus, Abrus, nutmeg"
                ],
                [
                    "How to Use",
                    "Steep one tea bag in hot water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkMiggiNuepaSowaeMenjaEyeCareTea: {
        "id": "EM-MTK-015",
        "gstRate": 5,
        "name": "SORIG Miggi-Nuepa Sowae Menja-Eye Care Tea",
        "price": 147,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "15 g",
                "quantity": 1,
                "price": 147
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-miggi-nuepa-sowae-menja-eye-care-tea.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea traditionally taken to support healthy eyesight and relieve everyday eye strain and eye pain.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "15 g"
                ],
                [
                    "Ingredients",
                    "Safflower, caraway, carrot, corn, chebulic myrobalan"
                ],
                [
                    "How to Use",
                    "Pour hot water over one tea bag and steep until the colour comes out. Drink plain or with a pinch of sugar, any time."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkGonaeSelwaeMenjaHeadacheReliefTea: {
        "id": "EM-MTK-016",
        "gstRate": 5,
        "name": "SORIG Gonae-Selwae Menja-Headache Relief Tea",
        "price": 147,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "15 g",
                "quantity": 1,
                "price": 147
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-gonae-selwae-menja-headache-relief-tea.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea traditionally used to relieve headache, dizziness and migraine, and to refresh body and mind.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "15 g"
                ],
                [
                    "Ingredients",
                    "Chebulic myrobalan, wild rose, Malabar nut, star anise, nutmeg"
                ],
                [
                    "How to Use",
                    "Pour hot water over one tea bag and steep until the colour comes out. Drink plain or with a pinch of sugar, any time."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkLungSoothingTeaForLungInflammationRelief: {
        "id": "EM-MTK-017",
        "gstRate": 5,
        "name": "SORIG Lung Soothing Tea-For Lung Inflammation Relief",
        "price": 155,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Teas",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "15 g",
                "quantity": 1,
                "price": 155
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-lung-soothing-tea-for-lung-inflammation-relief.jpg"
        ],
        "description": "A Sowa Rigpa herbal tea that supports healthy lung function and easier breathing, and may ease upper back pain. Especially used for cough and fever from a chest infection.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "15 g"
                ],
                [
                    "How to Use",
                    "Steep one tea bag in hot water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTobmeenChudueGyatsoHealthTonic: {
        "id": "EM-MTK-018",
        "gstRate": 5,
        "name": "SORIG Tobmeen Chudue Gyatso (Health Tonic)",
        "price": 837,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "60 g",
                "quantity": 1,
                "price": 837
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tobmeen-chudue-gyatso-health-tonic.jpg"
        ],
        "description": "A Sowa Rigpa health tonic that supports strength, vitality and the senses, and helps with long-term tiredness. Traditionally used to maintain 'kidney warmth'.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "60 g"
                ],
                [
                    "Ingredients",
                    "Ashwagandha, liquorice, cardamom, clove, safflower, amla, Asparagus, long pepper"
                ],
                [
                    "How to Use",
                    "Take with warm boiled milk or warm water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTobmeenChudueGyatsoHealthTonic20Sachets: {
        "id": "EM-MTK-019",
        "gstRate": 5,
        "name": "SORIG Tobmeen Chudue Gyatso (Health Tonic-20 Sachets)",
        "price": 558,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 558
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tobmeen-chudue-gyatso-health-tonic.jpg"
        ],
        "description": "A Sowa Rigpa health tonic that supports strength, vitality and the senses, and helps with long-term tiredness. Traditionally used to maintain 'kidney warmth'.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Ashwagandha, liquorice, cardamom, clove, safflower, amla, Asparagus, long pepper"
                ],
                [
                    "How to Use",
                    "Take with warm boiled milk or warm water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkHealthCandy: {
        "id": "EM-MTK-020",
        "gstRate": 5,
        "name": "SORIG Health Candy",
        "price": 271,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 g",
                "quantity": 1,
                "price": 271
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-health-candy.jpg"
        ],
        "description": "A Sowa Rigpa herbal candy that boosts energy, improves complexion, supports digestion and helps with lung, liver and stomach complaints.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 g"
                ],
                [
                    "Ingredients",
                    "Amla, liquorice, safflower, cardamom, cinnamon, dates, jaggery, honey"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkKaemMeenDashunSlimmingSupplement: {
        "id": "EM-MTK-021",
        "gstRate": 5,
        "name": "SORIG Kaem-Meen Dashun-Slimming Supplement",
        "price": 279,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "60 g",
                "quantity": 1,
                "price": 279
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-kaem-meen-dashun-slimming-supplement.jpg"
        ],
        "description": "A Sowa Rigpa herbal supplement traditionally used alongside diet and exercise to support healthy weight, circulation and blood-sugar balance, and to reduce fatigue and excess mucus.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "60 g"
                ],
                [
                    "Ingredients",
                    "Indian barberry, chebulic, belleric myrobalan, amla, ginger, Embelia, Clematis, honey"
                ],
                [
                    "How to Use",
                    "Use together with a balanced diet and regular exercise."
                ]
            ],
            "careInstructions": [
                "Avoid during cold, fever, low blood pressure or anaemia.",
                "Not for children or pregnant women.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkGaayPaSowaeChulenElixirOfRejuvenation: {
        "id": "EM-MTK-022",
        "gstRate": 5,
        "name": "SORIG Gaay-Pa-Sowae-Chulen-Elixir of Rejuvenation",
        "price": 310,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "60 g",
                "quantity": 1,
                "price": 310
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-gaay-pa-sowae-chulen-elixir-of-rejuvenation.jpg"
        ],
        "description": "A Sowa Rigpa rejuvenating elixir traditionally taken to support vigour, a youthful glow, sharp senses, memory and long life.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "60 g"
                ],
                [
                    "Ingredients",
                    "Triphala (chebulic, belleric myrobalan, amla), juniper, rhododendron, Polygonatum, Tribulus, shatavari, cordyceps, sea buckthorn, ginseng, dates, grapes, shilajit, honey"
                ]
            ],
            "careInstructions": [
                "Avoid while suffering from a cold or fever.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkChongchenChulenVitalitySupplement: {
        "id": "EM-MTK-023",
        "gstRate": 5,
        "name": "SORIG Chongchen Chulen-Vitality Supplement",
        "price": 295,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "60 g",
                "quantity": 1,
                "price": 295
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-chongchen-chulen-vitality-supplement.jpg"
        ],
        "description": "A Sowa Rigpa nourishing supplement to restore energy after long illness — traditionally used for weakness, breathing trouble, dizziness, hiccups, low appetite and lung complaints.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "60 g"
                ],
                [
                    "Ingredients",
                    "Cinnamon, cardamom, Tanacetum, long pepper, grapes, dates, liquorice"
                ]
            ],
            "careInstructions": [
                "Avoid while suffering from a cold or fever.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkLhophelDhutseSharpensIntelligence: {
        "id": "EM-MTK-024",
        "gstRate": 5,
        "name": "SORIG Lhophel Dhutse-Sharpens Intelligence",
        "price": 233,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "60 g",
                "quantity": 1,
                "price": 233
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-lhophel-dhutse-sharpens-intelligence.jpg"
        ],
        "description": "A Sowa Rigpa supplement for children, traditionally given to nourish the child and support memory, intelligence and clear speech.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "60 g"
                ],
                [
                    "Ingredients",
                    "Chebulic myrobalan, ginger, long pepper, black pepper, sweet flag, alum, grapes, dates"
                ],
                [
                    "How to Use",
                    "Under 1 year: half a sachet a week. Over 1 year: one sachet every 3 days."
                ]
            ],
            "careInstructions": [
                "Avoid while suffering from a cold or fever.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTsephelDhutseBoostTheLifeSpan: {
        "id": "EM-MTK-025",
        "gstRate": 5,
        "name": "SORIG Tsephel Dhutse-Boost the Life Span",
        "price": 233,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "60 g",
                "quantity": 1,
                "price": 233
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tsephel-dhutse-boost-the-life-span.jpg"
        ],
        "description": "A Sowa Rigpa 'elixir of life' traditionally taken to boost energy, strengthen immunity and support long life.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "60 g"
                ],
                [
                    "Ingredients",
                    "Mustard seed, sweet flag, rock salt, long pepper, grapes, dates, honey"
                ]
            ],
            "careInstructions": [
                "Avoid while suffering from a cold or fever.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkKaemMeenShonnuForSlimness: {
        "id": "EM-MTK-026",
        "gstRate": 5,
        "name": "SORIG Kaem-Meen Shonnu-For Slimness",
        "price": 279,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "60 g",
                "quantity": 1,
                "price": 279
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-kaem-meen-shonnu-for-slimness.jpg"
        ],
        "description": "A Sowa Rigpa slimming supplement traditionally used to support healthy weight, reduce swelling and water retention, relieve tiredness and aid digestion.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "60 g"
                ],
                [
                    "Ingredients",
                    "Rhubarb root, calcite, chebulic myrobalan, amla, Embelia, Clematis, honey"
                ],
                [
                    "How to Use",
                    "One sachet daily with lukewarm water — morning on an empty stomach, or evening. A teaspoon of honey helps."
                ]
            ],
            "careInstructions": [
                "Not for anaemic people, children or pregnant women.",
                "Use with a balanced diet and exercise; avoid heavy, fatty food and daytime naps.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkChik: {
        "id": "EM-MTK-027",
        "gstRate": 5,
        "name": "SORIG Men-Chik",
        "price": 428,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "75 g",
                "quantity": 1,
                "price": 428
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-men-chik.jpg"
        ],
        "description": "A Sowa Rigpa herbal digestive that strengthens digestive heat, supports healthy haemoglobin and helps with low blood pressure.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "75 g"
                ],
                [
                    "Ingredients",
                    "Pomegranate, cinnamon, cardamom, long pepper, safflower"
                ],
                [
                    "How to Use",
                    "One sachet half an hour before or after meals, with lukewarm boiled water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkNee: {
        "id": "EM-MTK-028",
        "gstRate": 5,
        "name": "SORIG Men-Nee",
        "price": 428,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "75 g",
                "quantity": 1,
                "price": 428
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-men-nee.jpg"
        ],
        "description": "A Sowa Rigpa herbal digestive that relieves indigestion, constipation, stomach cramps and vomiting, and improves appetite.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "75 g"
                ],
                [
                    "Ingredients",
                    "Amla, pomegranate, Malabar nut, cardamom, long pepper"
                ],
                [
                    "How to Use",
                    "One sachet half an hour before or after meals, with lukewarm boiled water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkSoom: {
        "id": "EM-MTK-029",
        "gstRate": 5,
        "name": "SORIG Men-Soom",
        "price": 484,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "75 g",
                "quantity": 1,
                "price": 484
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-men-soom.jpg"
        ],
        "description": "A Sowa Rigpa herbal formula for stomach and chest — traditionally used for stomach upsets, acidity, chest congestion, cough and breathing difficulty.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "75 g"
                ],
                [
                    "How to Use",
                    "One sachet half an hour before or after meals, with lukewarm boiled water."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTrulthangColdFluRelief: {
        "id": "EM-MTK-030",
        "gstRate": 5,
        "name": "SORIG Trulthang (Cold & Flu Relief)",
        "price": 149,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "20 g",
                "quantity": 1,
                "price": 149
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-trulthang-cold-flu-relief.jpg"
        ],
        "description": "A Sowa Rigpa herbal decoction that helps relieve colds, flu and their symptoms and supports the body's immunity.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "20 g"
                ],
                [
                    "Ingredients",
                    "Amla, two-flowered raspberry, Himalayan scape flower, chebulic myrobalan"
                ],
                [
                    "How to Use",
                    "Boil or steep one tea bag in hot water for 2–3 minutes. Take once or twice a day."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkDawoeChinchudChenmoForHealthyLiver: {
        "id": "EM-MTK-031",
        "gstRate": 5,
        "name": "SORIG Dawoe Chinchud Chenmo-For Healthy Liver",
        "price": 465,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "37.2 g",
                "quantity": 1,
                "price": 465
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-dawoe-chinchud-chenmo-for-healthy-liver.jpg"
        ],
        "description": "A traditional Sowa Rigpa formula for liver health — used for liver, stomach and blood complaints and as a regular liver tonic. 30 pills.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "37.2 g"
                ],
                [
                    "How to Use",
                    "One pill an hour before or after meals with lukewarm boiled water, or as directed by a physician."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkGoyuDhunjorForHealthyKidney: {
        "id": "EM-MTK-032",
        "gstRate": 5,
        "name": "SORIG Goyu Dhunjor-For Healthy Kidney",
        "price": 465,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "34 g",
                "quantity": 1,
                "price": 465
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-goyu-dhunjor-for-healthy-kidney.jpg"
        ],
        "description": "A traditional Sowa Rigpa formula for kidney health — used for 'cold' kidney complaints such as pain around the kidneys and waist and frequent urge to urinate. 30 pills.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "34 g"
                ],
                [
                    "Ingredients",
                    "Areca nut, pomegranate, cinnamon, cardamom, long pepper"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkNyigugSumthang: {
        "id": "EM-MTK-033",
        "gstRate": 5,
        "name": "SORIG Nyigug Sumthang",
        "price": 279,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "20 g",
                "quantity": 1,
                "price": 279
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-nyigug-sumthang.jpg"
        ],
        "description": "A Sowa Rigpa herbal blend for good sleep — traditionally used for insomnia and mental unrest linked with Loong imbalance.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "20 g"
                ],
                [
                    "Ingredients",
                    "Cardamom, cumin and other herbs"
                ],
                [
                    "How to Use",
                    "Boil one sachet in water for 5–6 minutes and drink lukewarm."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkSangthelNyerngaForHealthyLungs: {
        "id": "EM-MTK-034",
        "gstRate": 5,
        "name": "SORIG Sangthel Nyernga-For Healthy Lungs",
        "price": 481,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "34.21 g",
                "quantity": 1,
                "price": 481
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-sangthel-nyernga-for-healthy-lungs.jpg"
        ],
        "description": "A classic Sowa Rigpa formula from Men-Tsee-Khang, prepared to traditional Tibetan recipes.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "34.21 g"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkShecheDrukpaNormalizeBowelFunction: {
        "id": "EM-MTK-035",
        "gstRate": 5,
        "name": "SORIG Sheche Drukpa-Normalize Bowel Function",
        "price": 341,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "60 g",
                "quantity": 1,
                "price": 341
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-sheche-drukpa-normalize-bowel-function.jpg"
        ],
        "description": "A traditional Sowa Rigpa formula that normalises bowel function — used for indigestion, constipation, bloating and abdominal pain. 90 pills.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "60 g"
                ],
                [
                    "How to Use",
                    "Crush and take with warm boiled water, half an hour before or after a meal; 3 pills a day."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkLaetraeNgathangSupportsMuscleVascularJointPain: {
        "id": "EM-MTK-036",
        "gstRate": 5,
        "name": "SORIG Laetrae Ngathang-Supports Muscle, Vascular & Joint Pain",
        "price": 465,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "62 g",
                "quantity": 1,
                "price": 465
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-laetrae-ngathang-supports-muscle-vascular-joint-pain.jpg"
        ],
        "description": "A traditional Sowa Rigpa formula that supports muscle, blood-vessel and joint health — used for joint pain and swelling, stiffness, and lower back, neck and nerve pain.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "62 g"
                ]
            ],
            "careInstructions": [
                "Anyone with long-term slow metabolism should consult a Sowa Rigpa practitioner first.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkNaSpice: {
        "id": "EM-MTK-037",
        "gstRate": 5,
        "name": "SORIG Men-Na-Spice",
        "price": 155,
        "stock": 10,
        "category": "Men-Tsee-Khang Herbal Supplements",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 g",
                "quantity": 1,
                "price": 155
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-men-na-spice.jpg"
        ],
        "description": "A Tibetan spice blend for everyday cooking. Aids digestion, eases gas, supports circulation and adds warm flavour to meals and salads.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 g"
                ],
                [
                    "Ingredients",
                    "Star anise, cumin, cardamom, black cardamom, long pepper, black pepper, Nepal pepper (timur), cinnamon"
                ],
                [
                    "How to Use",
                    "Add to food and salads."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkShasoePaekarBeautyCreamTube: {
        "id": "EM-MTK-038",
        "gstRate": 18,
        "name": "SORIG Shasoe-Paekar-Beauty Cream (Tube)",
        "price": 202,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 202
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-shasoe-paekar-beauty-cream-tube.jpg"
        ],
        "description": "A Sowa Rigpa daily moisturising cream that hydrates and revitalises skin, leaving it smooth, soft and glowing, and helps protect against sun, pollution and dryness.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "Ingredients",
                    "Sunflower oil, beeswax, ceresin (mineral wax), borax"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkShasoePaekarBeautyCreamJar: {
        "id": "EM-MTK-039",
        "gstRate": 18,
        "name": "SORIG Shasoe-Paekar-Beauty Cream (Jar)",
        "price": 202,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 202
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-shasoe-paekar-beauty-cream-jar.jpg"
        ],
        "description": "A Sowa Rigpa daily moisturising cream that hydrates and revitalises skin, leaving it smooth, soft and glowing, and helps protect against sun, pollution and dryness.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Sunflower oil, beeswax, ceresin (mineral wax), borax"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkNyerdakGamoliAntiWrinkleTube: {
        "id": "EM-MTK-040",
        "gstRate": 18,
        "name": "SORIG Nyerdak Gamoli-Anti-Wrinkle (Tube)",
        "price": 217,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 217
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-nyerdak-gamoli-anti-wrinkle-tube.jpg"
        ],
        "description": "A Sowa Rigpa anti-wrinkle cream that helps reduce fine lines and early signs of ageing, improves skin elasticity and gives a youthful glow; also helps with blemishes and mild acne.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "Ingredients",
                    "Pomegranate, Indian barberry, turmeric, kurchi, beeswax, ceresin, apricot oil, borax, sunflower oil, aloe vera and more"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkNyerdakGamoliAntiWrinkleJar: {
        "id": "EM-MTK-041",
        "gstRate": 18,
        "name": "SORIG Nyerdak Gamoli-Anti-Wrinkle (Jar)",
        "price": 233,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 233
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-nyerdak-gamoli-anti-wrinkle-tube.jpg"
        ],
        "description": "A Sowa Rigpa anti-wrinkle cream that helps reduce fine lines and early signs of ageing, improves skin elasticity and gives a youthful glow; also helps with blemishes and mild acne.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Pomegranate, Indian barberry, turmeric, kurchi, beeswax, ceresin, apricot oil, borax, sunflower oil, aloe vera and more"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkPakJukDaMaRaAntiVitiligo: {
        "id": "EM-MTK-042",
        "gstRate": 5,
        "name": "SORIG Pak-Juk-Da-Ma-Ra (Anti-Vitiligo)",
        "price": 202,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 202
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-pak-juk-da-ma-ra-anti-vitiligo.jpg"
        ],
        "description": "A Sowa Rigpa herbal cream traditionally used for patchy skin discolouration, and for psoriasis, fungal infections and itchy, dry or cracked skin.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Sunflower oil, beeswax, ceresin, turmeric, Embelia, Iris, flame-of-the-forest, shatavari, musk mallow"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkPakJukDaMaRaAntiVitiligoTube: {
        "id": "EM-MTK-043",
        "gstRate": 5,
        "name": "SORIG Pak-Juk-Da-Ma-Ra (Anti-Vitiligo) Tube",
        "price": 186,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 186
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-pak-juk-da-ma-ra-anti-vitiligo.jpg"
        ],
        "description": "A Sowa Rigpa herbal cream traditionally used for patchy skin discolouration, and for psoriasis, fungal infections and itchy, dry or cracked skin.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "Ingredients",
                    "Sunflower oil, beeswax, ceresin, turmeric, Embelia, Iris, flame-of-the-forest, shatavari, musk mallow"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkMahMaenRabjorSoothingBalm: {
        "id": "EM-MTK-044",
        "gstRate": 5,
        "name": "SORIG Mah-Maen Rabjor (Soothing Balm)",
        "price": 109,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "20 g",
                "quantity": 1,
                "price": 109
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-mah-maen-rabjor-soothing-balm.jpg"
        ],
        "description": "A Sowa Rigpa herbal ointment for small cuts and wounds. Antiseptic and soothing; also used for eczema and fungal skin problems.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "20 g"
                ],
                [
                    "Ingredients",
                    "Sunflower oil, beeswax, ceresin, turmeric, shatavari, safflower, Oxytropis, dandelion, triphala (chebulic, belleric myrobalan, amla)"
                ],
                [
                    "How to Use",
                    "Apply to the affected area twice a day, or as directed by a physician."
                ]
            ],
            "careInstructions": [
                "For external use only.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkJukNuumAgarDhethearMassageOil75ml: {
        "id": "EM-MTK-045",
        "gstRate": 5,
        "name": "SORIG Juk-Nuum-Agar-Dhethear-Massage Oil 75ml",
        "price": 202,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "75 ml",
                "quantity": 1,
                "price": 202
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-juk-nuum-agar-dhethear-massage-oil-75ml.jpg"
        ],
        "description": "A Sowa Rigpa herbal body massage oil that relieves physical and mental tiredness, relaxes muscles and nerves, improves circulation and rejuvenates the body.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "75 ml"
                ],
                [
                    "Ingredients",
                    "Soybean oil, nutmeg, clove, caraway, turmeric, safflower, ginger, chirata, amla, black cardamom, rose oil and more"
                ],
                [
                    "How to Use",
                    "Massage onto the body."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkJukNuumAgarDhethearMassageOil150ml: {
        "id": "EM-MTK-046",
        "gstRate": 5,
        "name": "SORIG Juk-Nuum-Agar-Dhethear-Massage Oil 150ml",
        "price": 357,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "150 ml",
                "quantity": 1,
                "price": 357
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-juk-nuum-agar-dhethear-massage-oil-150ml.jpg"
        ],
        "description": "A Sowa Rigpa herbal body massage oil that relieves physical and mental tiredness, relaxes muscles and nerves, improves circulation and rejuvenates the body.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "150 ml"
                ],
                [
                    "Ingredients",
                    "Soybean oil, nutmeg, clove, caraway, turmeric, safflower, ginger, chirata, amla, black cardamom, rose oil and more"
                ],
                [
                    "How to Use",
                    "Massage onto the body."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkJeepaeJuknuumBabyMassageOil: {
        "id": "EM-MTK-047",
        "gstRate": 5,
        "name": "SORIG Jeepae Juknuum-Baby Massage Oil",
        "price": 186,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 ml",
                "quantity": 1,
                "price": 186
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-jeepae-juknuum-baby-massage-oil.jpg"
        ],
        "description": "A gentle Sowa Rigpa massage oil for babies. Supports circulation, muscle and nerve health, keeps skin smooth and supports healthy growth.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 ml"
                ],
                [
                    "Ingredients",
                    "Water, apricot kernel oil, sesame oil, caraway oil, nutmeg oil, walnut oil, sweet orange oil"
                ],
                [
                    "How to Use",
                    "Massage gently over baby's body."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkJukNuumTiktaDhethearCoolingMassageOil: {
        "id": "EM-MTK-048",
        "gstRate": 5,
        "name": "SORIG Juk-Nuum-Tikta-Dhethear-Cooling Massage Oil",
        "price": 171,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "75 ml",
                "quantity": 1,
                "price": 171
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-juk-nuum-tikta-dhethear-cooling-massage-oil.jpg"
        ],
        "description": "A cooling Sowa Rigpa massage oil for heat-related ('blood' and 'Tripa') imbalance — eases prickly sensations, tiredness, and muscle and upper back pain; reduces itching and gives skin a healthy glow.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "75 ml"
                ],
                [
                    "Ingredients",
                    "Juniper, chirata, Tumburu, Ephedra, saffron, shilajit, Rubus, shatavari, sunflower oil and more"
                ],
                [
                    "How to Use",
                    "Massage daily over the whole body or the affected area, including the scalp."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkDruumBueJuknuumArthritisOil: {
        "id": "EM-MTK-049",
        "gstRate": 5,
        "name": "SORIG Druum-Bue-Juknuum-Arthritis Oil",
        "price": 217,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "75 ml",
                "quantity": 1,
                "price": 217
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-druum-bue-juknuum-arthritis-oil.jpg"
        ],
        "description": "A Sowa Rigpa herbal oil for knee, joint and lower-back pain. Helps strengthen muscles and joints and improves flexibility.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "75 ml"
                ],
                [
                    "Ingredients",
                    "Walnut oil, soybean oil, shatavari, Sichuan pepper, juniper, Indian acacia and more"
                ],
                [
                    "How to Use",
                    "Gently massage onto the affected area twice a day, or as directed by a physician."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkSaabGaayForSkinIrritation: {
        "id": "EM-MTK-050",
        "gstRate": 5,
        "name": "SORIG Saab-Gaay-For Skin Irritation",
        "price": 202,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 202
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-saab-gaay-for-skin-irritation.jpg"
        ],
        "description": "A Sowa Rigpa herbal cream for skin irritation and allergies, acne, ringworm, boils and slow-healing wounds.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "Ingredients",
                    "Sunflower oil, beeswax, ceresin, Oxytropis, Indian acacia, neem"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTsaJukForNerveDisorder: {
        "id": "EM-MTK-051",
        "gstRate": 5,
        "name": "SORIG Tsa-Juk-For Nerve Disorder",
        "price": 217,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 217
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tsa-juk-for-nerve-disorder.jpg"
        ],
        "description": "A Sowa Rigpa herbal cream traditionally used for nerve-related stiffness, numbness and tightness in the arms and legs; also good for sprains.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "Ingredients",
                    "Sunflower oil, beeswax, ceresin, nutmeg, caraway, turmeric, Zanthoxylum"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkShangDruumJukpaPilesCream: {
        "id": "EM-MTK-052",
        "gstRate": 5,
        "name": "SORIG Shang Druum-Jukpa (Piles Cream)",
        "price": 202,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 202
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-shang-druum-jukpa-piles-cream.jpg"
        ],
        "description": "A Sowa Rigpa herbal cream that eases the pain, swelling, itching and discomfort of piles (haemorrhoids).",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Water, beeswax, ceresin, sunflower oil, borax, apricot oil, kurchi, Oxytropis, shatavari, chebulic myrobalan, Delphinium, Malabar nut, Embelia, preservatives"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkShangDruumJukpaPilesCreamTube: {
        "id": "EM-MTK-053",
        "gstRate": 5,
        "name": "SORIG Shang Druum-Jukpa (Piles Cream) Tube",
        "price": 186,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 186
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-shang-druum-jukpa-piles-cream.jpg"
        ],
        "description": "A Sowa Rigpa herbal cream that eases the pain, swelling, itching and discomfort of piles (haemorrhoids).",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "Ingredients",
                    "Water, beeswax, ceresin, sunflower oil, borax, apricot oil, kurchi, Oxytropis, shatavari, chebulic myrobalan, Delphinium, Malabar nut, Embelia, preservatives"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkAruYachamDashunAruBalm: {
        "id": "EM-MTK-054",
        "gstRate": 5,
        "name": "SORIG Aru-Yacham-Dashun (Aru Balm)",
        "price": 124,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "15 g",
                "quantity": 1,
                "price": 124
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-aru-yacham-dashun-aru-balm.jpg"
        ],
        "description": "A Sowa Rigpa herbal balm for colds, flu and blocked sinuses; also used for aches, sprains, strains and insect bites.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "15 g"
                ],
                [
                    "Ingredients",
                    "Chebulic myrobalan, cinnamon, cardamom, peppermint, clove, eucalyptus oil, carnauba wax, soybean oil, ajwain and mint oil"
                ],
                [
                    "How to Use",
                    "Rub gently on the affected area, nostrils and temples."
                ]
            ],
            "careInstructions": [
                "For external use only.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTaNuumHairOil: {
        "id": "EM-MTK-055",
        "gstRate": 5,
        "name": "SORIG Ta-Nuum-Hair Oil",
        "price": 279,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 ml",
                "quantity": 1,
                "price": 279
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-ta-nuum-hair-oil.jpg"
        ],
        "description": "A Sowa Rigpa herbal hair oil that promotes healthy, shiny hair, helps prevent dandruff and early greying, and calms Loong imbalance.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 ml"
                ],
                [
                    "Ingredients",
                    "Apricot oil, sesame oil, neem, chebulic myrobalan, amla, Sichuan pepper, Onosma and more"
                ],
                [
                    "How to Use",
                    "Massage into scalp and hair."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTaChuDaeguShampoo100ml: {
        "id": "EM-MTK-056",
        "gstRate": 5,
        "name": "SORIG Ta-Chu-Daegu-Shampoo 100ml",
        "price": 186,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 ml",
                "quantity": 1,
                "price": 186
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-ta-chu-daegu-shampoo-100ml.jpg"
        ],
        "description": "A Sowa Rigpa herbal shampoo that cleanses and nourishes hair, strengthens roots, controls dandruff and itchy scalp, and adds natural shine and volume.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 ml"
                ],
                [
                    "Ingredients",
                    "Amla, fenugreek, soapnut, neem, glycerin, orange oil, jasmine oil and more"
                ],
                [
                    "How to Use",
                    "Use as a regular shampoo."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTaChuDaeguShampoo300ml: {
        "id": "EM-MTK-057",
        "gstRate": 5,
        "name": "SORIG Ta-Chu-Daegu-Shampoo 300ml",
        "price": 434,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "300 ml",
                "quantity": 1,
                "price": 434
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-ta-chu-daegu-shampoo-300ml.jpg"
        ],
        "description": "A Sowa Rigpa herbal shampoo that cleanses and nourishes hair, strengthens roots, controls dandruff and itchy scalp, and adds natural shine and volume.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "300 ml"
                ],
                [
                    "Ingredients",
                    "Amla, fenugreek, soapnut, neem, glycerin, orange oil, jasmine oil and more"
                ],
                [
                    "How to Use",
                    "Use as a regular shampoo."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkAntiDandruffShampoo: {
        "id": "EM-MTK-058",
        "gstRate": 5,
        "name": "SORIG Anti Dandruff Shampoo",
        "price": 434,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 ml",
                "quantity": 1,
                "price": 434
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-anti-dandruff-shampoo.jpg"
        ],
        "description": "A Sowa Rigpa herbal anti-dandruff shampoo from Men-Tsee-Khang for a clean, fresh scalp.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 ml"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTajukDawoeSmoothSilkyHair: {
        "id": "EM-MTK-059",
        "gstRate": 18,
        "name": "SORIG Tajuk Dawoe-Smooth & Silky Hair",
        "price": 217,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 217
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tajuk-dawoe-smooth-silky-hair.jpg"
        ],
        "description": "A Sowa Rigpa herbal hair cream that nourishes, smooths and strengthens hair, and helps protect against hair fall, dandruff and itchy scalp.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ],
                [
                    "Ingredients",
                    "Safflower, silk cotton tree, neem, clearing nut, glyceryl monostearate, cetyl alcohol, orange oil, mineral oil"
                ],
                [
                    "How to Use",
                    "Apply regularly, or after each hair wash."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTajukDawoeSmoothSilkyHairTube: {
        "id": "EM-MTK-060",
        "gstRate": 18,
        "name": "SORIG Tajuk Dawoe-Smooth & Silky Hair (Tube)",
        "price": 202,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 202
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tajuk-dawoe-smooth-silky-hair.jpg"
        ],
        "description": "A Sowa Rigpa herbal hair cream that nourishes, smooths and strengthens hair, and helps protect against hair fall, dandruff and itchy scalp.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "Ingredients",
                    "Safflower, silk cotton tree, neem, clearing nut, glyceryl monostearate, cetyl alcohol, orange oil, mineral oil"
                ],
                [
                    "How to Use",
                    "Apply regularly, or after each hair wash."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkLoongJukLoongLotion: {
        "id": "EM-MTK-061",
        "gstRate": 18,
        "name": "SORIG Loong-Juk-Loong Lotion",
        "price": 171,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 ml",
                "quantity": 1,
                "price": 171
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-loong-juk-loong-lotion.jpg"
        ],
        "description": "A Sowa Rigpa body lotion for dry, rough and sensitive skin. Moisturises, soothes and relaxes; also helps with swelling and aches in the hands and feet and supports circulation.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 ml"
                ],
                [
                    "Ingredients",
                    "Glyceryl monostearate, stearic acid, cetyl alcohol, petroleum jelly, apricot oil, sesame oil, caraway, cinnamon and nutmeg oils, water, preservatives"
                ],
                [
                    "How to Use",
                    "Apply to the skin as needed."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTrieJukTripaLotion: {
        "id": "EM-MTK-062",
        "gstRate": 18,
        "name": "SORIG Trie-Juk-Tripa Lotion",
        "price": 171,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 ml",
                "quantity": 1,
                "price": 171
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-trie-juk-tripa-lotion.jpg"
        ],
        "description": "A cooling Sowa Rigpa body lotion that helps prevent and soothe prickly heat, itching and dry, cracked skin, and keeps skin moisturised.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 ml"
                ],
                [
                    "Ingredients",
                    "Glyceryl monostearate, stearic acid, cetyl alcohol, beeswax, petroleum jelly, apricot oil, bitter gourd, orange and cucumber oils, water, preservative"
                ],
                [
                    "How to Use",
                    "Apply to the skin as needed."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkBaeJukBaekanLotion: {
        "id": "EM-MTK-063",
        "gstRate": 18,
        "name": "SORIG Bae-Juk-Baekan Lotion",
        "price": 155,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 ml",
                "quantity": 1,
                "price": 155
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-bae-juk-baekan-lotion.jpg"
        ],
        "description": "A warming Sowa Rigpa body lotion that boosts body warmth, eases muscle stiffness and swollen joints, and soothes itchy skin.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 ml"
                ],
                [
                    "Ingredients",
                    "Glyceryl monostearate, stearic acid, cetyl alcohol, beeswax, petroleum jelly, soybean, pomegranate and ginger oils, water, preservatives"
                ],
                [
                    "How to Use",
                    "Apply to the skin as needed."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkDailyGlowCreamJar: {
        "id": "EM-MTK-064",
        "gstRate": 18,
        "name": "SORIG Daily Glow Cream Jar",
        "price": 163,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 g",
                "quantity": 1,
                "price": 163
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-photo-coming-soon.jpg"
        ],
        "description": "A daily face cream from Men-Tsee-Khang's SORIG range for soft, glowing skin.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 g"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkDailyGlowCreamTube: {
        "id": "EM-MTK-065",
        "gstRate": 18,
        "name": "SORIG Daily Glow Cream Tube",
        "price": 132,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 132
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-photo-coming-soon.jpg"
        ],
        "description": "A daily face cream from Men-Tsee-Khang's SORIG range for soft, glowing skin.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkHerbalTalc: {
        "id": "EM-MTK-066",
        "gstRate": 5,
        "name": "SORIG Herbal Talc",
        "price": 140,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 g",
                "quantity": 1,
                "price": 140
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-herbal-talc.jpg"
        ],
        "description": "A Sowa Rigpa herbal talc that prevents body odour, controls sweating, soothes rashes and irritation and leaves skin fresh and smooth.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 g"
                ],
                [
                    "Ingredients",
                    "Calcium carbonate, talc, geranium, menthol, jasmine and rose oils"
                ],
                [
                    "How to Use",
                    "Dust onto clean, dry skin."
                ]
            ],
            "careInstructions": [
                "For external use only.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkZathiDuknuum: {
        "id": "EM-MTK-067",
        "gstRate": 5,
        "name": "SORIG Zathi-Duknuum",
        "price": 171,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 ml",
                "quantity": 1,
                "price": 171
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-zathi-duknuum.jpg"
        ],
        "description": "A Sowa Rigpa heat-compress oil for calming Loong imbalance — traditionally used for restlessness, poor sleep, ringing in the ears, dizziness, palpitations, stiff limbs and upper back pain.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 ml"
                ],
                [
                    "Ingredients",
                    "Nutmeg, caraway, clove and sesame oils"
                ],
                [
                    "How to Use",
                    "Warm the oil (or rub between your palms) and apply to the affected areas. Best used with the Zathi Dukpa heat compress."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkZathiDukpa: {
        "id": "EM-MTK-068",
        "gstRate": 5,
        "name": "SORIG Zathi-Dukpa",
        "price": 186,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 186
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-zathi-dukpa.jpg"
        ],
        "description": "A Sowa Rigpa herbal heat-compress pack, applied warm to Loong points — traditionally used for dizziness, stiff limbs, palpitations, poor sleep and ringing in the ears.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "How to Use",
                    "Apply as a warm compress on the Loong points, following the leaflet inside."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkDhutseNgalumMedicinalBathTherapy: {
        "id": "EM-MTK-069",
        "gstRate": 5,
        "name": "SORIG DHUTSE-NGALUM-Medicinal Bath Therapy",
        "price": 388,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "250 g",
                "quantity": 1,
                "price": 388
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-dhutse-ngalum-medicinal-bath-therapy.jpg"
        ],
        "description": "A Sowa Rigpa medicinal herbal bath that relaxes the body, eases stiffness, strengthens muscles, calms the mind and rejuvenates; also used for joint swelling, chronic wounds and skin problems.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "250 g"
                ],
                [
                    "Ingredients",
                    "Ephedra, rhododendron, Artemisia, Myricaria, juniper, processed calcite and trona, sulphur, Tribulus, sal and flowers"
                ],
                [
                    "How to Use",
                    "Follow the leaflet inside the pouch."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkDhutseNgaduk: {
        "id": "EM-MTK-070",
        "gstRate": 5,
        "name": "SORIG Dhutse Ngaduk",
        "price": 233,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "175 g",
                "quantity": 1,
                "price": 233
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-photo-coming-soon.jpg"
        ],
        "description": "A traditional Sowa Rigpa herbal bath therapy product from Men-Tsee-Khang. 175 g.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "175 g"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkDaebhuSoomDuk: {
        "id": "EM-MTK-071",
        "gstRate": 5,
        "name": "SORIG Daebhu Soom Duk",
        "price": 341,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "200 g",
                "quantity": 1,
                "price": 341
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-photo-coming-soon.jpg"
        ],
        "description": "A traditional Sowa Rigpa therapy product from Men-Tsee-Khang. 200 g.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "200 g"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkChingLumWetDressingTherapy: {
        "id": "EM-MTK-072",
        "gstRate": 5,
        "name": "SORIG Ching Lum-Wet Dressing Therapy",
        "price": 248,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "180 g",
                "quantity": 1,
                "price": 248
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-ching-lum-wet-dressing-therapy.jpg"
        ],
        "description": "A Sowa Rigpa herbal wet-dressing pouch for Loong imbalance — used for stiff nerves, tendons and ligaments, swelling and pain in the back and knees, muscle weakness and skin problems.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "180 g"
                ],
                [
                    "Ingredients",
                    "Tanacetum, black juniper, rhododendron, Ephedra, barley, processed calcite, shilajit, Indian frankincense and more"
                ],
                [
                    "How to Use",
                    "Follow the leaflet. The pouch can be dried or refrigerated and reused."
                ]
            ],
            "careInstructions": [
                "Not for people with cold or 'hot' disorders, swelling, inflammation or fever.",
                "Avoid eyes, cheeks, big toes, elbows, genitals, heart and stomach.",
                "External use only.",
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkSoNuumDhunpaDentalSoother: {
        "id": "EM-MTK-073",
        "gstRate": 5,
        "name": "SORIG So-Nuum Dhunpa-Dental Soother",
        "price": 62,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "5 ml",
                "quantity": 1,
                "price": 62
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-photo-coming-soon.jpg"
        ],
        "description": "A traditional Sowa Rigpa dental oil from Men-Tsee-Khang. 5 ml.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "5 ml"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkOogchoeNgapaEarDrops: {
        "id": "EM-MTK-074",
        "gstRate": 5,
        "name": "SORIG Oogchoe Ngapa-Ear Drops",
        "price": 62,
        "stock": 10,
        "category": "Men-Tsee-Khang Skin, Hair & Body Care",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "8 ml",
                "quantity": 1,
                "price": 62
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-photo-coming-soon.jpg"
        ],
        "description": "Traditional Sowa Rigpa ear drops from Men-Tsee-Khang. 8 ml.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "8 ml"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place away from direct sunlight.",
                "Keep out of reach of children.",
                "Please consult a doctor or qualified Sowa Rigpa practitioner before use, especially if you are pregnant, nursing, taking other medicines or giving it to a child."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTibetanIncenseBig: {
        "id": "EM-MTK-075",
        "gstRate": 5,
        "name": "SORIG Tibetan Incense big",
        "price": 163,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "60 sticks",
                "quantity": 1,
                "price": 163
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tibetan-incense-big.jpg"
        ],
        "description": "Traditional SORIG Tibetan herbal incense for offerings, prayer and meditation — best in the morning. Purifies and refreshes the room and the senses.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "60 sticks"
                ],
                [
                    "Ingredients",
                    "Safflower, rhododendron, juniper, Picrorhiza, saffron, Selinum, Dracocephalum, Artemisia, sandalwood"
                ],
                [
                    "How to Use",
                    "Light and offer, especially during morning prayer and meditation."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTibetanIncenseMedium: {
        "id": "EM-MTK-076",
        "gstRate": 5,
        "name": "SORIG Tibetan Incense medium",
        "price": 115,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "40 sticks",
                "quantity": 1,
                "price": 115
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tibetan-incense-medium.jpg"
        ],
        "description": "Traditional SORIG Tibetan herbal incense for offerings, prayer and meditation — best in the morning. Purifies and refreshes the room and the senses.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "40 sticks"
                ],
                [
                    "Ingredients",
                    "Safflower, rhododendron, juniper, Picrorhiza, saffron, Selinum, Dracocephalum, Artemisia, sandalwood"
                ],
                [
                    "How to Use",
                    "Light and offer, especially during morning prayer and meditation."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTibetanIncenseSmall: {
        "id": "EM-MTK-077",
        "gstRate": 5,
        "name": "SORIG Tibetan Incense small",
        "price": 59,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "20 sticks",
                "quantity": 1,
                "price": 59
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-tibetan-incense-small.jpg"
        ],
        "description": "Traditional SORIG Tibetan herbal incense for offerings, prayer and meditation — best in the morning. Purifies and refreshes the room and the senses.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "20 sticks"
                ],
                [
                    "Ingredients",
                    "Safflower, rhododendron, juniper, Picrorhiza, saffron, Selinum, Dracocephalum, Artemisia, sandalwood"
                ],
                [
                    "How to Use",
                    "Light and offer, especially during morning prayer and meditation."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkTibetanStressIncense: {
        "id": "EM-MTK-078",
        "gstRate": 5,
        "name": "Tibetan Sorig Stress Incense",
        "price": 124,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "24 sticks",
                "quantity": 1,
                "price": 124
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-tibetan-sorig-stress-incense.jpg"
        ],
        "description": "A SORIG herbal incense made to ease stress and calm Loong (wind) imbalance — traditionally used for tension, stiff shoulders, restlessness and poor sleep.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "24 sticks"
                ],
                [
                    "Ingredients",
                    "Silk cotton tree, Pegaeophyton, Rhodiola and more"
                ],
                [
                    "How to Use",
                    "Burn like regular incense, or sit close and breathe in the smoke with your head covered."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkMensangIncensePowder: {
        "id": "EM-MTK-079",
        "gstRate": 5,
        "name": "SORIG Mensang (Incense Powder)",
        "price": 65,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "60 g",
                "quantity": 1,
                "price": 65
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-mensang-incense-powder.jpg"
        ],
        "description": "SORIG herbal incense powder for morning offerings, prayer and meditation. Purifies the air and refreshes the room.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "60 g"
                ],
                [
                    "How to Use",
                    "Sprinkle over warm ash in an incense holder, or between two burning incense sticks."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkLhasaIncenseBig: {
        "id": "EM-MTK-080",
        "gstRate": 5,
        "name": "SORIG Lhasa Incense Big",
        "price": 186,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 sticks",
                "quantity": 1,
                "price": 186
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-lhasa-incense-big.jpg"
        ],
        "description": "Traditional Lhasa-style Tibetan herbal incense for offerings, prayer and meditation — best in the morning. Purifies and refreshes the room and the senses.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 sticks"
                ],
                [
                    "Ingredients",
                    "Safflower, rhododendron, juniper, Picrorhiza, saffron, Selinum, Dracocephalum, Artemisia, sandalwood"
                ],
                [
                    "How to Use",
                    "Light and offer, especially during morning prayer and meditation."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkLhasaIncenseSmall: {
        "id": "EM-MTK-081",
        "gstRate": 5,
        "name": "SORIG Lhasa Incense Small",
        "price": 109,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 sticks",
                "quantity": 1,
                "price": 109
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-lhasa-incense-big.jpg"
        ],
        "description": "Traditional Lhasa-style Tibetan herbal incense for offerings, prayer and meditation — best in the morning. Purifies and refreshes the room and the senses.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 sticks"
                ],
                [
                    "Ingredients",
                    "Safflower, rhododendron, juniper, Picrorhiza, saffron, Selinum, Dracocephalum, Artemisia, sandalwood"
                ],
                [
                    "How to Use",
                    "Light and offer, especially during morning prayer and meditation."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkMenchey: {
        "id": "EM-MTK-082",
        "gstRate": 5,
        "name": "SORIG Menchey",
        "price": 109,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 109
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-menchey.jpg"
        ],
        "description": "SORIG ritual powder for puja offerings and quiet reflection. Mixed into ritual offerings to purify them and gather merit.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ],
                [
                    "Ingredients",
                    "Agate, nutmeg, cardamom, clove, bamboo, safflower, black cardamom, gentian, Saxifraga"
                ],
                [
                    "How to Use",
                    "Mix into offerings during puja."
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkBumzaeNyernga: {
        "id": "EM-MTK-083",
        "gstRate": 5,
        "name": "SORIG Bumzae Nyernga",
        "price": 147,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 g",
                "quantity": 1,
                "price": 147
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-bumzae-nyernga.jpg"
        ],
        "description": "SORIG Bumzae Nyernga ritual powder — the traditional mix used for filling treasure vases and ritual offerings.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 g"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkSangoDrukPowder: {
        "id": "EM-MTK-084",
        "gstRate": 5,
        "name": "SORIG Sango Druk Powder",
        "price": 202,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "100 g",
                "quantity": 1,
                "price": 202
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-sango-druk-powder.jpg"
        ],
        "description": "SORIG powder for sang (smoke) offerings. 100 g.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "100 g"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkLumenLuzaeChema: {
        "id": "EM-MTK-085",
        "gstRate": 5,
        "name": "SORIG Lumen/Luzae Chema",
        "price": 118,
        "stock": 10,
        "category": "Incense & Herbal Products",
        "collection": ["incense", "herbal"],
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "50 g",
                "quantity": 1,
                "price": 118
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-sorig-lumen-luzae-chema.jpg"
        ],
        "description": "SORIG offering powder for naga (lu) puja. 50 g.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "50 g"
                ]
            ],
            "careInstructions": [
                "Store in a cool, dry place.",
                "Keep out of reach of children and pets.",
                "Burn in a suitable holder and never leave burning incense unattended."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkPillCrusher: {
        "id": "EM-MTK-086",
        "gstRate": 18,
        "name": "Men-Tsee-Khang Pill Crusher",
        "price": 341,
        "stock": 10,
        "category": "Men-Tsee-Khang Therapy Items",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "1 piece",
                "quantity": 1,
                "price": 341
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-photo-coming-soon.jpg"
        ],
        "description": "Pill crusher for grinding Sowa Rigpa herbal pills into powder before taking.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "1 piece"
                ]
            ],
            "careInstructions": [
                "Keep clean and dry after use.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkDiffuser: {
        "id": "EM-MTK-087",
        "gstRate": 18,
        "name": "Men-Tsee-Khang Diffuser",
        "price": 248,
        "stock": 10,
        "category": "Men-Tsee-Khang Therapy Items",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "1 piece",
                "quantity": 1,
                "price": 248
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-photo-coming-soon.jpg"
        ],
        "description": "A diffuser from Men-Tsee-Khang.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "1 piece"
                ]
            ],
            "careInstructions": [
                "Keep clean and dry after use.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkCopperCuppingSetBig: {
        "id": "EM-MTK-088",
        "gstRate": 18,
        "name": "Men-Tsee-Khang Copper Cupping Set (Big)",
        "price": 1705,
        "stock": 10,
        "category": "Men-Tsee-Khang Therapy Items",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "1 set",
                "quantity": 1,
                "price": 1705
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-photo-coming-soon.jpg"
        ],
        "description": "Copper cupping set for traditional Sowa Rigpa cupping therapy.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "1 set"
                ]
            ],
            "careInstructions": [
                "Keep clean and dry after use.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    },

    mtkCopperCuppingSetSmall: {
        "id": "EM-MTK-089",
        "gstRate": 18,
        "name": "Men-Tsee-Khang Copper Cupping Set (Small)",
        "price": 1550,
        "stock": 10,
        "category": "Men-Tsee-Khang Therapy Items",
        "collection": "herbal",
        "optionTitle": "Size",
        "packOptions": [
            {
                "label": "1 set",
                "quantity": 1,
                "price": 1550
            }
        ],
        "wholesale": true,
        "images": [
            "mtk-photo-coming-soon.jpg"
        ],
        "description": "Copper cupping set for traditional Sowa Rigpa cupping therapy.",
        "details": {
            "productDetails": [
                [
                    "Brand",
                    "SORIG by Men-Tsee-Khang (Tibetan Medical & Astro. Institute), Dharamsala"
                ],
                [
                    "Size",
                    "1 set"
                ]
            ],
            "careInstructions": [
                "Keep clean and dry after use.",
                "Keep out of reach of children."
            ],
            "shipping": [
                "🚚 Free Shipping across India",
                "📦 Processing time: 2–3 business days",
                "🚚 Estimated delivery: 5–10 business days"
            ]
        }
    }
};
