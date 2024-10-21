export const metadata = {
  title: "Support - Cota Medicamentos",
  description: "Receba seu orçamento de forma rápida, simples e gratuita.",
};

import Hero from "./hero";
import Faqs from "@/components/faqs-02";
import Cta from "@/components/cta-alternative";

export default function Support() {
  return (
    <>
      <Hero />
      <Faqs />
      <Cta
        className="overflow-hidden"
        heading="Não achou o que estava procurando?"
        buttonText="Entre em contato"
        buttonLink="#0"
      />
    </>
  );
}
