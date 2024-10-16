import Link from "next/link";
import Logo from "./logo";
import { FacebookIcon, InstagramIcon, MailIcon, Phone } from "lucide-react";
import { FaMailBulk, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`w-full flex justify-between gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          <div className="space-y-2 max-w-[250px]">
            <div>
              <img src="/images/logo-mobile.jpeg" className="max-w-[130px]" />
            </div>
            <div className="text-sm text-gray-600">
              &copy; Cota Medicamentos - Todos os direitos reservados.<br /> CNPJ - 54.898.401/0001-30
            </div>
          </div>

          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold">Geral</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Mais Procurados
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Orientação Jurídica
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 flex gap-1 items-center transition hover:text-gray-900"
                  href="tel:5511934201262"
                >
                  <Phone size={16} className="text-[#01b1bc] transition hover:text-[#009ba5]" />
                  +55 (11) 93420-1262
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-1 items-center text-gray-600 transition hover:text-gray-900"
                  href="mailto:contato@cotamedicamentos.com.br"
                >
                  <MailIcon size={16} className="text-[#01b1bc] transition hover:text-[#009ba5]" />
                  contato@cotamedicamentos.com.br
                </Link>
              </li>
              <li>
                <Link
                  className="flex gap-1 items-center text-gray-600 transition hover:text-gray-900"
                  href="https://wa.me/5511934201262?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20achar%20o%20meu%20medicamento!"
                >
                  <FaWhatsapp size={16} className="text-[#01b1bc] transition hover:text-[#009ba5]" />
                  Solicite um orçamento
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold">Ajuda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-bold">Instagram</h3>
            <ul className="flex gap-2">

              <li>
                <Link
                  className="flex items-center justify-center text-[#01b1bc] transition hover:text-[#009ba5]"
                  href="#0"
                  aria-label="Medium"
                >
                  <InstagramIcon width={18} height={18} />
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full -z-10 opacity-40" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[248px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Medicamentos'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Medicamentos'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <p className="pt-20 max-w-6xl m-auto text-xs text-[#343c46] px-4 sm:px-6">O Cota Medicamentos não realiza vendas de medicamentos diretamente. Somos uma plataforma que facilita a comparação de preços entre diferentes fornecedores, ajudando você a encontrar as melhores opções disponíveis no mercado. Nossa missão é garantir que você tenha acesso às informações necessárias para fazer escolhas conscientes e econômicas.

          Informações Confiáveis para Decisões Conscientes

          Todas as informações disponibilizadas em nosso site têm o objetivo de informar e educar. No entanto, é importante ressaltar que estas informações não substituem em hipótese alguma o aconselhamento médico profissional, diagnósticos ou tratamentos. Sempre consulte um médico ou farmacêutico qualificado para obter orientações específicas adaptadas às suas condições de saúde antes de tomar qualquer decisão sobre tratamento.</p>
      </div>
    </footer>
  );
}
