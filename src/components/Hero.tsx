import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="w-full px-24 py-20 flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col items-center gap-12 ">
        <h1 className="text-[#000] font-bold text-6xl text-center">
          Simplifique Seus Estudos{" "}
        </h1>
        <p className="w-[60%] text-center text-[#6B7280] text-xl">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e
          receba um ebook novo de programação.
        </p>
      </div>
      <div className="mt-20">
        <input type="text" className="w-[279px] border border-[#ccc] py-2 px-2 rounded-md" placeholder="Coloque seu Email"/>
        <Button className="text-[#fff] bg-black hover:bg-[#1f1f1f] ">Assine Agora</Button>
      </div>
      <p className="text-[#6B7280] text-[10px]">
        Comece sua assinatura agora mesmo. Cancele quando quiser.
      </p>
    </section>
  );
};

export default Hero;
