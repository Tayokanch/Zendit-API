import dotenv from 'dotenv';
dotenv.config();

export const handleWebhook = async (req, res) => {
  try {
    const signatureHeader = req.headers["authorization"];
    const secret = process.env.WEBHOOK_SECRET;

    // Validate the signature
if (!signatureHeader || !signatureHeader.startsWith("Bearer ")) {
  console.warn(" Missing Authorization header");
  return res.status(403).json({ error: "Invalid Authorization format" });
}
const signature = signatureHeader.split(" ")[1]; 

if (signature !== secret) {
  console.warn(" Invalid webhook signature token");
  return res.status(403).json({ error: "Invalid webhook signature" });
}
    // Acknowledge the webhook
    res.status(200).send({response:"Webhook received" , data: req.body});
  } catch (err) {
    console.error("Error handling webhook:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
