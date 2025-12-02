import Image from "next/image";
import React from "react";
import { auth } from "../../../../auth";
import fetchSubscriptionByEmail, {
  translateSubscriptionInterval,
  translateSubscriptionStatus,
} from "../../../../lib/stripe";
import Button from "@/components/Button";
import Form from "next/form";
import cancelSubscriptionAction from "./cancelSubscriptionAction";
import BannerWarning from "@/components/BannerWarning";
import Link from "next/link";

const page = async () => {
  const session = await auth();
  const userEmail = session?.user?.email as string;
  const subscription = await fetchSubscriptionByEmail({ email: userEmail });
  console.log(subscription);

  return (
    <div className="flex flex-col px-8 md:px-24 py-12 bg-[url('/Background.png')] bg-cover bg-center h-screen ">
      {subscription ? (
        <div>
          <h2 className="text-black font-bold text-3xl mb-5">Assinatura</h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex md:w-[40%] flex-col gap-4 border bg-white border-[#e6e6e6] px-12 py-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">Detalhes da assinatura</h3>
              <p className="text-sm text-[#6b7280]">
                Informações sobre o seu plano atual
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex justify-between">
                  <p className="text-sm ">Plano:</p>{" "}
                  <span>
                    {subscription?.items?.data?.[0]?.plan?.nickname ??
                      "Nenhum plano ativo"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm ">Status:</p>{" "}
                  <span className="text-green-400">
                    {translateSubscriptionStatus(subscription?.status ?? "")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm ">Próxima cobrança:</p>{" "}
                  <span>
                    {subscription?.billing_cycle_anchor
                      ? new Date(
                          subscription.billing_cycle_anchor * 1000
                        ).toLocaleDateString("pt-BR")
                      : "Data não disponível"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm ">Valor:</p>{" "}
                  <span>
                    {subscription?.items?.data?.[0]?.plan?.amount
                      ? (
                          subscription?.items?.data?.[0]?.plan?.amount / 100
                        ).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })
                      : null}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm ">Ciclo:</p>{" "}
                  <span>
                    {subscription?.items?.data?.[0]?.plan?.interval_count}{" "}
                    {translateSubscriptionInterval(
                      subscription?.items?.data?.[0]?.plan?.interval ?? "",
                      subscription?.items?.data?.[0]?.plan?.interval_count ?? 1
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex md:w-[40%]  flex-col gap-4 border bg-white border-[#e6e6e6] px-12 py-8 rounded-2xl">
              <h3 className="text-2xl font-semibold">Ações</h3>
              <p className="text-sm text-[#6b7280]">Gerencia sua assinatura</p>
              <div className="flex flex-col gap-4  mt-4">
                <Link
                  href={process.env.STRIPE_LINK_COSTUMER ?? ""}
                  target="_blank"
                >
                  <div className="flex justify-center border border-[#6b7280] items-center p-2 rounded-md gap-2">
                    <Image
                      src="../../card.svg"
                      width={16}
                      height={16}
                      alt="Icon Card"
                    />
                    <p className="text-sm text-[#6b7280] ">
                      {" "}
                      Atualizar método de pagamento
                    </p>
                  </div>
                </Link>
                <Form action={cancelSubscriptionAction}>
                  <input
                    type="hidden"
                    name="subscriptionId"
                    value={subscription?.id}
                  />
                  <div className="w-full">
                    <Button className="border-0 w-full bg-[#EF4444] text-white flex items-center justify-center gap-2">
                      <Image
                        src="../../alertIcon.svg"
                        width={16}
                        height={16}
                        alt="Icon Card"
                      />
                      Cancelar Assinatura
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
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
