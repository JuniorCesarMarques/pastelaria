import { Ref } from "react"

type Props = {
    menuRef: Ref<HTMLUListElement>;
    onDelete: () => void;
    onEdit: () => void;
}

export default function ProductMenuActions({menuRef, onDelete, onEdit}: Props) {

    return (
        <ul
          ref={menuRef}
          className="cursor-pointer absolute top-6 right-6 bg-white z-10 p-1 rounded-md"
        >
          <li
            onClick={onEdit}
            className="hover:bg-gray-200 px-3 py-2 rounded-md"
          >
            Editar
          </li>
          <li onClick={onDelete} className="hover:bg-gray-200 px-3 py-2 rounded-md">Excluir</li>
        </ul>
    )
}