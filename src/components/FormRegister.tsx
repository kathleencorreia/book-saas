"use client";

import Button from "@/components/Button";
import React from "react";
import Form from "next/form";
import registerAction from "../app/register/registerAction";
import { useActionState } from "react";

const FormRegister = () => {
  const [state, formAction, isPending] = useActionState(registerAction, null); //hook usado pra mostrar o erro

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
            Nome
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu Nome"
            className="border-[1px] border-[#ccc] p-2 text-sm rounded-md"
          />
        </div>{" "}
        <div className="flex flex-col mt-5 gap-2">
          <label htmlFor="" className="font-semibold text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="eu@exemplo.com.br"
            className="border-[1px] border-[#ccc] p-2 text-sm rounded-md"
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
            className="border-[1px] border-[#ccc] p-2 text-sm rounded-md"
          />
        </div>
        <Button disabled={isPending} className="bg-black text-[#fff] hover:bg-[#1f1f1f] my-4">
          Registrar
        </Button>
      </Form>
    </>
  );
};

export default FormRegister;
