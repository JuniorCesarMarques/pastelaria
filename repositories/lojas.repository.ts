import { pool } from "@/lib/db";

export async function getStoreBySlug(slug: string){
    const res = await pool.query(`SELECT * FROM lojas WHERE slug = $1`, [slug]);

    return res.rows[0] ?? null;
}