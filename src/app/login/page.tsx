import React from "react";
import Link from "next/link";
import Image from "next/image";
import FormLogin from "@/components/FormLogin";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

const login = async () => {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <Image src="/Logo.svg" width={140} height={40} alt="Logo"></Image>
      <div className="lg:w-1/4 flex flex-col gap-2 border-[1px] border-[#e6e6e6] px-12 py-8 rounded-2xl">
        <h3 className="text-2xl font-semibold">Boas vindas</h3>
        <p className="text-[#6B7280] text-[14px]">
          Faça seu login com email e senha
        </p>
        <FormLogin />
        <p className="text-center text-[#6B7280] text-[10px]">
          Ao continuar, você concorda com nossos Termos de Uso e nossa Política
          de Privacidade.
        </p>
      </div>
      <p className="text-[#6B7280] text-[14px]">
        Não possui cadastro?{" "}
        <Link className="font-bold hover:underline" href={"/register"}>
          Registre-se
        </Link>
      </p>
    </div>
  );
};

export default login;
