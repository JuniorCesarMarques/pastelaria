"use client";

import { useState } from "react";

const tabs = [
  "Restaurante",
  "Pagamentos",
  "Entrega",
  "Usuários",
];

export default function ConfiguracoesPage() {
  const [activeTab, setActiveTab] = useState("Restaurante");

  return (
    <main className="min-h-screen bg-gray-50 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-900">
          Configurações
        </h1>

        <p className="text-gray-500 mt-2">
          Gerencie as informações e preferências do seu restaurante.
        </p>


        {/* Abas */}
        <div className="flex gap-2 mt-8 border-b">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-5 py-3 text-sm font-medium
                transition
                ${
                  activeTab === tab
                    ? "border-b-2 border-orange-500 text-orange-600"
                    : "text-gray-500 hover:text-gray-800"
                }
              `}
            >
              {tab}
            </button>
          ))}

        </div>


        {/* Conteúdo */}
        <section className="bg-white rounded-xl shadow-sm border mt-6 p-6">


          {activeTab === "Restaurante" && (
            <>

              <h2 className="text-xl font-semibold">
                Dados do restaurante
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Essas informações aparecem para seus clientes.
              </p>


              <div className="grid gap-5 mt-6">


                <div>
                  <label className="text-sm font-medium">
                    Nome do restaurante
                  </label>

                  <input
                    className="mt-2 w-full rounded-lg border p-3"
                    placeholder="Ex: Pastelaria do João"
                  />
                </div>


                <div>
                  <label className="text-sm font-medium">
                    Telefone / WhatsApp
                  </label>

                  <input
                    className="mt-2 w-full rounded-lg border p-3"
                    placeholder="(15) 99999-9999"
                  />
                </div>


                <div>
                  <label className="text-sm font-medium">
                    Descrição
                  </label>

                  <textarea
                    className="mt-2 w-full rounded-lg border p-3"
                    rows={4}
                    placeholder="Conte um pouco sobre seu restaurante..."
                  />
                </div>


              </div>


              <div className="flex justify-end mt-8">

                <button
                  className="
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    font-medium
                  "
                >
                  Salvar alterações
                </button>

              </div>

            </>
          )}



          {activeTab === "Pagamentos" && (
            <div>
              <h2 className="text-xl font-semibold">
                Formas de pagamento
              </h2>

              <p className="text-gray-500 mt-2">
                Configure como seus clientes podem pagar.
              </p>
            </div>
          )}



          {activeTab === "Entrega" && (
            <div>
              <h2 className="text-xl font-semibold">
                Configuração de entrega
              </h2>
            </div>
          )}



          {activeTab === "Usuários" && (
            <div>
              <h2 className="text-xl font-semibold">
                Usuários e permissões
              </h2>
            </div>
          )}


        </section>

      </div>

    </main>
  );
}