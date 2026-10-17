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
};
