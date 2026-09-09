import { pool } from "@/lib/db";

export async function getIngredientsBySlug(slug: string) {
  const res = await pool.query(
    `
    SELECT *
        FROM
    ingredientes AS A
        INNER JOIN
            lojas AS B
        ON
            A.loja_id = B.id
        WHERE
            B.slug = $1`,
    [slug],
  );

  return res.rows;
}

export async function getConfigIngredients(slug: string) {
  const res = await pool.query(
    `
    SELECT
        A.slug,
        A.config_produto_id,
        A.nome,
        A.quantidade,
        A.limite_config,
        A.unidade_medida,
        A.preco,
        A.imagem,
        B.ingrediente_id,
        B.ingrediente,
        B.limite_ingrediente
    FROM
        (
         SELECT 
            C.slug,
            A.id AS config_produto_id,
            A.nome,
            A.quantidade,
            A.limite AS limite_config,
            B.nome AS unidade_medida,
            A.preco,
            A.imagem
        FROM
            config_produto AS A
                INNER JOIN
            unidade_medida AS B
                ON
            A.unidade_medida_id = B.id
                INNER JOIN
            lojas AS C
                ON
            A.loja_id = C.id
        ) AS A
        LEFT JOIN
        (       
            SELECT 
                A.id AS ingrediente_id,
                B.config_produto_id,
                A.nome AS ingrediente,
                B.limite AS limite_ingrediente
            FROM
                ingredientes AS A
            INNER JOIN
                config_produto_ingrediente AS B
            ON
                A.config_produto_ingrediente_id = B.id
        ) AS B
        ON
            A.config_produto_id = B.config_produto_id
        WHERE
            A.slug = $1;
        `,
    [slug],
  );
}
