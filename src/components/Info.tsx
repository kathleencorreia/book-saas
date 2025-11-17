import React from "react";
import Button from "./Button";

const Info = () => {
  return (
    <section className="w-full flex flex-col px-8 md:px-24 justify-center items-center gap-8 md:gap-12 mt-30">
      <h1 className="text-black font-bold text-4xl md:text-6xl text-center">
        Pronto Para Mudar Sua Vida?
      </h1>
      <p className="md:w-[40%] text-center text-[#6B7280] text-lg md:text-xl">
        Faça como milhares de outras pessoas. Assine nossos produtos e tenha
        garantido seus estudos
      </p>
      <Button className="w-[40%] bg-black text-white hover:bg-[#1f1f1f]">
        Assine Agora
      </Button>
      <p className="text-[#6B7280] text-[10px]">
        Comece sua assinatura agora mesmo. Cancele quando quiser.{" "}
      </p>
    </section>
  );
};

export default Info;
