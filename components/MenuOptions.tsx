

export default function MenuOptions() {
  return (
    <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border bg-white shadow-lg">
      <nav>
        <ul className="py-2">
          <li>
            <a href="#" className="block px-4 py-3 hover:bg-gray-100">
              Início
            </a>
          </li>

          <li>
            <a href="#" className="block px-4 py-3 hover:bg-gray-100">
              Cardápio
            </a>
          </li>

          <li>
            <a href="#" className="block px-4 py-3 hover:bg-gray-100">
              Promoções
            </a>
          </li>

          <li>
            <a href="#" className="block px-4 py-3 hover:bg-gray-100">
              Sobre
            </a>
          </li>

          <li>
            <a href="#" className="block px-4 py-3 hover:bg-gray-100">
              Contato
            </a>
          </li>

          <li className="border-t">
            <button className="w-full px-4 py-3 text-left font-semibold text-orange-500 hover:bg-gray-100">
              Fazer Pedido
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
