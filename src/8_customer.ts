/*  Tipo que define nossa entidade
    Muito cuidado ao tratar tipos como entidade. 

    Entidades no DDD são classes mais ricas, que contém value-objects,
    seu próprio tratamento de erros e contexto delimitado.

    De todo modo, em APIs de baixa complexidade, é comum a utilização de
    tipos referindo-se a entidade.

    leia o artigo:
    https://medium.com/@alessandro.traversi/getting-started-with-domain-driven-design-in-typescript-a-practical-introduction-4b2082a44287
*/

export type Customer = {
  name: string;
  email: string;
};