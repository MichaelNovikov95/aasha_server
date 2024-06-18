import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

export const paymentHandler = async (req, res) => {
  const { items } = req.body;
  console.log(items);
  try {
    // const session = await stripe.checkout.session.create({
    // payment_method_types: ["card"],
    // mode: "payment",
    // line_items: items,
    // success_url: `${process.env.SERVER_URL}/success`,
    // cancel_url: `${process.env.SERVER_URL}/cancel`,
    // });
    // res.send({ url: session.url });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
