import "./css/style.css";

import { GeistSans } from "geist/font/sans";
import { ApolloProviders } from "./providers/ApolloProvider";
import Script from "next/script";


export const metadata = {
  title: "Cota Medicamentos",
  description: "Receba seu orçamento de forma rápida, simples e gratuita.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} scroll-smooth`}>
      <head>
        <Script
          src="//code.jivosite.com/widget/lKzhywA6yx"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${GeistSans.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          <ApolloProviders>
            {children}
          </ApolloProviders>
        </div>
      </body>
    </html>
  );
}
