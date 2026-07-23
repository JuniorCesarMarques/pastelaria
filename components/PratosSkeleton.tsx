
export default function Skeleton({items}: {items: number}){

    return (
<div className="flex flex-wrap justify-center gap-10">
  {Array.from({ length: items }).map((_, index) => (
    <article
      key={index}
      className="w-80 overflow-hidden rounded-3xl bg-white shadow-lg animate-pulse"
    >
      <div className="h-64 w-full bg-gray-200" />

      <div className="p-6">
        <div className="h-7 w-2/3 rounded bg-gray-200" />

        <div className="mt-4 space-y-2">
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-200" />
          <div className="h-4 w-3/4 rounded bg-gray-200" />
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="h-8 w-20 rounded bg-gray-200" />
          <div className="h-10 w-36 rounded-lg bg-gray-200" />
        </div>
      </div>
    </article>
  ))}
</div>
    )
}