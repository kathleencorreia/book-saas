import logoutAction from "@/app/(logout)/logoutAction";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";

export default function HeaderDashboard({ userName }: { userName: string }) {
  return (
    <header className="w-full px-52 py-6 flex items-center justify-center">
      <nav className="w-full flex justify-between items-center ">
        <Link href={"/"}>
          <div>
            <Image src="/Logo.svg" width={130} height={40} alt="Logo" />
          </div>
        </Link>

        <div className="hidden md:flex gap-7 items-center">
          <ul className="flex gap-7">
            <Link href={"/dashboard/book"}>
              <li className="hover:underline">Livro do mês</li>
            </Link>
            <Link href={"/dashboard/signature"}>
              <li className="hover:underline">Assinatura</li>
            </Link>
          </ul>

          <details className="relative">
            <summary className="list-none cursor-pointer p-1">
              <Image src="/user.svg" width={24} height={24} alt="Usuário" />
            </summary>

            <div className="absolute right-0 mt-2 bg-white shadow-lg p-2 left-[-20px] min-w-[160px] z-50">
              <span className="px-3 py-1 text-sm cursor-pointer">
                {userName}
              </span>
              <Form action={logoutAction}>
                <button
                  type="submit"
                  className="text-left px-3 py-2 w-full hover:bg-gray-50 cursor-pointer text-sm"
                >
                  Logout
                </button>
              </Form>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
