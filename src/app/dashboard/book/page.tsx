import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col px-8 md:px-52 py-12">
      <h2 className="text-black font-bold  text-start text-3xl mb-5">
        Livro disponível
      </h2>
      <div className="w-[90%]">
        <Image
          src="/bookimage.png"
          width={276}
          height={434}
          alt="imagem livor eloquent javascript"
          className="md:w-[376px] md:h-[534px]"
        />
        <Link
          href="https://eloquentjavascript.net/Eloquent_JavaScript_small.pdf"
          target="_blank"
        >
          <Button className="bg-black text-white md:w-[28%] flex gap-4 justify-center mt-5 hover:bg-[#1f1f1f]">
            <Image
              src="/download.svg"
              width={24}
              height={24}
              alt="icon download"
            />
            Download do PDF
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
