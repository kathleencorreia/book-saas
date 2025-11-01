"use server";

import { redirect } from "next/navigation";
import { signOut } from "../../../auth";

export default async function logoutAction() {
  await signOut();
  redirect("/login");
}
