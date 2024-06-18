import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

export const paymentHandler = async (req, res) => {
  const items = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: (item.totalPrice / item.count) * 100,
          },
          quantity: item.count,
        };
      }),
      success_url: `https://main--aashashop.netlify.app/success`,
      cancel_url: `https://main--aashashop.netlify.app/cancel`,
    });
    res.send({ url: session.url });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
