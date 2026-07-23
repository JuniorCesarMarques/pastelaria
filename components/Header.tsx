"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MenuOptions from "./MenuOptions";

export type MenuOptionsType = {
  label: string;
  href: string;
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions: MenuOptionsType[] = [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/" },
    { label: "Contato", href: "/" },
    { label: "Configurações", href: "/config" },
  ];

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    });
  }, []);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/imagens/header/logo.png"
            alt="Logo"
            width={60}
            height={60}
          />

          <div>
            <h1 className="text-xl font-bold text-gray-900">Pastel Café</h1>

            <p className="text-xs text-gray-500">Sabor que conquista</p>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden items-center gap-10 lg:flex">
          <nav>
            <ul className="flex items-center gap-8 font-medium text-gray-700">
              {menuOptions.map((opt, index) => (
                <li key={index}>
                  <a
                    href={`${opt.href}`}
                    className="transition hover:text-orange-500"
                  >
                    {opt.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
            Fazer Pedido
          </button>
        </div>

        {/* Mobile */}
        <div className="relative lg:hidden">
          <button className="text-3xl" onClick={() => setIsOpen((v) => !v)}>
            ☰
          </button>

          {isOpen && (
            <>
              <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40"
              />
              <MenuOptions options={menuOptions} />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
