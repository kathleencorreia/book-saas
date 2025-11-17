import Card from "@/components/Card";
import Image from "next/image";
import React from "react";

type Plan = {
  title: string;
  price: string;
  items: string[];
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
  },
  {
    title: "Premium",
    price: "29,99",
    items: [
      "1 ebook por meses",
      "Curadoria especial",
      "Acesso ilimitado",
      "Cancele a qualquer momento",
    ],
  },
];

const page = () => {
  return (
    <div className="flex flex-col px-52 py-12">
      <h2 className="text-[#000] font-bold text-3xl mb-5">Assinatura</h2>
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
      <div className="flex mt-10 gap-6">
        {" "}
        {plans.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            value={plan.price}
            items={plan.items}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
