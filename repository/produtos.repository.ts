import { pool } from "@/lib/db";

export const getAllProducts = async () => {
    const res = await pool.query("SELECT * FROM produtos;");

    return res.rows;
}

export const deleteProducts = (ids: number[]) => {

    const placeholders = ids.map(id => "?").join(",");

    return pool.query(`DELETE FROM products WHERE id IN (${placeholders})`, ids);
}