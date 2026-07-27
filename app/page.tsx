"use client";

import CTAComponent from "@/components/CTAComponent";
import HomeHero from "@/components/HomeHero";
import ProductFormModal from "@/components/ProductFormModal";
import OpenModalButton from "@/components/OpenModalButton";
import PratoCard from "@/components/PratoCard";
import Skeleton from "@/components/PratosSkeleton";
import Sobre from "@/components/Sobre";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export type FormMode = "creating" | "editing";

export default function Home() {
  const [modalState, setModalState] = useState(false);

  const [formMode, setFormMode] = useState<FormMode>("creating");

  const [pratos, setPratos] = useState<Product[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/pratos");

        if (!res.ok) return;

        const pratos = await res.json();

        setPratos(pratos);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const openFormModal = (mode: FormMode, product?: Product) => {

    setSelectedProduct(product ?? null);
    setFormMode(mode);
    setModalState(true);
  };


  const closeModal = () => {
    setModalState(false);
  };

  return (
    <main>
      {/* HERO */}

      <HomeHero />
      {/* DESTAQUES */}
      <OpenModalButton  onOpen={openFormModal} />

      <ProductFormModal
        product={selectedProduct}
        formMode={formMode}
        open={modalState}
        onClose={closeModal}
      />

      {/* Pratos */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">Pratos em Destaque</h2>

          <p className="mt-3 text-gray-500">
            Receitas preparadas diariamente com ingredientes frescos.
          </p>
        </div>

        {/* <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"> */}
        <div className="flex flex-wrap justify-center gap-10">
          {pratos.length ? (
            pratos.map((prato) => (
              <PratoCard
                key={prato.id}
                handleEditClick={openFormModal}
                product={prato}
              />
            ))
          ) : (
            <Skeleton items={6} />
          )}
        </div>
      </section>

      {/* SOBRE */}
      <Sobre />

      {/* CTA */}
      <CTAComponent />
    </main>
  );
}
