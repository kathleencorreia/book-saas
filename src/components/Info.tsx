import React from "react";
import PaymentButton from "./PaymentButton";
import { auth } from "../../auth";
import fetchSubscriptionByEmail from "../../lib/stripe";

const Info = async () => {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  const subscription = await fetchSubscriptionByEmail({ email: userEmail });
  if (subscription) return null;

  return (
    <section className="w-full flex flex-col px-8 md:px-24 justify-center items-center gap-8 md:gap-12 mt-30">
      <h1 className="text-black font-bold text-4xl md:text-6xl text-center">
        Pronto Para Mudar Sua Vida?
      </h1>
      <p className="md:w-[40%] text-center text-[#6B7280] text-lg md:text-xl">
        Faça como milhares de outras pessoas. Assine nossos produtos e tenha
        garantido seus estudos
      </p>

      <PaymentButton>Assine Agora!</PaymentButton>
      <p className="text-[#6B7280] text-[10px]">
        Comece sua assinatura agora mesmo. Cancele quando quiser.{" "}
      </p>
    </section>
  );
};

export default Info;
