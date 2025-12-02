import Image from "next/image";
import React from "react";
import PaymentButton from "./PaymentButton";
import fetchSubscriptionByEmail from "../../lib/stripe";
import { auth } from "../../auth";

type Props = {
  title: string;
  value: string;
  items: string[];
   priceId: string; 
};

const Card =async ({ items, title, value, priceId }: Props) => {
const session = await auth();
  const userEmail = session?.user?.email as string;
  const subscription = await fetchSubscriptionByEmail({ email: userEmail });

  return (
    <div className="flex flex-col gap-4 border border-[#e6e6e6] bg-white px-12 py-8 rounded-2xl">
      <h2 className="text-2xl font-semibold text-center">Plano {title}</h2>
      <p className="text-sm text-[#6b7280]">
        {" "}
        Tudo que você precisa para seus estudos
      </p>
      <p className="font-bold text-4xl">
        R$ {value}{" "}
        <span className="font-normal text-[#6b7280] text-lg">/mês</span>
      </p>
      <ul className="flex flex-col gap-4 mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-4 text-[#6b7280]">
            <Image
              src="/checked.svg"
              width={13}
              height={10}
              alt="Ícone check"
            />
            {item}
          </li>
        ))}
      </ul>
      {!subscription && ( <PaymentButton priceId={priceId} >Assine Agora!</PaymentButton>) }
     
    </div>
  );
};

export default Card;
