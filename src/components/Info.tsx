import React from "react";
import Button from "./Button";

const Info = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-12 mt-30">
      <h1 className="text-[#000] font-bold text-6xl text-center">
        Pronto Para Mudar Sua Vida?
      </h1>
      <p className="w-[40%] text-center text-[#6B7280] text-xl">
        Faça como milhares de outras pessoas. Assine nossos produtos e tenha
        garantido seus estudos
      </p>
      <Button className="w-[20%] bg-black text-[#fff] hover:bg-[#1f1f1f]">
        Assine Agora
      </Button>
      <p className="text-[#6B7280] text-[10px]">
        Comece sua assinatura agora mesmo. Cancele quando quiser.{" "}
      </p>
    </section>
  );
};

export default Info;
