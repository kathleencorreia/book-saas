"use client";
import logoutAction from "@/app/(logout)/logoutAction";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MenuMobileDashboard = ({ userName }: { userName: string }) => {
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <Image
            src="/closeIcon.svg"
            width={24}
            height={12}
            alt="Icon close menu"
          />
        ) : (
          <Image src="/menu.svg" width={24} height={12} alt="Icon menu" />
        )}
      </button>

      {open && (
        <div className="md:hidden w-full h-full top-[85px] bg-white absolute left-0 flex gap-4 flex-col items-center">
          <ul className="flex items-center flex-col gap-4 mt-5">
            <Link href={"/dashboard/book"}>
              <li className="hover:underline" onClick={()=>setOpen(false)}>Livro do mês</li>
            </Link>
            <Link href={"/dashboard/signature"}>
              <li className="hover:underline" onClick={()=>setOpen(false)}>Assinatura</li>
            </Link>
          </ul>
          <div className="flex flex-col items-start mt-5">
            <div className="flex items-start gap-2 ">
              <button onClick={() => setOpenUser(!openUser)}>
                <Image src="/user.svg" width={24} height={24} alt="Usuário" />
              </button>
              <p className=" w-full text-sm cursor-pointer hover:bg-amber-100">
                {userName}
              </p>
            </div>
            <Form
              action={logoutAction}
              className="absolute w-full flex justify-around left-2 top-32"
            >
              <button
                type="submit"
                className="text-center px-3 py-2 w-full hover:bg-gray-50 cursor-pointer text-sm "
              >
                Logout
              </button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuMobileDashboard;
