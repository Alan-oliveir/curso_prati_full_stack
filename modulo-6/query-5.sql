SELECT
    c.data_comanda,
    SUM(ic.quantidade * ca.preco_unitario) AS faturamento_total_dia
FROM
    Comanda c
JOIN
    Itens_Comanda ic ON c.codigo_comanda = ic.codigo_comanda
JOIN
    Cardapio ca ON ic.codigo_cardapio = ca.codigo_cardapio
GROUP BY
    c.data_comanda
ORDER BY
    c.data_comanda;
