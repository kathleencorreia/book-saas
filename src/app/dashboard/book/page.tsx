import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col px-52 py-12">
      <h2 className="text-[#000] font-bold text-3xl mb-5">Livro disponível</h2>
      <Image
        src="/bookimage.png"
        width={376}
        height={534}
        alt="imagem livor eloquent javascript"
      />
      <Button className="bg-black text-white w-[28%] flex gap-4 justify-center mt-5 hover:bg-[#1f1f1f]">
        <Image src="/download.svg" width={24} height={24} alt="icon download" />
        Download do PDF
      </Button>
    </div>
  );
};

export default page;
