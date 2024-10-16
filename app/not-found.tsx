import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -mb-64 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:h-full md:flex md:items-center md:justify-center sm:px-6">
        <div className="md:flex md:items-center md:h-full pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-bold text-2xl mb-4">Não encontrado</h1>
            <div className="mt-8">
              <Link href="/" className="btn text-white bg-[#009ba5] hover:bg-blue-700">Voltar para o início</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}