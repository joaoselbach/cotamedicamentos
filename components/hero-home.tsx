"use client";

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import { Transition } from "@headlessui/react";
import SearchDialog from "@/app/(default)/support/search";
import { ChartBar, DollarSign, HeartPulse, Mail, Search } from "lucide-react";
import { FaGoogle, FaWhatsapp } from "react-icons/fa";

export default function HeroHome() {

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="max-w-[50%] pb-12 text-left md:pb-16">
            <div
              className="mb-6 "
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-start -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1
              className="w-full mb-6 text-xl text-left font-bold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Seu medicamento de Alto Custo
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Receba de orçamento de forma rápida, simples e gratuita.
              </p>
              <SearchDialog />

              <div
                data-aos="zoom-y-out"
                data-aos-delay={400}
              >
                <a
                  className="mt-3 flex items-center  gap-2 font-bold max-w-[250px] btn group mb-4 w-full bg-green-500 hover:bg-green-600 text-white"
                  href="https://wa.me/5511934201262?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20achar%20o%20meu%20medicamento!"
                >
                  <FaWhatsapp size={20} />
                  Peça seu orçamento agora{" "}
                </a>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="max-w-[50%] flex justify-end w-72">
            <div className="relative flex h-[324px] items-center justify-center">
              {/* Small blue dots */}
              <div className="absolute -z-10">
                <svg
                  className="fill-[#01b1bc]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={164}
                  height={41}
                  viewBox="0 0 164 41"
                  fill="none"
                >
                  <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                  <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                  <circle cx={1} cy={15} r={1} />
                  <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                  <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                  <circle cx={8} cy={8} r={1} />
                  <circle cx={8} cy={15} r={1} />
                  <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                  <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                  <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                  <circle cx={8} cy={33} r={1} />
                  <circle cx={1} cy={40} r={1} />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 7)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 0)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 14)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 25)"
                    fillOpacity="0.64"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 32)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 7)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 14)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 25)"
                    fillOpacity="0.24"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 150 14)"
                    fillOpacity="0.64"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 150 25)"
                    fillOpacity="0.16"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 157 32)"
                  />
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                    transform="matrix(-1 0 0 1 164 39)"
                  />
                </svg>
              </div>
              {/* Blue glow */}
              <div className="absolute -z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={432}
                  height={160}
                  viewBox="0 0 432 160"
                  fill="none"
                  className="opacity-50"
                >
                  <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                    <path
                      className="fill-[#01b1bc]"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_2044_9"
                      x={0}
                      y={0}
                      width={432}
                      height={160}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation={32}
                        result="effect1_foregroundBlur_2044_9"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              {/* Horizontal lines */}
              <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-[#01b1bc]/60 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:via-[#01b1bc]"></div>
              <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:via-[#01b1bc]"></div>
              {/* Diagonal lines */}
              <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
              {/* Vertical lines */}
              {/* Logos */}
              <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[background:conic-gradient(from_180deg,transparent,theme(colors.teal.500))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image
                      className="relative"
                      src="/images/logo.jpg"
                      width={32}
                      height={32}
                      alt="Logo 01"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col">
                <Transition
                  as="div"
                  unmount={false}
                  show={true}
                  className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
                  enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform order-first"
                  enterFrom="opacity-0 scale-90"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-125"
                >
                  <div className="absolute -translate-x-[142px]">
                    <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Mail
                          className="relative"
                          width={23}
                          height={22}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[142px]">
                    <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <FaGoogle
                          className="relative"
                          width={22}
                          height={22}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[80px] -translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <Search
                          className="relative"
                          width={24}
                          height={22}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-y-[82px] translate-x-[80px]">
                    <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <DollarSign
                          width={25}
                          height={25}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[80px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <ChartBar
                          className="relative"
                          width={20}
                          height={18}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[80px] translate-y-[82px]">
                    <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                        <HeartPulse
                          className="relative"
                          width={25}
                          height={25}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -translate-x-[232px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <Search
                          className="relative"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-x-[232px] opacity-40">
                    <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                        <Search
                          className="relative"
                          width={21}
                          height={13}
                        />
                      </div>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
          {/* <div
            className="mx-auto max-w-[50%]"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  cruip.com
                </span>
              </div>
              <div className="font-mono text-sm text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  npm login
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --registry=https://npm.pkg.github.com
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --scope=@phanatic
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Successfully logged-in.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  npm publish
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Package published.
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
