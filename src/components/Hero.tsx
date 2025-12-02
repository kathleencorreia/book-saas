import React from "react";
import PaymentButton from "./PaymentButton";
import { auth } from "../../auth";
import fetchSubscriptionByEmail from "../../lib/stripe";
import Button from "./Button";
import Link from "next/link";

const Hero = async () => {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  const subscription = await fetchSubscriptionByEmail({ email: userEmail });
  return (
    <section className="w-full px-8 md:px-24 py-20 flex flex-col bg-[url('/Background.png')] justify-center items-center gap-8">
      <div className="flex flex-col items-center gap-12 ">
        <h1 className="text-black font-bold text-4xl md:text-6xl text-center">
          Simplifique Seus Estudos{" "}
        </h1>
        <p className="md:w-[60%] text-center text-[#6B7280] text-lg md:text-xl">
          Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e
          receba um ebook novo de programação.
        </p>
      </div>
      {!subscription && (
        <>
          <div className="mt-20 w-full flex flex-col md:flex-row items-center md:justify-center gap-2 md:gap-0">
            <input
              type="text"
              className="w-full md:w-[279px] border border-[#ccc] py-2 px-2 rounded-md"
              placeholder="Coloque seu Email"
            />
            <Link href={"#price"}  ><Button className="bg-black text-white ">Escolha um plano</Button></Link>
          </div>
          <p className="text-[#6B7280] text-[10px]">
            Comece sua assinatura agora mesmo. Cancele quando quiser.
          </p>
        </>
      )}
    </section>
  );
};

export default Hero;
