import { login } from "@/services/auth.service";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const result = await login(email, password);

    return Response.json(
      {
        user: result.user,
      },
      {
        headers: {
          "Set-Cookie": `session=${result.token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Lax`,
        },
      }
    );
  } catch {
    return Response.json(
      { error: "Email ou senha inválidos"},
      { status: 401 }
    );
  }
}