import { pool } from "@/lib/db";
import { StoreAppearence } from "@/types/appearence";

export async function getStoreAppearence(slug: string) {
  const res = await pool.query<StoreAppearence>(
    `SELECT
     * 
    FROM 
        store_appearence AS A
    INNER JOIN
        lojas AS B
    ON
        A.store_id = B.id
    WHERE 
        B.slug = $1;`,
    [slug],
  );

  return res.rows;
}
