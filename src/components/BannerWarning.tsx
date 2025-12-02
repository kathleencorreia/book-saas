import Card from "@/components/Card";
import Image from "next/image";
import React from "react";

type Plan = {
  title: string;
  price: string;
  items: string[];
  priceId?: string;
};

const plans: Plan[] = [
  {
    title: "Básico",
    price: "9,99",
    items: [
      "1 ebook a cada 2 meses",
      "Acesso limitado",
      "Suporte por E-mail",
      "Upgrade a qualquer momento",
    ],
    priceId: process.env.PRICE_BASIC,
  },
  {
    title: "Premium",
    price: "29,99",
    items: [
      "1 ebook por mês",
      "Curadoria especial",
      "Acesso ilimitado",
      "Cancele a qualquer momento",
    ],
    priceId: process.env.PRICE_PREMIUM,
  },
];

const BannerWarning = () => {
  return (
    <div className="flex flex-col">
      <p className="bg-[#FDE7A0] text-[#8F641E] flex gap-2 items-center p-5 border-l-3 border-[#FFC744]">
        <Image
          src="/warning.svg"
          width={20}
          height={20}
          alt="icon warning"
        ></Image>
        <span>
          Você não possui nenhuma assinatura ativa. Que tal assinar agora?
        </span>
      </p>
      <div className="flex flex-col md:flex-row mt-10 gap-6">
        {" "}
        {plans.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            value={plan.price}
            items={plan.items}
            priceId={plan.priceId ?? ""}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerWarning;
