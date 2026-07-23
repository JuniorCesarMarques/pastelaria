import { MenuOptionsType } from "./Header";

type MenuOptionsProps = {
  options: MenuOptionsType[];
};

export default function MenuOptions({
  options,
}: {
  options: MenuOptionsType[];
}) {
  return (
    <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-lg border bg-white shadow-lg">
      <nav>
        <ul className="py-2">
          {options.map((opt, index) => (
            <li key={index}>
              <a href={`${opt.href}`} className="block px-4 py-3 hover:bg-gray-100">
                {opt.label}
              </a>
            </li>
          ))}

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
