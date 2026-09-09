import { getIngredientsBySlug } from "@/repositories/ingredients.repository";


export async function GET(req: Request, {params}: {params: Promise<{slug: string}>}){
    
    try{
    const { slug } = await params;  

    const ingredients = await getIngredientsBySlug(slug);

    return Response.json(ingredients, {status: 200});
    }catch(err){
        console.log(err);
        return Response.json({message: "Erro interno do servidor"}, {status: 500});
    }
}