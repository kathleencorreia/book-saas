import Image from "next/image";
import Link from "next/link";
import Logo from "./../../../public/Logo.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex py-40 justify-center flex-col bg-[url('/Background.png')] bg-cover bg-center h-screen  items-center ">
      <Link href={"/"}>
        <Image src={Logo} width={130} height={40} alt="Image logo" />
      </Link>
      {children}
    </section>
  );
}
