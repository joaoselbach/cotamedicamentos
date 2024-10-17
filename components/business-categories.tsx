"use client"

import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import AppCard from "./app-card"
import { useEffect, useState } from 'react'

interface Medicine {
  id: string
  name: string
  PartnerPrice: {
    price: number
    id: string
  }[]
}

interface MedicinesData {
  Medicines: {
    docs: Medicine[]
  }
}

const MOST_ACCESSED_MEDICINES = gql`
  query MostAccessedMedicines {
    Medicines(limit: 10) {
      docs {
        id
        name
        PartnerPrice {
          price
          id
        }
      }
    }
  }
`

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[/,]/g, '-')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export default function BusinessCategories() {
  const { loading, error, data } = useQuery<MedicinesData>(MOST_ACCESSED_MEDICINES)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const medicinesWithPrices = data?.Medicines.docs.map(medicine => {
    const prices = medicine.PartnerPrice.map(pp => pp.price)
    const minPrice = prices.length > 0 ? Math.min(...prices) : null
    const maxPrice = prices.length > 0 ? Math.max(...prices) : null

    return {
      ...medicine,
      minPrice,
      maxPrice
    }
  })

  return (
    <section id="maisprocurados">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 mb-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-6 text-3xl lg:text-4xl text-center font-bold md:text-4xl">
            Medicamentos mais pesquisados
          </h1>
        </div>
        <div className="relative flex min-h-[324px] items-center justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className='-ml-4 md:ml-0 overflow-visible'>
              {loading ? (
                <p className='z-20 text-center justify-center'>Carregando...</p>
              ) : error ? (
                <p className='z-20'>Erro ao carregar medicamentos</p>
              ) : (
                medicinesWithPrices?.map((medicine) => (
                  <CarouselItem key={medicine.id} className={`pl-4 ${isMobile ? 'basis-[calc(100%-70px)]' : 'mr-[-3px] lg:basis-1/3'}`}>
                    <div className={`${isMobile ? '' : 'p-1'}`}>
                      <AppCard
                        app={{
                          name: medicine.name,
                          image: "/images/medicine.png",
                          link: `/medicines/${createSlug(medicine.name)}?id=${medicine.id}`,
                        }}
                      >
                        {medicine.minPrice !== null && medicine.maxPrice !== null ? (
                          <>
                            De: {formatCurrency(medicine.minPrice)} Até: {formatCurrency(medicine.maxPrice)}
                          </>
                        ) : (
                          "Preço não disponível"
                        )}
                      </AppCard>
                    </div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious className="left-40 top-[340px] lg:top-[330px] lg:left-[44%]" />
            <CarouselNext className="right-36 top-[340px] lg:top-[330px] lg:right-[44%]" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}