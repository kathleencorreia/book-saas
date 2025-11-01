"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";

const Header = ({
  session,
}: {
  session?: { user?: { name?: string | null } } | null;
}) => {
  const [open, setOpen] = useState(false);
  const isLoggedIn = !!session?.user;

  return (
    <header className="w-full px-60 py-6 flex ">
      <nav className="w-full flex justify-between items-center ">
        <div>
          <Image src="/Logo.svg" width={130} height={40} alt="Logo"></Image>
        </div>
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex gap-7">
            <Link href={"#functionality"}>
              <li>Funcionamento</li>
            </Link>
            <Link href={"#price"}>
              <li>Preço</li>
            </Link>
          </ul>{" "}
          <div></div>
          {isLoggedIn ? (
            <Link href={"/dashboard"}>
              <Button
                className="bg-white text-[#000] border-[#ccc] transition duration-300 hover:scale-105 hover:border-black"
                type="button"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href={"/login"}>
              <Button
                className="bg-white text-[#000] border-[#ccc] transition duration-300 hover:scale-105 hover:border-black"
                type="button"
              >
                Login
              </Button>
            </Link>
          )}
        </div>
        <div onClick={() => setOpen(!open)} className="md:hidden lg:hidden">
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

          {open && (
            <div className=" flex flex-col gap-7 fixed top-[90px] left-12">
              <ul className="flex flex-col gap-7">
                <li>Funcionamento</li>
                <li>Preço</li>
              </ul>{" "}
              <Button
                className="bg-white text-[#000] border-[#ccc] transition duration-200 hover:scale-105"
                type="button"
              >
                Login
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
