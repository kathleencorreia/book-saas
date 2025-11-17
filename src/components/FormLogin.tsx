"use client";

import Form from "next/form";
import React, { useActionState, useEffect } from "react";
import Button from "@/components/Button";
import loginAction from "@/app/login/loginAction";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";

const FormLogin = () => {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.success && state?.redirectTo) {
      router.push(state.redirectTo);
    }
  }, [state, router]);

  return (
    <>
      {state?.success === false && (
        <div className="bg-red-200 rounded-md p-2" role="alert">
          <p className="font-bold text-sm text-red-700">Erro!</p>
          <p className="text-red-700 text-sm">{state?.message}</p>
        </div>
      )}
      <Form action={formAction}>
        <div className="flex flex-col mt-5 gap-2">
          <label htmlFor="" className="font-semibold text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="eu@exemplo.com.br"
            className="border border-[#ccc] p-2 text-sm rounded-md"
          />
        </div>{" "}
        <div className="flex flex-col mt-5 gap-2">
          <label htmlFor="" className="font-semibold text-sm">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="passaword"
            placeholder="*******"
            className="border border-[#ccc] p-2 text-sm rounded-md"
          />
        </div>
        <Button
          disabled={isPending}
          className="bg-black text-white hover:bg-[#1f1f1f] mt-4"
        >
          Login
        </Button>
      </Form>

      <p className="text-center my-4 text-[12px] text-[#6B7280]">Ou faça login com </p>
      <button
        onClick={() => signIn("google")}
        className="w-full flex justify-center items-center gap-4 bg-gray-300 p-2 rounded-md cursor-pointer mb-5 text-sm"
      >
        <Image src="/google.svg" width={30} height={30} alt="icon google" />
        <p>Login com Google</p>
      </button>
    </>
  );
};

export default FormLogin;
