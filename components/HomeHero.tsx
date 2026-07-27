import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative h-[85vh]">
      <Image
        src="https://zvwxwcxquavhgoswsmim.supabase.co/storage/v1/object/public/store-platform-assets/f43c811e-4b41-4592-9aae-03f4f47fad8c/appearance/banner.jpeg"
        alt="Restaurante"
        fill
        priority
        unoptimized
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-6 text-white">
          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight md:text-7xl">
            Sabores únicos para momentos especiais.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-200">
            Pratos preparados com ingredientes selecionados, técnica e muito
            carinho para transformar cada refeição em uma experiência.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold transition hover:bg-orange-600">
              Fazer Reserva
            </button>

            <button className="rounded-xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-black">
              Ver Cardápio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
