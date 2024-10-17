import { Metadata } from 'next'
import Hero from "@/components/hero-home"
import BusinessCategories from "@/components/business-categories"
import FeaturesPlanet from "@/components/features-planet"
import Features from "@/components/features-home"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import Cta from "@/components/cta"
import { FaWhatsapp } from 'react-icons/fa'

export const metadata: Metadata = {
  title: "Início - Cota Medicamentos",
  description: "Page description",
}

function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511934201262?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20achar%20o%20meu%20medicamento!%0A%0A"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-1 bottom-1 lg:left-8 lg:bottom-8 z-50 flex items-center justify-center lg:w-14 lg:h-14 w-11 h-11 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      aria-label="Contate-nos via WhatsApp"
    >
      <FaWhatsapp className="lg:w-8 lg:h-8 h-6 w-6 text-white" />
    </a>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <Features />
      <TestimonialsCarousel />
      <Cta />
      <FloatingWhatsAppButton />
    </>
  )
}