"use client";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { fetchClientSecret } from "../app/actions/stripe";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";

const stripePromise = loadStripe(
  process.env.STRIPE_PUBLISHABLE_KEY!
);

type Props = {
  children: React.ReactNode;
  priceId: string;
};

export default function Checkout({ children, priceId }: Props) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div id="checkout">
      <Button
        onClick={() => setOpenModal(true)}
        className="text-white w-full bg-black hover:bg-[#1f1f1f]"
      >
        {" "}
        Assine agora
      </Button>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{
            fetchClientSecret: () => fetchClientSecret(priceId),
          }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </Modal>
    </div>
  );
}
