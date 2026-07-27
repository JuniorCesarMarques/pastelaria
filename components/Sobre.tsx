import Image from "next/image";

export default function Sobre(){

    return (
    <section className="bg-orange-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">
              Uma cozinha feita para criar memórias.
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Nosso restaurante combina ingredientes selecionados, técnicas
              cuidadosas e um ambiente acolhedor para oferecer uma experiência
              gastronômica completa.
            </p>

            <button className="mt-8 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600">
              Conheça nossa história
            </button>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="https://zvwxwcxquavhgoswsmim.supabase.co/storage/v1/object/public/store-platform-assets/f43c811e-4b41-4592-9aae-03f4f47fad8c/appearance/about-us-image.jpeg"
              alt="Ambiente do restaurante"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </section>
    )
}