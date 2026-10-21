import crypto from "crypto";

/* ------------------------------------------------------------------
   PRICE LIST (server copy)
   The server calculates every order total from this list, so a
   customer can never change a price in their browser.
   KEEP IN SYNC with products.js: whenever you change a price,
   pack or stock number there, change it here too.
------------------------------------------------------------------- */
const CATALOG = {
  "Tibetan Traditional Carpet": {
    "id": "EM-CARPET-001",
    "price": 15000,
    "stock": 10,
    "packs": []
  },
  "Potala Incense": {
    "id": "EM-INCENSE-001",
    "price": 100,
    "stock": 50,
    "packs": [
      {
        "label": "1 pc",
        "quantity": 1,
        "price": 100
      },
      {
        "label": "5 pcs",
        "quantity": 5,
        "price": 300
      },
      {
        "label": "10 pcs",
        "quantity": 10,
        "price": 600
      },
      {
        "label": "15 pcs",
        "quantity": 15,
        "price": 900
      },
      {
        "label": "20 pcs",
        "quantity": 20,
        "price": 1200
      },
      {
        "label": "1 Box (25 pcs)",
        "quantity": 25,
        "price": 1400
      }
    ]
  },
  "Himalayan Aroma 10 Inch": {
    "id": "EM-INCENSE-002",
    "price": 500,
    "stock": 25,
    "packs": [
      {
        "label": "1 pc",
        "quantity": 1,
        "price": 500
      },
      {
        "label": "5 pcs",
        "quantity": 5,
        "price": 2249
      }
    ]
  },
  "Himalayan Aroma 6 Inch": {
    "id": "EM-INCENSE-003",
    "price": 349,
    "stock": 25,
    "packs": [
      {
        "label": "1 pc",
        "quantity": 1,
        "price": 349
      },
      {
        "label": "5 pcs",
        "quantity": 5,
        "price": 1500
      }
    ]
  },
  "Red Crystal Incense": {
    "id": "EM-INCENSE-005",
    "price": 1099,
    "stock": 10,
    "packs": [
      {
        "label": "1 pc",
        "quantity": 1,
        "price": 1099
      },
      {
        "label": "5 pcs",
        "quantity": 5,
        "price": 5199
      }
    ]
  },
  "Ratna Incense 10 Inch": {
    "id": "EM-INCENSE-004",
    "price": 250,
    "stock": 20,
    "packs": [
      {
        "label": "1 pc",
        "quantity": 1,
        "price": 250
      },
      {
        "label": "5 pcs",
        "quantity": 5,
        "price": 1149
      }
    ]
  },
  "Prayer Flag Large (Green Tara)": {
    "id": "EM-FLAG-001",
    "price": 119,
    "stock": 50,
    "packs": [
      {
        "label": "Standard",
        "quantity": 1,
        "price": 119
      },
      {
        "label": "Premium",
        "quantity": 1,
        "price": 159
      }
    ]
  },
  "Prayer Flag Medium (Wind Horse)": {
    "id": "EM-FLAG-002",
    "price": 99,
    "stock": 50,
    "packs": [
      {
        "label": "Standard",
        "quantity": 1,
        "price": 99
      },
      {
        "label": "Premium",
        "quantity": 1,
        "price": 120
      }
    ]
  },
  "Prayer Flag Small (Om Mani) 90 cm": {
    "id": "EM-FLAG-003",
    "price": 100,
    "stock": 50,
    "packs": [
      {
        "label": "1 string",
        "quantity": 1,
        "price": 100
      }
    ]
  },
  "Prayer Flag Small (Om Mani) 73 cm": {
    "id": "EM-FLAG-004",
    "price": 85,
    "stock": 50,
    "packs": [
      {
        "label": "1 string",
        "quantity": 1,
        "price": 85
      }
    ]
  },
  "Prayer Flag Mini (Om Mani) 55 cm": {
    "id": "EM-FLAG-005",
    "price": 75,
    "stock": 50,
    "packs": [
      {
        "label": "1 string",
        "quantity": 1,
        "price": 75
      }
    ]
  },
  "Prayer Flag Mini (Om Mani) 43 cm": {
    "id": "EM-FLAG-006",
    "price": 50,
    "stock": 50,
    "packs": [
      {
        "label": "1 string",
        "quantity": 1,
        "price": 50
      }
    ]
  },
  "Handwoven Tibetan Urdo (Yak Herder's Sling)": {
    "id": "EM-TRAD-001",
    "price": 1500,
    "stock": 10,
    "packs": []
  },
  "Tibetan Embroidered Varsity Jacket – Maroon": {
    "id": "EM-APPAREL-001",
    "price": 4999,
    "stock": 3,
    "packs": [
      {
        "label": "Size L",
        "quantity": 1,
        "price": 4999
      }
    ]
  },
  "Tibetan Script Varsity Jacket – Black & Maroon": {
    "id": "EM-APPAREL-002",
    "price": 4999,
    "stock": 3,
    "packs": [
      {
        "label": "Size L",
        "quantity": 1,
        "price": 4999
      }
    ]
  },
  "Tibetan Letters Varsity Jacket – Black": {
    "id": "EM-APPAREL-003",
    "price": 4999,
    "stock": 3,
    "packs": [
      {
        "label": "Size L",
        "quantity": 1,
        "price": 4999
      }
    ]
  },
  "Wind Horse Varsity Jacket – Black": {
    "id": "EM-APPAREL-004",
    "price": 4999,
    "stock": 3,
    "packs": [
      {
        "label": "Size L",
        "quantity": 1,
        "price": 4999
      }
    ]
  },
  "SORIG Loong Tea": {
    "id": "EM-MTK-001",
    "price": 279,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 279
      }
    ]
  },
  "SORIG Tripa Tea": {
    "id": "EM-MTK-002",
    "price": 264,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 264
      }
    ]
  },
  "SORIG Baekan Tea": {
    "id": "EM-MTK-003",
    "price": 264,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 264
      }
    ]
  },
  "SORIG Everyday Tea (Raab-Ga-Yangzin)": {
    "id": "EM-MTK-004",
    "price": 248,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 248
      }
    ]
  },
  "SORIG Everyday Tea Pouch (Raab-Ga-Yangzin)": {
    "id": "EM-MTK-005",
    "price": 186,
    "stock": 10,
    "packs": [
      {
        "label": "75 g",
        "quantity": 1,
        "price": 186
      }
    ]
  },
  "SORIG Garden Tea": {
    "id": "EM-MTK-006",
    "price": 155,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 155
      }
    ]
  },
  "SORIG Trak-Shey Herbal Tea": {
    "id": "EM-MTK-007",
    "price": 248,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 248
      }
    ]
  },
  "SORIG Za-Khu-Chee-Nyii Herbal Tea": {
    "id": "EM-MTK-008",
    "price": 248,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 248
      }
    ]
  },
  "SORIG Oogmi-Daewae Menja Herbal Tea": {
    "id": "EM-MTK-009",
    "price": 171,
    "stock": 10,
    "packs": [
      {
        "label": "15 g",
        "quantity": 1,
        "price": 171
      }
    ]
  },
  "SORIG Shang-Druum Menja Herbal Tea": {
    "id": "EM-MTK-010",
    "price": 147,
    "stock": 10,
    "packs": [
      {
        "label": "15 g",
        "quantity": 1,
        "price": 147
      }
    ]
  },
  "SORIG Druum-Bue Menja Herbal Tea": {
    "id": "EM-MTK-011",
    "price": 147,
    "stock": 10,
    "packs": [
      {
        "label": "15 g",
        "quantity": 1,
        "price": 147
      }
    ]
  },
  "SORIG Tobkay Menja Tonic Tea": {
    "id": "EM-MTK-012",
    "price": 178,
    "stock": 10,
    "packs": [
      {
        "label": "15 g",
        "quantity": 1,
        "price": 178
      }
    ]
  },
  "SORIG Nyiing-Nae Menja Herbal Tea": {
    "id": "EM-MTK-013",
    "price": 178,
    "stock": 10,
    "packs": [
      {
        "label": "15 g",
        "quantity": 1,
        "price": 178
      }
    ]
  },
  "SORIG Loong-Tsab Menja Women's Wellness Tea": {
    "id": "EM-MTK-014",
    "price": 186,
    "stock": 10,
    "packs": [
      {
        "label": "15 g",
        "quantity": 1,
        "price": 186
      }
    ]
  },
  "SORIG Miggi-Nuepa Sowae Menja Herbal Tea": {
    "id": "EM-MTK-015",
    "price": 147,
    "stock": 10,
    "packs": [
      {
        "label": "15 g",
        "quantity": 1,
        "price": 147
      }
    ]
  },
  "SORIG Gonae-Selwae Menja Herbal Tea": {
    "id": "EM-MTK-016",
    "price": 147,
    "stock": 10,
    "packs": [
      {
        "label": "15 g",
        "quantity": 1,
        "price": 147
      }
    ]
  },
  "SORIG Lung Soothing Tea": {
    "id": "EM-MTK-017",
    "price": 155,
    "stock": 10,
    "packs": [
      {
        "label": "15 g",
        "quantity": 1,
        "price": 155
      }
    ]
  },
  "SORIG Tobmeen Chudue Gyatso Health Tonic 60 g": {
    "id": "EM-MTK-018",
    "price": 837,
    "stock": 10,
    "packs": [
      {
        "label": "60 g",
        "quantity": 1,
        "price": 837
      }
    ]
  },
  "SORIG Tobmeen Chudue Gyatso Health Tonic (20 Sachets)": {
    "id": "EM-MTK-019",
    "price": 558,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 558
      }
    ]
  },
  "SORIG Health Candy": {
    "id": "EM-MTK-020",
    "price": 271,
    "stock": 10,
    "packs": [
      {
        "label": "100 g",
        "quantity": 1,
        "price": 271
      }
    ]
  },
  "SORIG Kaem-Meen Dashun": {
    "id": "EM-MTK-021",
    "price": 279,
    "stock": 10,
    "packs": [
      {
        "label": "60 g",
        "quantity": 1,
        "price": 279
      }
    ]
  },
  "SORIG Gaay-Pa Sowae Chulen": {
    "id": "EM-MTK-022",
    "price": 310,
    "stock": 10,
    "packs": [
      {
        "label": "60 g",
        "quantity": 1,
        "price": 310
      }
    ]
  },
  "SORIG Chongchen Chulen": {
    "id": "EM-MTK-023",
    "price": 295,
    "stock": 10,
    "packs": [
      {
        "label": "60 g",
        "quantity": 1,
        "price": 295
      }
    ]
  },
  "SORIG Lhophel Dhutse": {
    "id": "EM-MTK-024",
    "price": 233,
    "stock": 10,
    "packs": [
      {
        "label": "60 g",
        "quantity": 1,
        "price": 233
      }
    ]
  },
  "SORIG Tsephel Dhutse": {
    "id": "EM-MTK-025",
    "price": 233,
    "stock": 10,
    "packs": [
      {
        "label": "60 g",
        "quantity": 1,
        "price": 233
      }
    ]
  },
  "SORIG Kaem-Meen Shonnu": {
    "id": "EM-MTK-026",
    "price": 279,
    "stock": 10,
    "packs": [
      {
        "label": "60 g",
        "quantity": 1,
        "price": 279
      }
    ]
  },
  "SORIG Men-Chik": {
    "id": "EM-MTK-027",
    "price": 428,
    "stock": 10,
    "packs": [
      {
        "label": "75 g",
        "quantity": 1,
        "price": 428
      }
    ]
  },
  "SORIG Men-Nee": {
    "id": "EM-MTK-028",
    "price": 428,
    "stock": 10,
    "packs": [
      {
        "label": "75 g",
        "quantity": 1,
        "price": 428
      }
    ]
  },
  "SORIG Men-Soom": {
    "id": "EM-MTK-029",
    "price": 484,
    "stock": 10,
    "packs": [
      {
        "label": "75 g",
        "quantity": 1,
        "price": 484
      }
    ]
  },
  "SORIG Trulthang Herbal Decoction": {
    "id": "EM-MTK-030",
    "price": 149,
    "stock": 10,
    "packs": [
      {
        "label": "20 g",
        "quantity": 1,
        "price": 149
      }
    ]
  },
  "SORIG Dawoe Chinchud Chenmo": {
    "id": "EM-MTK-031",
    "price": 465,
    "stock": 10,
    "packs": [
      {
        "label": "37.2 g",
        "quantity": 1,
        "price": 465
      }
    ]
  },
  "SORIG Goyu Dhunjor": {
    "id": "EM-MTK-032",
    "price": 465,
    "stock": 10,
    "packs": [
      {
        "label": "34 g",
        "quantity": 1,
        "price": 465
      }
    ]
  },
  "SORIG Nyigug Sumthang": {
    "id": "EM-MTK-033",
    "price": 279,
    "stock": 10,
    "packs": [
      {
        "label": "20 g",
        "quantity": 1,
        "price": 279
      }
    ]
  },
  "SORIG Sangthel Nyernga": {
    "id": "EM-MTK-034",
    "price": 481,
    "stock": 10,
    "packs": [
      {
        "label": "34.21 g",
        "quantity": 1,
        "price": 481
      }
    ]
  },
  "SORIG Sheche Drukpa": {
    "id": "EM-MTK-035",
    "price": 341,
    "stock": 10,
    "packs": [
      {
        "label": "60 g",
        "quantity": 1,
        "price": 341
      }
    ]
  },
  "SORIG Laetrae Ngathang": {
    "id": "EM-MTK-036",
    "price": 465,
    "stock": 10,
    "packs": [
      {
        "label": "62 g",
        "quantity": 1,
        "price": 465
      }
    ]
  },
  "SORIG Men-Na Spice Blend": {
    "id": "EM-MTK-037",
    "price": 155,
    "stock": 10,
    "packs": [
      {
        "label": "100 g",
        "quantity": 1,
        "price": 155
      }
    ]
  },
  "SORIG Shasoe Paekar Beauty Cream (Tube)": {
    "id": "EM-MTK-038",
    "price": 202,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 202
      }
    ]
  },
  "SORIG Shasoe Paekar Beauty Cream (Jar)": {
    "id": "EM-MTK-039",
    "price": 202,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 202
      }
    ]
  },
  "SORIG Nyerdak Gamoli Anti-Wrinkle Cream (Tube)": {
    "id": "EM-MTK-040",
    "price": 217,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 217
      }
    ]
  },
  "SORIG Nyerdak Gamoli Anti-Wrinkle Cream (Jar)": {
    "id": "EM-MTK-041",
    "price": 233,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 233
      }
    ]
  },
  "SORIG Pak-Juk Da-Ma-Ra Herbal Cream (Jar)": {
    "id": "EM-MTK-042",
    "price": 202,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 202
      }
    ]
  },
  "SORIG Pak-Juk Da-Ma-Ra Herbal Cream (Tube)": {
    "id": "EM-MTK-043",
    "price": 186,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 186
      }
    ]
  },
  "SORIG Mah-Maen Rabjor Soothing Balm": {
    "id": "EM-MTK-044",
    "price": 109,
    "stock": 10,
    "packs": [
      {
        "label": "20 g",
        "quantity": 1,
        "price": 109
      }
    ]
  },
  "SORIG Juk-Nuum Agar Dhethear Massage Oil 75 ml": {
    "id": "EM-MTK-045",
    "price": 202,
    "stock": 10,
    "packs": [
      {
        "label": "75 ml",
        "quantity": 1,
        "price": 202
      }
    ]
  },
  "SORIG Juk-Nuum Agar Dhethear Massage Oil 150 ml": {
    "id": "EM-MTK-046",
    "price": 357,
    "stock": 10,
    "packs": [
      {
        "label": "150 ml",
        "quantity": 1,
        "price": 357
      }
    ]
  },
  "SORIG Jeepae Juknuum Baby Massage Oil": {
    "id": "EM-MTK-047",
    "price": 186,
    "stock": 10,
    "packs": [
      {
        "label": "100 ml",
        "quantity": 1,
        "price": 186
      }
    ]
  },
  "SORIG Juk-Nuum Tikta Dhethear Cooling Massage Oil": {
    "id": "EM-MTK-048",
    "price": 171,
    "stock": 10,
    "packs": [
      {
        "label": "75 ml",
        "quantity": 1,
        "price": 171
      }
    ]
  },
  "SORIG Druum-Bue Juknuum Massage Oil": {
    "id": "EM-MTK-049",
    "price": 217,
    "stock": 10,
    "packs": [
      {
        "label": "75 ml",
        "quantity": 1,
        "price": 217
      }
    ]
  },
  "SORIG Saab-Gaay Herbal Cream": {
    "id": "EM-MTK-050",
    "price": 202,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 202
      }
    ]
  },
  "SORIG Tsa-Juk Herbal Cream": {
    "id": "EM-MTK-051",
    "price": 217,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 217
      }
    ]
  },
  "SORIG Shang-Druum Jukpa Herbal Cream (Jar)": {
    "id": "EM-MTK-052",
    "price": 202,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 202
      }
    ]
  },
  "SORIG Shang-Druum Jukpa Herbal Cream (Tube)": {
    "id": "EM-MTK-053",
    "price": 186,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 186
      }
    ]
  },
  "SORIG Aru Balm": {
    "id": "EM-MTK-054",
    "price": 124,
    "stock": 10,
    "packs": [
      {
        "label": "15 g",
        "quantity": 1,
        "price": 124
      }
    ]
  },
  "SORIG Ta-Nuum Hair Oil": {
    "id": "EM-MTK-055",
    "price": 279,
    "stock": 10,
    "packs": [
      {
        "label": "100 ml",
        "quantity": 1,
        "price": 279
      }
    ]
  },
  "SORIG Ta-Chu Daegu Herbal Shampoo 100 ml": {
    "id": "EM-MTK-056",
    "price": 186,
    "stock": 10,
    "packs": [
      {
        "label": "100 ml",
        "quantity": 1,
        "price": 186
      }
    ]
  },
  "SORIG Ta-Chu Daegu Herbal Shampoo 300 ml": {
    "id": "EM-MTK-057",
    "price": 434,
    "stock": 10,
    "packs": [
      {
        "label": "300 ml",
        "quantity": 1,
        "price": 434
      }
    ]
  },
  "SORIG Anti-Dandruff Shampoo": {
    "id": "EM-MTK-058",
    "price": 434,
    "stock": 10,
    "packs": [
      {
        "label": "100 ml",
        "quantity": 1,
        "price": 434
      }
    ]
  },
  "SORIG Tajuk Dawoe Hair Cream (Jar)": {
    "id": "EM-MTK-059",
    "price": 217,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 217
      }
    ]
  },
  "SORIG Tajuk Dawoe Hair Cream (Tube)": {
    "id": "EM-MTK-060",
    "price": 202,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 202
      }
    ]
  },
  "SORIG Loong-Juk Body Lotion": {
    "id": "EM-MTK-061",
    "price": 171,
    "stock": 10,
    "packs": [
      {
        "label": "100 ml",
        "quantity": 1,
        "price": 171
      }
    ]
  },
  "SORIG Trie-Juk Cooling Body Lotion": {
    "id": "EM-MTK-062",
    "price": 171,
    "stock": 10,
    "packs": [
      {
        "label": "100 ml",
        "quantity": 1,
        "price": 171
      }
    ]
  },
  "SORIG Bae-Juk Warming Body Lotion": {
    "id": "EM-MTK-063",
    "price": 155,
    "stock": 10,
    "packs": [
      {
        "label": "100 ml",
        "quantity": 1,
        "price": 155
      }
    ]
  },
  "SORIG Daily Glow Cream (Jar)": {
    "id": "EM-MTK-064",
    "price": 163,
    "stock": 10,
    "packs": [
      {
        "label": "40 g",
        "quantity": 1,
        "price": 163
      }
    ]
  },
  "SORIG Daily Glow Cream (Tube)": {
    "id": "EM-MTK-065",
    "price": 132,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 132
      }
    ]
  },
  "SORIG Herbal Talc": {
    "id": "EM-MTK-066",
    "price": 140,
    "stock": 10,
    "packs": [
      {
        "label": "100 g",
        "quantity": 1,
        "price": 140
      }
    ]
  },
  "SORIG Zathi Duknuum Compress Oil": {
    "id": "EM-MTK-067",
    "price": 171,
    "stock": 10,
    "packs": [
      {
        "label": "100 ml",
        "quantity": 1,
        "price": 171
      }
    ]
  },
  "SORIG Zathi Dukpa Heat Compress": {
    "id": "EM-MTK-068",
    "price": 186,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 186
      }
    ]
  },
  "SORIG Dhutse Ngalum Herbal Bath": {
    "id": "EM-MTK-069",
    "price": 388,
    "stock": 10,
    "packs": [
      {
        "label": "250 g",
        "quantity": 1,
        "price": 388
      }
    ]
  },
  "SORIG Dhutse Ngaduk": {
    "id": "EM-MTK-070",
    "price": 233,
    "stock": 10,
    "packs": [
      {
        "label": "175 g",
        "quantity": 1,
        "price": 233
      }
    ]
  },
  "SORIG Daebhu Soom Duk": {
    "id": "EM-MTK-071",
    "price": 341,
    "stock": 10,
    "packs": [
      {
        "label": "200 g",
        "quantity": 1,
        "price": 341
      }
    ]
  },
  "SORIG Ching Lum Wet Dressing Pack": {
    "id": "EM-MTK-072",
    "price": 248,
    "stock": 10,
    "packs": [
      {
        "label": "180 g",
        "quantity": 1,
        "price": 248
      }
    ]
  },
  "SORIG So-Nuum Dhunpa Dental Soother": {
    "id": "EM-MTK-073",
    "price": 62,
    "stock": 10,
    "packs": [
      {
        "label": "5 ml",
        "quantity": 1,
        "price": 62
      }
    ]
  },
  "SORIG Oogchoe Ngapa Ear Drops": {
    "id": "EM-MTK-074",
    "price": 62,
    "stock": 10,
    "packs": [
      {
        "label": "8 ml",
        "quantity": 1,
        "price": 62
      }
    ]
  },
  "SORIG Tibetan Incense Big": {
    "id": "EM-MTK-075",
    "price": 163,
    "stock": 10,
    "packs": [
      {
        "label": "60 sticks",
        "quantity": 1,
        "price": 163
      }
    ]
  },
  "SORIG Tibetan Incense Medium": {
    "id": "EM-MTK-076",
    "price": 115,
    "stock": 10,
    "packs": [
      {
        "label": "40 sticks",
        "quantity": 1,
        "price": 115
      }
    ]
  },
  "SORIG Tibetan Incense Small": {
    "id": "EM-MTK-077",
    "price": 59,
    "stock": 10,
    "packs": [
      {
        "label": "20 sticks",
        "quantity": 1,
        "price": 59
      }
    ]
  },
  "Tibetan SORIG Stress Incense": {
    "id": "EM-MTK-078",
    "price": 124,
    "stock": 10,
    "packs": [
      {
        "label": "24 sticks",
        "quantity": 1,
        "price": 124
      }
    ]
  },
  "SORIG Mensang Incense Powder": {
    "id": "EM-MTK-079",
    "price": 65,
    "stock": 10,
    "packs": [
      {
        "label": "60 g",
        "quantity": 1,
        "price": 65
      }
    ]
  },
  "SORIG Lhasa Incense Big": {
    "id": "EM-MTK-080",
    "price": 186,
    "stock": 10,
    "packs": [
      {
        "label": "50 sticks",
        "quantity": 1,
        "price": 186
      }
    ]
  },
  "SORIG Lhasa Incense Small": {
    "id": "EM-MTK-081",
    "price": 109,
    "stock": 10,
    "packs": [
      {
        "label": "50 sticks",
        "quantity": 1,
        "price": 109
      }
    ]
  },
  "SORIG Menchey Ritual Powder": {
    "id": "EM-MTK-082",
    "price": 109,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 109
      }
    ]
  },
  "SORIG Bumzae Nyernga Ritual Powder": {
    "id": "EM-MTK-083",
    "price": 147,
    "stock": 10,
    "packs": [
      {
        "label": "100 g",
        "quantity": 1,
        "price": 147
      }
    ]
  },
  "SORIG Sango Druk Smoke Offering Powder": {
    "id": "EM-MTK-084",
    "price": 202,
    "stock": 10,
    "packs": [
      {
        "label": "100 g",
        "quantity": 1,
        "price": 202
      }
    ]
  },
  "SORIG Lumen (Luzae Chema) Naga Offering Powder": {
    "id": "EM-MTK-085",
    "price": 118,
    "stock": 10,
    "packs": [
      {
        "label": "50 g",
        "quantity": 1,
        "price": 118
      }
    ]
  },
  "Men-Tsee-Khang Pill Crusher": {
    "id": "EM-MTK-086",
    "price": 341,
    "stock": 10,
    "packs": [
      {
        "label": "1 piece",
        "quantity": 1,
        "price": 341
      }
    ]
  },
  "Men-Tsee-Khang Diffuser": {
    "id": "EM-MTK-087",
    "price": 248,
    "stock": 10,
    "packs": [
      {
        "label": "1 piece",
        "quantity": 1,
        "price": 248
      }
    ]
  },
  "Men-Tsee-Khang Copper Cupping Set (Big)": {
    "id": "EM-MTK-088",
    "price": 1705,
    "stock": 10,
    "packs": [
      {
        "label": "1 set",
        "quantity": 1,
        "price": 1705
      }
    ]
  },
  "Men-Tsee-Khang Copper Cupping Set (Small)": {
    "id": "EM-MTK-089",
    "price": 1550,
    "stock": 10,
    "packs": [
      {
        "label": "1 set",
        "quantity": 1,
        "price": 1550
      }
    ]
  }
};

