import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChechoutReturnPage = async () => {
  return (
    <section  className="flex w-full h-full justify-center items-center  mt-22">
      <div className="flex flex-col md:border border-[#e6e6e6] bg-white rounded-2xl px-12 py-8 items-center  gap-4">
        <Image src="/bag.svg" width={64} height={64} alt="icon bag" />
        <h4 className="text-lg font-semibold" >Assinatura confirmada </h4>
        <p className="text-sm text-[#6b7280] mb-4 text-center">Obrigado por se juntar a nossa comunidade LivroSaaS</p>
        <p className="text-sm text-center">
          Sua assinatura foi processada com sucesso e sua conta está ativa
          agora.{" "}
        </p>
        <p className="text-sm text-center">Agora é só aproveitar nosso conteúdo. </p>

        <Link href={"/dashboard"}><Button className="bg-black text-white mt-6 hover:bg-[#1f1f1f]">Ir para Dashboard</Button></Link>
      </div>
    </section>
  );
};

export default ChechoutReturnPage;
