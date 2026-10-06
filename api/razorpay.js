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
