import { Ingredients } from "@/types/ingredients";

export default function PersonalizadoClient({
  ingredients,
}: {
  ingredients: Ingredients[];
}) {
    
  console.log(ingredients);

  return <div>Personalizado</div>;
}
