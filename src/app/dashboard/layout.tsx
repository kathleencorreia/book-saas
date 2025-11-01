import React from "react";
import HeaderDashboard from '../../components/HeaderDashboard'
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const userName = session?.user?.name

  if(!session){
    redirect('/')
  }

  return (
    <>
    <HeaderDashboard userName={userName ?? 'Usuário'}/>
      <div>{children}</div>
    </>
  );
}
