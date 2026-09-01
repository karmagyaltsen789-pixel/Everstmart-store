export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      action,
      amount,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = req.body;

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return res.status(500).json({
        error: "Razorpay keys are not configured"
      });
    }

    // CREATE RAZORPAY ORDER
    if (action === "create") {
      if (!amount || amount <= 0) {
        return res.status(400).json({
          error: "Invalid amount"
        });
      }

      const auth = Buffer.from(
        `${keyId}:${keySecret}`
      ).toString("base64");

      const response = await fetch(
        "https://api.razorpay.com/v1/orders",
        {
          method: "POST",
          headers: {
            "Authorization": `Basic ${auth}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            amount: Math.round(amount * 100),
            currency: "INR",
            receipt: "EM-" + Date.now()
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json(data);
      }

      return res.status(200).json({
  key_id: keyId,
  order_id: data.id,
  amount: data.amount,
  currency: data.currency
});
    }

    // VERIFY PAYMENT
    if (action === "verify") {
      if (
        !razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature
      ) {
        return res.status(400).json({
          error: "Missing payment details"
        });
      }

      const crypto = await import("crypto");

      const generatedSignature =
        crypto
          .createHmac("sha256", keySecret)
          .update(
            razorpay_order_id +
            "|" +
            razorpay_payment_id
          )
          .digest("hex");

      if (generatedSignature !== razorpay_signature) {
        return res.status(400).json({
          success: false,
          error: "Payment verification failed"
        });
      }

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
    console.error(error);

    return res.status(500).json({
      error: "Server error"
    });
  }
}
