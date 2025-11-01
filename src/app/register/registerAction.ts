"use server";

import { redirect } from "next/navigation";
import db from "../../../lib/db";
import { hashSync } from "bcrypt-ts";

export default async function registerAction(
  _prevState: unknown,
  formData: FormData
) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  console.log("teste");
  console.log(data);

  if (!data.email || !data.name || !data.password) {
    return {
      message: "Preencha todos os campos",
      success: false,
    };
  }

  // existe usuário
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (user) {
   return {
      message: "Este usuário já existe",
      success: false,
    };
  }

  //   se não existir, cria o usuário

  await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password),
    },
  });

  return redirect('/')
}
