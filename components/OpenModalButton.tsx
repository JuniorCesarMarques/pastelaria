"use client"

import { FormMode } from "@/app/page";
import { Product } from "@/types/product";

type OpenModalButtonProps = {
  onOpen: (mode: FormMode, product?: Product) => void;
};

export default function OpenModalButton({
  onOpen,
}: OpenModalButtonProps) {
  return (
    <button
      onClick={() => onOpen("creating")}
      className="rounded-lg bg-orange-500 px-5 py-3 text-white"
    >
      + Novo prato
    </button>
  );
}
