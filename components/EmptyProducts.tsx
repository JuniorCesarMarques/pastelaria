export function EmptyProducts() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        🛍️
      </div>

      <h2 className="text-lg font-semibold text-gray-900">
        Nenhum produto disponível
      </h2>

      <p className="mt-1 max-w-sm text-sm text-gray-500">
        Esta loja ainda não possui produtos cadastrados.
      </p>
    </div>
  );
}