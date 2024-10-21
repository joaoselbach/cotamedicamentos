"use client";

import { useEffect, useState } from "react";
import SearchModal from "@/components/search-modal";

export default function SearchHeader() {
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        setSearchModalOpen(true);
      }
      if (event.metaKey && event.key === "k") {
        setSearchModalOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button
        className="relative inline-flex w-full items-center justify-between whitespace-nowrap rounded-lg bg-white/90 py-2 pl-3 pr-2 text-sm text-gray-400 shadow shadow-black/[0.03] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
        aria-controls="quick-find-modal"
        onClick={(e) => {
          e.stopPropagation();
          setSearchModalOpen(true);
        }}
      >
        <div className="flex items-center justify-center">
          <svg
            className="mr-3 h-4 w-4 shrink-0 fill-gray-500"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
          </svg>
          <span>
            Procure o nome do Medicamento…
          </span>
        </div>

      </button>

      <SearchModal isOpen={searchModalOpen} setIsOpen={setSearchModalOpen} />
    </>
  );
}
