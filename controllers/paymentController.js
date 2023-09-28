import Stripe from "stripe";
const key = process.env.STRIPE_API_KEY;
const stripe = new Stripe(process.env.STRIPE_API_KEY);

import { StatusCodes } from "http-status-codes";

export const processPayment = async (req, res, next) => {
  const { cartItems } = req.body;

  const lineItems = cartItems.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url:
      "http://localhost:5173/profile/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: "http://localhost:5173/profile/cancel",
  });
  res.status(StatusCodes.OK).json({ id: session.id });
};

export const sendstripeapikey = async (req, res, next) => {
  const key = process.env.STRIPE_PUBLISHABLE_KEY;
  console.log(key);
  res.status(StatusCodes.OK).json({
    stripeApiKey: key,
  });
};

export const getPaymentInfo = async (req, res, next) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  res
    .status(StatusCodes.OK)
    .json({ id: session.payment_intent, status: session.payment_status });
};
