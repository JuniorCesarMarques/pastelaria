import { pool } from "@/lib/db";


export async function findUserByEmail(email: string) {

    const res = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);

    return res.rows[0] ?? null;
};