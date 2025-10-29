SELECT
    c.codigo_comanda,
    c.data_comanda,
    c.numero_mesa,
    c.nome_cliente,
    SUM(ic.quantidade * ca.preco_unitario) AS valor_total_comanda
FROM
    Comanda c
JOIN
    Itens_Comanda ic ON c.codigo_comanda = ic.codigo_comanda
JOIN
    Cardapio ca ON ic.codigo_cardapio = ca.codigo_cardapio
GROUP BY
    c.codigo_comanda,
    c.data_comanda,
    c.numero_mesa,
    c.nome_cliente
HAVING
    COUNT(ic.codigo_cardapio) > 1
ORDER BY
    c.data_comanda;
