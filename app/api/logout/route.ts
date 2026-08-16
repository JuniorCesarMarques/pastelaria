import { removeSessionById } from "@/repositories/sessions.repository";
import { getSession } from "@/services/auth.service";

export async function POST() {
  const session = await getSession();

  if (!session) {
    return Response.json({ error: "Não autenticado" }, { status: 401 });
  }

  const { rowCount } = await removeSessionById(session.id);

  if (rowCount === 0) {
    return Response.json({ error: "Erro ao efetuar logout" }, { status: 500 });
  }

  return Response.json(
    { message: "Logout efetuado com sucesso." },
    {
      status: 200,
      headers: {
        "Set-Cookie": "session=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax",
      },
    },
  );
}
