import Image from "next/image";
import Link from "next/link";

export default function AppCard({
  app,
  children,
}: {
  app: {
    name: string;
    image: string;
    link: string;
  };
  children: React.ReactNode;
}) {
  return (
    <Link href={app.link} passHref>
      <article className="justify-between min-h-[280px] group relative flex w-full flex-col rounded-2xl bg-[#fbfcfd] p-5 shadow-lg shadow-black/[0.03] transition before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-white">
        <svg
          className="absolute right-5 top-5 transition-transform group-hover:rotate-45"
          xmlns="http://www.w3.org/2000/svg"
          width={9}
          height={9}
        >
          <path
            className="fill-gray-400"
            d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z"
          />
        </svg>
        <div>
          <div className="mb-3 inline-flex">
            <div className="relative">
              <Image
                className="shadow-lg shadow-black/[0.03]"
                src={app.image}
                width={108}
                height={108}
                alt={app.name}
              />
            </div>
          </div>
          <h3 className="mb-1">
            <span className="font-bold">{app.name}</span>
          </h3>
        </div>
        <p className="text-sm text-gray-700">{children}</p>
      </article>
    </Link>
  );
}