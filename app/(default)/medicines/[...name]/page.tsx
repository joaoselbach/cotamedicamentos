'use client'

import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaWhatsapp, FaPhone, FaGlobe, FaPhoneAlt } from 'react-icons/fa'
import AccordionMedicine from '@/components/accordion-medicine'

const BASE_IMAGE_URL = 'https://api.cotamedicamentos.com.br';

interface PartnerLogo {
  alt: string
  filename: string
  width: number
  height: number
  url: string
}

interface Partner {
  id: string
  name: string
  logo?: PartnerLogo
  updatedAt: string
  createdAt: string
}

interface PartnerPrice {
  partners: Partner | null
  price: number
  medicineURLInPartner: string | null
  id: string
}

interface DescriptionItem {
  type: string
  children: { text: string }[]
}

interface MedicineInfo {
  title: string
  description: DescriptionItem[]
}

interface MedicineData {
  id: string
  name: string
  ean: string
  manufacturer: string
  activeIngredient: string
  needRecipe: boolean
  class: string
  category: { name: string }
  type: { name: string }
  specialties: { name: string }[]
  info: MedicineInfo[]
  updatedAt: string
  createdAt: string
  PartnerPrice: PartnerPrice[]
}

interface MedicineQueryResult {
  Medicine: MedicineData
}

const GET_MEDICINE = gql`
  query Medicine($medicineId: String!) {
    Medicine(id: $medicineId) {
      id
      name
      ean
      manufacturer
      activeIngredient
      needRecipe
      class
      category {
        name
      }
      type {
        name
      }
      specialties {
        name
      }
      info {
        title
        description
      }
      updatedAt
      createdAt
      PartnerPrice {
        partners {
          id
          name
          logo {
            alt
            filename
            width
            height
            url
          }
        }
        price
        medicineURLInPartner
        id
      }
    }
  }
`



const renderDescription = (description: DescriptionItem[]): JSX.Element => {


  return (
    <>
      {description.map((item, index) => {
        switch (item.type) {
          case 'paragraph':
            return <p key={index} className="mb-4">{item.children.map(child => child.text).join('')}</p>
          case 'heading':
            return <h3 key={index} className="text-lg font-bold mb-2">{item.children.map(child => child.text).join('')}</h3>
          case 'list':
            return (
              <ul key={index} className="list-disc pl-5 mb-4">
                {item.children.map((child, childIndex) => (
                  <li key={childIndex}>{child.text}</li>
                ))}
              </ul>
            )
          case 'h4':
            return <h4 key={index} className="text-md font-semibold mb-2">{item.children.map(child => child.text).join('')}</h4>
          case 'h5':
            return <h5 key={index} className="text-sm font-semibold mb-1">{item.children.map(child => child.text).join('')}</h5>
          default:
            return <p key={index}>{item.children.map(child => child.text).join('')}</p>
        }
      })}
    </>
  )
}

