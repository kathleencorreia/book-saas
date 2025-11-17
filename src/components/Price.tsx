import React from "react";
import Card from "./Card";

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

const Price = () => {
  return (
    <section id="price" className="flex flex-col px-8 md:px-24 scroll-mt-20 items-center justify-center mt-30 gap-12">
      <h1 className="text-black font-bold text-4xl md:text-6xl text-center">
        Preço Simples e Transparente
      </h1>
      <p className="md:w-[60%] text-center text-[#6B7280] text-lg md:text-xl">
        Pra que inúmeros planos quando nós sabemos exatamente o que é melhor
        para você? Assine os nosso planos mensais e garanta mensalmente um ebook
        novo de programação. E por menos de um café por dia.
      </p>
      <div className="flex flex-col md:flex-row gap-18">
        {plans.map((plan, index) => (
          <Card
            key={index}
            title={plan.title}
            value={plan.price}
            items={plan.items}
          />
        ))}
      </div>
    </section>
  );
};

export default Price;
