export default async function StorePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div>
      <h1>LOJA</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}