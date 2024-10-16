"use client"

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react"
import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import debounce from 'lodash/debounce'

interface Medicine {
  id: string
  name: string
  ean: string
  manufacturer: string
  activeIngredient: string
  needRecipe: boolean
  class: string
}

interface MedicinesData {
  Medicines: {
    docs: Medicine[]
    totalDocs: number
    hasNextPage: boolean
    nextPage: number
  }
}

const SEARCH_MEDICINES = gql`
  query Medicines($where: Medicine_where, $page: Int, $limit: Int) {
    Medicines(where: $where, page: $page, limit: $limit) {
      docs {
        id
        name
        ean
        manufacturer
        activeIngredient
        needRecipe
        class
      }
      totalDocs
      hasNextPage
      nextPage
    }
  }
`

interface SearchModalProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

function LoadingDots() {
  return (
    <div className="flex justify-center items-center space-x-2">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-pulse"
          style={{
            animationDelay: `${index * 0.15}s`,
            animationDuration: '0.9s',
          }}
        />
      ))}
    </div>
  )
}

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

export default function SearchModal({ isOpen, setIsOpen }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const { loading, error, data, fetchMore } = useQuery<MedicinesData>(SEARCH_MEDICINES, {
    variables: {
      where: {
        OR: [
          { name: { contains: debouncedSearchTerm } },
          { activeIngredient: { contains: debouncedSearchTerm } }
        ]
      },
      page: 1,
      limit: 50
    },
    skip: debouncedSearchTerm.length < 2
  })

  useEffect(() => {
    const debouncedSearch = debounce((term: string) => {
      setDebouncedSearchTerm(term)
      setPage(1)
    }, 300)

    debouncedSearch(searchTerm)

    return () => {
      debouncedSearch.cancel()
    }
  }, [searchTerm])

  const loadMore = () => {
    if (data?.Medicines.hasNextPage) {
      fetchMore({
        variables: {
          page: data.Medicines.nextPage,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev
          return {
            Medicines: {
              ...fetchMoreResult.Medicines,
              docs: [...prev.Medicines.docs, ...fetchMoreResult.Medicines.docs],
            },
          }
        },
      })
    }
  }

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading && data?.Medicines.hasNextPage) {
        loadMore()
      }
    }
  }

  const close = () => {
    setIsOpen(false)
  }

  const handleMedicineClick = (medicine: Medicine) => {
    const slug = createSlug(medicine.name)
    router.push(`/medicines/${slug}?id=${medicine.id}`)
    close()
  }

  return (
    <Transition appear show={isOpen}>
      <Dialog as="div" onClose={close}>
        <TransitionChild
          as="div"
          className="fixed inset-0 z-50 bg-gray-900 bg-opacity-40 backdrop-blur-sm transition-opacity"
          enter="transition ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-out duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          aria-hidden="true"
        />
        <TransitionChild
          as="div"
          className="fixed inset-0 top-20 z-50 mb-4 flex items-start justify-center overflow-hidden px-4 sm:px-6 md:top-28"
          enter="transition ease-in-out duration-200"
          enterFrom="opacity-0 translate-y-4"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in-out duration-200"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-4"
        >
          <DialogPanel className="w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-lg">
            <form className="border-b border-gray-200" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center">
                <label htmlFor="search-modal" className="sr-only">
                  Search
                </label>
                <svg
                  className="ml-4 h-4 w-4 shrink-0 fill-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
                </svg>
                <input
                  id="search-modal"
                  className="w-full appearance-none border-0 bg-white py-3 pl-2 pr-4 text-sm placeholder-gray-400 focus:ring-transparent"
                  type="search"
                  placeholder="Procure por nome do Medicamento ou Princípio Ativo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
            <div
              className="max-h-[400px] overflow-y-auto p-2"
              onScroll={handleScroll}
              ref={scrollRef}
            >
              {error && <p className="text-center text-red-500 pt-2">Erro ao buscar medicamentos</p>}
              {loading ? (
                <div className="flex justify-center items-center py-4">
                  <LoadingDots />
                </div>
              ) : data && data.Medicines.docs.length > 0 ? (
                <ul>
                  {data.Medicines.docs.map((medicine: Medicine) => (
                    <li key={medicine.id}>
                      <button
                        className="flex w-full items-center rounded-lg px-2 py-1 text-sm leading-6 text-gray-700 outline-none focus-within:bg-gray-100 hover:bg-gray-100"
                        onClick={() => handleMedicineClick(medicine)}
                      >
                        <svg
                          className="mr-3 h-3 w-3 shrink-0 fill-gray-400"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                        >
                          <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                        </svg>
                        <div className="flex flex-col items-start">
                          <span className='text-left'>{medicine.name}</span>
                          <span className="text-xs text-gray-500">{medicine.activeIngredient}</span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center pt-4 pb-4 text-gray-400">Nenhum medicamento encontrado</p>
              )}
              {!loading && data?.Medicines.hasNextPage && (
                <div className="flex justify-center items-center py-4">
                  <LoadingDots />
                </div>
              )}
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  )
}