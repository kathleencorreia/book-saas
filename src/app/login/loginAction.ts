"use server";

import { signIn } from "../../../auth";

export default async function loginAction(
  prevState: unknown,
  formData: FormData
) {
  try {
    const result = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    if (result?.error) {
      return { success: false, message: "Dados de login incorretos."};
    }
    return { success: true,  redirectTo: "/dashboard" };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return { success: false, message: "Ops! algum erro aconteceu." };
  }
}
