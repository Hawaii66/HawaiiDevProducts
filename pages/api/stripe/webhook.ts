import { request } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2022-11-15",
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  if (method !== "POST") {
    res.status(400).end();
    return;
  }

  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig?.toString() || "",
      webhookSecret?.toString() || ""
    );
  } catch (err: any) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      break;
  }

  res.status(200).end();
}
