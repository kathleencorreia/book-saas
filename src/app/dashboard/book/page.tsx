import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth } from "../../../../auth";
import BannerWarning from "@/components/BannerWarning";
import fetchSubscriptionByEmail from "../../../../lib/stripe";

const page = async () => {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  const subscription = await fetchSubscriptionByEmail({ email: userEmail });

  return (
    <div className="flex flex-col px-8 md:px-52 py-12 bg-[url('/Background.png')] bg-cover bg-center h-screen">
      <h2 className="text-black font-bold text-start text-3xl mb-5">
        Livro do mês
      </h2>

      {subscription ? (
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
      ) : (
        <div className="w-full">
          <BannerWarning />
        </div>
      )}
    </div>
  );
};

export default page;
