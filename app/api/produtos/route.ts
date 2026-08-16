import {
  deleteProducts,
  getAllProducts,
  insertProduct,
  updateProduct,
} from "@/repositories/produtos.repository";
import { getSession } from "@/services/auth.service";

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

export async function POST(req: Request) {
  try {
    const session = await getSession();

    if (!session) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = await req.json();

    const inserted = await insertProduct(body);

    if (inserted === 0) {
      return Response.json(
        { error: "Não foi possivel cadastrar o produto!" },
        { status: 400 },
      );
    }

    return Response.json(
      { message: "Produto criado com sucesso" },
      { status: 201 },
    );
  } catch (err) {
    console.log(err);
    return Response.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}

export async function PUT(req: Request) {
  try {
    const session = await getSession();

    if (!session) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }

    const body = await req.json();

    const updated = await updateProduct(body);

    if (updated === 0) {
      return Response.json(
        { error: "Produto não encontrado" },
        { status: 404 },
      );
    }

    return Response.json({ message: "Produto editado com sucesso" });
  } catch (err) {
    console.log(err);
    return Response.json(
      { error: "Erro interno do servidor" },
      { status: 500 },
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getSession();

    if (!session) {
      return Response.json({ error: "Não autenticado" }, { status: 401 });
    }
    
    const { ids } = await req.json();

    const { rowCount } = await deleteProducts(ids);

    return Response.json({ deleted: rowCount });
  } catch (err) {
    console.log("Erro interno no servidor:", err);

    return Response.json(
      { message: "Erro interno do servidor:" },
      { status: 500 },
    );
  }
}
