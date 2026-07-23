"use client";

import { FormMode } from "@/app/page";
import { Product } from "@/types/product";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { FaEllipsisV } from "react-icons/fa";

type PratoCardProps = {
  prato: Product;
  handleEditClick: (mode: FormMode, product: Product) => void;
};

export default function PratoCard({ prato, handleEditClick }: PratoCardProps) {
  const menuRef = useRef<HTMLUListElement>(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <article
      key={prato.id}
      className="relative w-80 flex flex-col items-between justify-between overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
    >
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="absolute top-2 right-2 bg-white p-2 rounded-full z-10"
      >
        <FaEllipsisV />
      </div>

      {open && (
        <ul
          ref={menuRef}
          className="cursor-pointer absolute top-6 right-6 bg-white z-10 p-1 rounded-md"
        >
          <li
            onClick={() => handleEditClick("editing", prato)}
            className="hover:bg-gray-200 px-3 py-2 rounded-md"
          >
            Editar
          </li>
          <li className="hover:bg-gray-200 px-3 py-2 rounded-md">Excluir</li>
        </ul>
      )}

      <div className="relative h-64 w-full">
        <Image
          src={prato.imagem}
          alt={prato.nome}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">{prato.nome}</h3>

        <p className="mt-3 text-gray-600">{prato.descricao}</p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-orange-500">
            R$ {prato.preco.replace(".", ",")}
          </span>

          <button className="rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600">
            <a
              href="https://wa.me/5519996626766?text=Olá,%20gostaria%20de%20fazer%20um%20pedido."
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer Pedido
            </a>
          </button>
        </div>
      </div>
    </article>
  );
}
