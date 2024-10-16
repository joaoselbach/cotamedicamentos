"use client";

import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import AppCard from "./app-card";

interface Medicine {
  id: string;
  name: string;
}

interface MedicinesData {
  Medicines: {
    docs: Medicine[];
  };
}

const MOST_ACCESSED_MEDICINES = gql`
  query MostAccessedMedicines {
    Medicines(limit: 10) {
      docs {
        id
        name
      }
    }
  }
`;

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[/,]/g, '-')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export default function BusinessCategories() {
  const { loading, error, data } = useQuery<MedicinesData>(MOST_ACCESSED_MEDICINES);

  return (
    <section id="maisprocurados">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-6 text-5xl font-bold md:text-4xl">
            Medicamentos mais pesquisados
          </h1>
        </div>
        <div className="relative flex min-h-[324px] items-center justify-center">
          {/* <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-[#01b1bc]/60 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:via-[#01b1bc]"></div>
          <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:via-[#01b1bc]"></div>
          <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-gradient-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-gradient-to-t from-gray-200 to-transparent mix-blend-multiply"></div> */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className='flex justify-center items-center'>
              {loading ? (
                <p className='z-20'>Carregando...</p>
              ) : error ? (
                <p className='z-20'>Erro ao carregar medicamentos</p>
              ) : (
                data?.Medicines.docs.map((medicine) => (
                  <CarouselItem key={medicine.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <AppCard
                        app={{
                          name: medicine.name,
                          image: "/images/medicine.png",
                          link: `/medicines/${createSlug(medicine.name)}?id=${medicine.id}`,
                        }}
                      >
                        De:  - Até:
                      </AppCard>
                    </div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}