import Link from "next/link";
import MobileMenu from "./mobile-menu";
import SearchDialog from "@/app/(default)/support/search";
import SearchHeader from "@/app/(default)/support/search-header";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center">
            <img src="/images/logo-mobile.jpeg" className=" w-full max-w-[120px]" />
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-2 text-sm lg:gap-4">
              <li className="px-3 py-1">
                <Link
                  href="/"
                  className="flex items-center text-gray-500 transition hover:text-gray-900"
                >
                  Início
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/#maisprocurados"
                  className="flex items-center text-gray-500 transition hover:text-gray-900"
                >
                  Mais procurados
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/#orientacao"
                  className="flex items-center text-gray-500 transition hover:text-gray-900"
                >
                  Orientação Jurídica
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/#depoimentos"
                  className="flex items-center text-gray-500 transition hover:text-gray-900"
                >
                  Depoimentos
                </Link>
              </li>
            </ul>
          </nav>

          <ul className="hidden md:flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="https://api.cotamedicamentos.com.br/admin"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Login
              </Link>
            </li>
            <SearchHeader />
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
