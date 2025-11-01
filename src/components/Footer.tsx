import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-12 mt-20 mb-10">
      <Image src="./Logo.svg" width={230} height={80} alt="logo site" />
      <p className="text-[#6B7280] text-[10px]">
        &copy; 2025 LivroSaaS. todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
