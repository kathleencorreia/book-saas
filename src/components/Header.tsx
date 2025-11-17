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
    <header
      className="w-full px-8 md:px-60 py-6 flex items-center 
   justify-between "
    >
      <div>
        <Image src="/Logo.svg" width={130} height={40} alt="Logo"></Image>
      </div>
      <nav className=" flex justify-between items-center ">
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
                className="bg-white text-black border-[#ccc] transition duration-300 hover:scale-105 hover:border-black"
                type="button"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href={"/login"}>
              <Button
                className="bg-white text-black border-[#ccc] transition duration-300 hover:scale-105 hover:border-black"
                type="button"
              >
                Login
              </Button>
            </Link>
          )}
        </div>
        <div className="flex w-full  md:hidden lg:hidden ">
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
            <div className=" flex items-center w-full h-full bg-white flex-col gap-7 absolute top-[90px] left-0">
              <ul className="flex items-center flex-col gap-7">
                <Link href={"#functionality"} onClick={() => setOpen(false)}>
                  <li>Funcionamento</li>
                </Link>
                <Link href={"#price"} onClick={() => setOpen(false)}>
                  <li>Preço</li>
                </Link>
              </ul>{" "}
              {isLoggedIn ? (
                <Link href={"/dashboard"}>
                  <Button
                    className="bg-white text-black border-[#ccc] transition duration-300 hover:scale-105 hover:border-black"
                    type="button"
                  >
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link href={"/login"}>
                  <Button
                    className="bg-white text-black border-[#ccc] transition duration-300 hover:scale-105 hover:border-black"
                    type="button"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
