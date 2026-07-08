import Image from "next/image";

const pratos = [
  {
    nome: "Pastel Tradicional",
    descricao: "Massa crocante com recheio generoso.",
    preco: "R$ 18,90",
    imagem:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
  },
  {
    nome: "Pastel de Carne",
    descricao: "Carne temperada com queijo derretido.",
    preco: "R$ 22,90",
    imagem:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
  },
  {
    nome: "Café Especial",
    descricao: "Café premium passado na hora.",
    preco: "R$ 8,90",
    imagem:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  },
  {
    nome: "Combo Pastel + Café",
    descricao: "Nosso combo mais pedido.",
    preco: "R$ 27,90",
    imagem:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[85vh]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
          alt="Pastel Café"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 text-white">
            <h1 className="max-w-2xl text-5xl font-extrabold leading-tight md:text-7xl">
              O melhor pastel da cidade.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-200">
              Massa crocante, ingredientes selecionados e café passado na hora.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold transition hover:bg-orange-600">
                Fazer Pedido
              </button>

              <button className="rounded-xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-black">
                Ver Cardápio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Nossos Destaques
          </h2>

          <p className="mt-3 text-gray-500">
            Preparados na hora com muito sabor.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {pratos.map((prato) => (
            <article
              key={prato.nome}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64">
                <Image
                  src={prato.imagem}
                  alt={prato.nome}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{prato.nome}</h3>

                <p className="mt-3 text-gray-600">
                  {prato.descricao}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">
                    {prato.preco}
                  </span>

                  <button className="rounded-lg bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600">
                    Pedir
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className="bg-orange-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">
              Feito com carinho desde o primeiro pastel.
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Trabalhamos com ingredientes frescos, massas preparadas
              diariamente e um café selecionado para proporcionar uma experiência
              inesquecível.
            </p>

            <button className="mt-8 rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-600">
              Conheça nossa história
            </button>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000&q=80"
              alt="Restaurante"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-24 text-center text-white">
        <h2 className="text-4xl font-bold">
          Peça agora mesmo!
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-300">
          Seu pastel quentinho entregue rapidamente ou pronto para retirada.
        </p>

        <button className="mt-8 rounded-xl bg-orange-500 px-10 py-4 text-lg font-semibold hover:bg-orange-600">
          Fazer Pedido
        </button>
      </section>
    </main>
  );
}