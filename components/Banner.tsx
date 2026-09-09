import Image from "next/image";

type HomeHeroProps = {
  logoPath: string
}

export default function Banner({ logoPath }: HomeHeroProps) {
  return (
    <section className="relative h-[85vh]">
      <Image
        src={logoPath}
        alt="Banner"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6 text-white">
          <h1 className="max-w-2xl text-5xl font-extrabold leading-tight md:text-7xl">
            Bem-vindo à nossa loja.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-200">
            Encontre nossos produtos, conheça nossas opções e faça seu pedido
            de forma simples e rápida.
          </p>

          <div className="mt-10">
            <button className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold transition hover:bg-orange-600">
              Ver produtos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}