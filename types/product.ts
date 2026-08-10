export type Product = {
    id: string;
    nome: string;
    descricao: string;
    categoria: string;
    imagem: string | null;
    preco: string;
    disponivel: boolean;
}