// Old names that may still be saved in customers' carts
const ALIASES = {
  "Himalayan Aroma Incense": "Himalayan Aroma 10 Inch"
};

const ALLOWED_ORIGINS = [
  "https://www.everstmart.in",
  "https://everstmart.in"
];

class ClientError extends Error {}

function bad(message) {
  return new ClientError(message);
}

function cleanText(value, max) {
  return String(value == null ? "" : value)
    .replace(/[\u0000-\u001f]/g, " ")
    .trim()
    .slice(0, max);
}

function priceCart(items) {
  if (!Array.isArray(items) || items.length === 0 || items.length > 30) {
    throw bad("Your cart is empty or invalid. Please refresh the page and try again.");
  }

  let total = 0;
  const piecesByProduct = {};
  const lines = [];

  for (const raw of items) {
    const name = cleanText(raw && raw.name, 120);
    const product = CATALOG[ALIASES[name] || name];

    if (!product) {
      throw bad(
        "\"" + name + "\" is no longer available. Please remove it from your cart and add it again."
      );
    }

    const quantity = Number(raw.quantity);

    if (!Number.isInteger(quantity) || quantity < 1 || quantity > 100) {
      throw bad("Invalid quantity for " + (ALIASES[name] || name) + ".");
    }

    let pack = null;
    const requestedPack = cleanText(raw.pack, 60);

    if (product.packs.length === 0) {
      pack = { label: null, quantity: 1, price: product.price };
    } else if (requestedPack && requestedPack !== "single") {
      pack = product.packs.find(function (p) {
        return p.label === requestedPack;
      });
    } else {
      pack = product.packs.find(function (p) {
        return p.quantity === 1;
      });
    }

    if (!pack) {
      throw bad(
        "Pack option not available for " + (ALIASES[name] || name) +
        ". Please remove it from your cart and add it again."
      );
    }

    piecesByProduct[product.id] =
      (piecesByProduct[product.id] || 0) + pack.quantity * quantity;

    if (piecesByProduct[product.id] > product.stock) {
      throw bad("Only " + product.stock + " available for " + (ALIASES[name] || name) + ".");
    }

    total += pack.price * quantity;

    lines.push(
      (ALIASES[name] || name) +
      (pack.label ? " (" + pack.label + ")" : "") +
      " x" + quantity
    );
  }

  return { total: total, lines: lines };
}

