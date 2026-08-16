import { pool } from "@/lib/db";

type CreateSessionParams = {
  userId: string;
  tokenHash: string;
  expiresAt: Date;
};

export async function createSession({
  userId,
  tokenHash,
  expiresAt,
}: CreateSessionParams) {
  const result = await pool.query(
    `
      INSERT INTO sessions (
        user_id,
        token_hash,
        expires_at
      )
      VALUES ($1, $2, $3)
      RETURNING id, user_id, expires_at
    `,
    [userId, tokenHash, expiresAt]
  );

  return result.rows[0];
}

export async function findSessionByTokenHash(tokenHash: string){

  const result = await pool.query("SELECT * FROM sessions WHERE token_hash = $1", [tokenHash]);

  return result.rows[0];
}

export async function removeSessionById(sessionId: string){

  return await pool.query("DELETE FROM sessions WHERE id = $1", [sessionId]);
}