export default function Component() {
  const searchParams = useSearchParams()
  const medicineId = searchParams.get('id')
  const [errorDetails, setErrorDetails] = useState<string>('')

  const { loading, error, data } = useQuery<MedicineQueryResult>(GET_MEDICINE, {
    variables: { medicineId },
    skip: !medicineId,
  })

  useEffect(() => {
    if (medicineId) {
      console.log('Medicine ID:', medicineId)
    }
    if (error) {
      console.error('GraphQL Error:', error)
      setErrorDetails(JSON.stringify(error, null, 2))
    }
    if (data) {
      console.log('Received data:', data)
    }
  }, [medicineId, error, data])

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value)
  }

  if (!medicineId) return <div className='w-full min-h-screen flex items-center justify-center'>ID do medicamento não fornecido</div>
  if (loading) return <div className='w-full min-h-screen flex items-center justify-center'>Carregando...</div>
  if (error) {
    return (
      <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <p>Erro ao carregar o medicamento: {error.message}</p>
        <details className="mt-4 p-4 bg-red-100 rounded-lg">
          <summary className="cursor-pointer">Ver detalhes do erro</summary>
          <pre className="mt-2 whitespace-pre-wrap">{errorDetails}</pre>
        </details>
      </div>
    )
  }

  const medicine = data?.Medicine

  if (!medicine) {
    return (
      <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <p>Medicamento não encontrado</p>
        <p className="mt-2 text-sm text-gray-600">ID do medicamento: {medicineId}</p>
        <p className="mt-2 text-sm text-gray-600">Dados recebidos: {JSON.stringify(data, null, 2)}</p>
      </div>
    )
  }

  const hasPartnerPrices = medicine.PartnerPrice && medicine.PartnerPrice.length > 0
  const sortedPartnerPrices = [...medicine.PartnerPrice].sort((a, b) => a.price - b.price)

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col gap-4 justify-center items-center min-h-screen">
        <div className='flex flex-col justify-between items-start lg:pt-40 pt-32 gap-14 lg:gap-22 w-full'>
          <div className="flex flex-col items-center w-full justify-center">
            <Image src="/images/medicine-mockup.png" alt={medicine.name} width={300} height={300} className=' max-w-[50%] lg:max-w-[30%] pb-2' />
            <h1 className="mb-4 text-4xl text-center font-bold mt-8">{medicine.name}</h1>
            {hasPartnerPrices ? (
              <div className='flex items-center gap-6'>
                <p className='font-bold text-2xl text-gray-600'>
                  <span className='font-medium text-sm text-gray-600'>De:</span>{' '}
                  {formatCurrency(Math.min(...medicine.PartnerPrice.map(pp => pp.price)))}
                </p>
                <p className='font-bold text-2xl text-[#2dbfc7]'>
                  <span className='font-medium text-sm text-gray-600'>Até:</span>{' '}
                  {formatCurrency(Math.max(...medicine.PartnerPrice.map(pp => pp.price)))}
                </p>
              </div>
            ) : (
              <div className='flex flex-col items-center gap-4'>
                <p className='text-xl text-gray-600'>Não encontrou o que procurava? <span className='font-semibold'>Clique abaixo</span> e fale com nosso especialista!</p>
                <a href="https://wa.me/5511934201262?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20achar%20o%20meu%20medicamento!" className='flex items-center gap-2 bg-green-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-600 transition-colors'>
                  <FaWhatsapp size={24} />
                  Falar com especialista
                </a>
              </div>
            )}
          </div>
          <div className="flex lg:flex-row flex-col items-center justify-between w-full gap-1 lg:gap-10">
            <div className='lg:max-w-[50%] w-full'>
              <p className="border-b border-b-gray-300 pb-3 lg:pt-1 pt-3 text-gray-600"><span className="font-bold">EAN:</span> {medicine.ean}</p>
              <p className="border-b border-b-gray-300 pb-3 lg:pt-1 pt-3 text-gray-600"><span className="font-bold">Fabricante:</span> {medicine.manufacturer}</p>
              <p className="border-b border-b-gray-300 pb-3 lg:pt-1 pt-3 text-gray-600"><span className="font-bold">Princípio Ativo:</span> {medicine.activeIngredient}</p>
              <p className="border-b border-b-gray-300 pb-3 lg:pt-1 pt-3 text-gray-600"><span className="font-bold">Necessita Receita:</span> {medicine.needRecipe ? 'Sim' : 'Não'}</p>
            </div>
            <div className='lg:max-w-[50%] w-full'>
              <p className="border-b border-b-gray-300 pb-3 lg:pt-1 pt-3 text-gray-600"><span className="font-bold">Classe:</span> {medicine.class}</p>
              <p className="border-b border-b-gray-300 pb-3 lg:pt-1 pt-3 text-gray-600"><span className="font-bold">Categoria:</span> {medicine.category.name}</p>
              <p className="border-b border-b-gray-300 pb-3 lg:pt-1 pt-3 text-gray-600"><span className="font-bold">Tipo:</span> {medicine.type.name}</p>
              <p className="border-b border-b-gray-300 pb-3 lg:pt-1 pt-3 text-gray-600"><span className="font-bold">Especialidades:</span> {medicine.specialties.map(s => s.name).join(', ')}</p>
            </div>
          </div>
        </div>
        {hasPartnerPrices && (
          <div className="space-y-4 w-full mt-10">
            <h3 className='font-bold text-center lg:text-left text-3xl lg:text-3xl mb-6'>Preços por Parceiro</h3>
            <div className="flex flex-col gap-4 ">
              {sortedPartnerPrices.map((partnerPrice) => (
                <div key={partnerPrice.id} className="flex lg:flex-row flex-col border justify-center sm:items-center lg:justify-between border-gray-200 rounded-lg px-8 py-8 shadow-sm hover:bg-zinc-100 transition-all">
                  <div className="flex lg:flex-row flex-col items-center gap-4 lg:gap-12">
                    {partnerPrice.partners?.logo && (
                      <div className='max-w-[170px] min-w-[170px] '>
                        <img
                          src={`${BASE_IMAGE_URL}${partnerPrice.partners.logo.url}`}
                          alt={partnerPrice.partners.logo.alt || partnerPrice.partners?.name || 'Partner logo'}
                          className='m-auto'
                        />
                      </div>
                    )}
                    <p className="md:hidden text-2xl font-bold text-[#2dbfc7] text-center">{formatCurrency(partnerPrice.price)}</p>

                    <div className='flex flex-col justify-center items-center lg:items-start lg:justify-start'>
                      <span className="font-semibold text-xl lg:text-left text-center">{partnerPrice.partners ? partnerPrice.partners.name : 'Parceiro'}</span>
                      <div className="flex gap-2 mt-2">
                        <a href='https://wa.me/5511934201262?text=Ol%C3%A1%2C%20gostaria%20de%20ajuda%20para%20achar%20o%20meu%20medicamento!' className="flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded text-sm hover:bg-green-600 transition-colors">
                          <FaWhatsapp /> WhatsApp
                        </a>
                        <a href="tel:5511934201262" className="flex items-center gap-1 bg-[#2dbfc7] text-white px-2 py-1 rounded text-sm hover:bg-[#38acb3] transition-colors">
                          <FaPhoneAlt /> Ligar
                        </a>
                        {/* {partnerPrice.medicineURLInPartner && (
                        <a
                          href={partnerPrice.medicineURLInPartner}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-purple-500 text-white px-2 py-1 rounded text-sm hover:bg-purple-600 transition-colors"
                        >
                          <FaGlobe /> Site do Parceiro
                        </a>
                      )} */}
                      </div>
                    </div>
                  </div>
                  <p className="hidden lg:flex text-2xl font-bold text-[#2dbfc7] text-center">{formatCurrency(partnerPrice.price)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="space-y-2 mx-auto py-24 w-full">
          <h3 className='font-bold text-3xl mb-6'>Mais informações sobre o medicamento</h3>
          <div className='space-y-2'>
            {medicine.info.map((info, index) => (
              <AccordionMedicine
                key={index}
                title={info.title}
                id={`faqs-${index}`}
              >
                {renderDescription(info.description)}
              </AccordionMedicine>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}