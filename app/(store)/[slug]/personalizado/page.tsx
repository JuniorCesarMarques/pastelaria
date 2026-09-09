import PersonalizadoClient from "@/components/PersonalizadoClient";


export default async function Personalizado({params}: {params: Promise<{slug: string}>}){

    const baseURL = process.env.NEXT_PUBLIC_APP_URL;

    const {slug} = await params;

    const res = await fetch(`${baseURL}/api/ingredients/${slug}`);

    const ingredients = await res.json();

    return (
        <PersonalizadoClient ingredients={ingredients} />
    )
}