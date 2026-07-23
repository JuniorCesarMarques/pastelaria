import { deleteProducts, getAllProducts } from "@/repository/produtos.repository";

export async function GET() {
    
  try {
    const pratos = await getAllProducts();

    return Response.json(pratos, { status: 200 });
  } catch (err) {
    console.log("Erro interno do servidor:", err);

    return Response.json(
      { message: "Erro interno do servidor:" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request){

  try{
    const { ids } = await req.json();

    const { rowCount } = await deleteProducts(ids);

    return Response.json({deleted: rowCount});
  }catch(err){
    console.log("Erro interno no servidor:", err);

    return Response.json(
      { message: "Erro interno do servidor:" },
      { status: 500 },
    );
  }
}
