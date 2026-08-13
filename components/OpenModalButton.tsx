"use client"

import { Product } from "@/types/product";

type OpenModalButtonProps = {
  onOpen: (product?: Product) => void;
};

export default function OpenModalButton({
  onOpen,
}: OpenModalButtonProps) {
  return (
    <button
      onClick={() => onOpen()}
      className="rounded-lg bg-orange-500 px-5 py-3 text-white"
    >
      + Novo produto
    </button>
  );
}
