import Image from 'next/image'

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-[#01b1bc] blur-3xl will-change-[filter]" />
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image className="max-w-none" src={Stripes} alt="Stripes" />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              Procure seu orçamento de forma rápida abaixo
            </h2>
            <SearchDialog />
          </div>
        </div> */}
        <div className="mb-12">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 md:text-4xl">
              Nossos Parceiros
            </h2>
            <div className="w-full flex lg:flex-wrap justify-between lg:justify-center items-center gap-8 lg:gap-28">
              <div className="w-full max-w-[100px] lg:max-w-[200px]">
                <Image
                  src="/images/aliria.jpeg"
                  alt="Aliria Logo"
                  width={250}
                  height={100}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="w-full  max-w-[120px] lg:max-w-[200px]">
                <Image
                  src="/images/integralmed.png"
                  alt="Integralmed Logo"
                  width={250}
                  height={100}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              <div className="w-full max-w-[100px] lg:max-w-[200px]">
                <Image
                  src="/images/farmaclass.png"
                  alt="Farmaclass Logo"
                  width={250}
                  height={100}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}