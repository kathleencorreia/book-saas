import Stripe from "stripe";

type Props = {
  email: string;
};
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");

const fetchSubscriptionByEmail = async ({ email }: Props) => {
  const customers = await stripe.customers.list({
    limit: 1,
    email: email,
    expand: ["data.subscriptions"],
  });

  if (customers.data.length === 0) {
    return null;
  }

  const customer = customers.data[0];

  if (customer.subscriptions?.data.length === 0) {
    return null;
  }

  const subscription = customer.subscriptions?.data[0];
  return subscription;
};
export default fetchSubscriptionByEmail;

export function translateSubscriptionStatus(status: string) {
  switch (status) {
    case "active":
      return "Ativo";
    case "canceled":
      return "cancelado";
    default:
      return status;
  }
}

export function translateSubscriptionInterval(interval: string, count: number) {
  switch (interval) {
    case "month":
      return count === 1 ? "mês" : "meses";
  }
}
