"use server";

import Stripe from "stripe";
import { headers } from "next/headers";

export async function fetchClientSecret(priceId: string): Promise<string> {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("Missing STRIPE_SECRET_KEY");
  }

  if (!priceId) {
    throw new Error("Missing STRIPE_PRICE_ID");
  }

  const stripe = new Stripe(secretKey);

  const origin = (await headers()).get("origin") ?? "";

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],

    mode: "subscription",
    return_url: `${origin}/payment-confirmation?session_id={CHECKOUT_SESSION_ID}`,

  });

  if (!session.client_secret) {
    throw new Error("Stripe did not return a client secret");
  }

  return session.client_secret;
}
