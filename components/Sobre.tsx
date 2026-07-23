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
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1000&q=80"
              alt="Ambiente do restaurante"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    )
}