function checkCustomer(customer) {
  const c = customer || {};

  const name = cleanText(c.name, 100);
  const phone = cleanText(c.phone, 15);
  const address = cleanText(c.address, 250);
  const pin = cleanText(c.pin, 6);

  if (!name) throw bad("Please enter your full name.");
  if (!/^[6-9]\d{9}$/.test(phone)) throw bad("Please enter a valid 10-digit Indian mobile number.");
  if (!address) throw bad("Please enter your delivery address.");
  if (!/^[1-9][0-9]{5}$/.test(pin)) throw bad("Please enter a valid 6-digit Indian PIN code.");

  return { name: name, phone: phone, address: address, pin: pin };
}

export default async function handler(req, res) {

  const origin = req.headers.origin;

  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body || {};

    const {
      action,
      amount,
      items,
      customer,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = body;

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return res.status(500).json({
        error: "Razorpay keys are not configured"
      });
    }

    // CREATE RAZORPAY ORDER
    if (action === "create") {

      // The server works out the price itself from the item list.
      const priced = priceCart(items);
      const buyer = checkCustomer(customer);

      // If the page showed a different total, the prices have changed
      // (or someone edited the page). Never charge a different amount silently.
      if (Number(amount) !== priced.total) {
        return res.status(409).json({
          error: "Prices have been updated. Please refresh the page and try again."
        });
      }

      const auth = Buffer.from(keyId + ":" + keySecret).toString("base64");

      // These notes are saved with the order and are visible in the
      // Razorpay Dashboard, so every paid order has the delivery details.
      const notes = {
        customer_name: buyer.name,
        phone: buyer.phone,
        address: buyer.address,
        pin: buyer.pin,
        items: priced.lines.join(", ").slice(0, 250)
      };

      const response = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Authorization": "Basic " + auth,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: Math.round(priced.total * 100),
          currency: "INR",
          receipt: "EM-" + Date.now(),
          notes: notes
        })
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Razorpay order error", data);
        return res.status(response.status).json(data);
      }

      console.log("ORDER CREATED", data.id, priced.total, JSON.stringify(notes));

      return res.status(200).json({
        key_id: keyId,
        order_id: data.id,
        amount: data.amount,
        currency: data.currency
      });
    }

    // VERIFY PAYMENT
    if (action === "verify") {
      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({
          error: "Missing payment details"
        });
      }

      const generatedSignature = crypto
        .createHmac("sha256", keySecret)
        .update(razorpay_order_id + "|" + razorpay_payment_id)
        .digest("hex");

      const a = Buffer.from(generatedSignature);
      const b = Buffer.from(String(razorpay_signature));

      if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
        return res.status(400).json({
          success: false,
          error: "Payment verification failed"
        });
      }

      console.log("PAYMENT VERIFIED", razorpay_order_id, razorpay_payment_id);

      return res.status(200).json({
        success: true,
        payment_id: razorpay_payment_id,
        order_id: razorpay_order_id
      });
    }

    return res.status(400).json({
      error: "Invalid action"
    });

  } catch (error) {

    if (error instanceof ClientError) {
      return res.status(400).json({ error: error.message });
    }

    console.error(error);

    return res.status(500).json({
      error: "Server error"
    });
  }
}
