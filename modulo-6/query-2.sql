SELECT 
    c.codigo_comanda,
    c.data_comanda,
    c.numero_mesa,
    c.nome_cliente,
    ca.nome_cafe,
    ca.descricao_composicao,
    ic.quantidade,
    ca.preco_unitario,
    (ic.quantidade * ca.preco_unitario) AS preco_total_item
FROM 
    Comanda c
JOIN 
    Itens_Comanda ic ON c.codigo_comanda = ic.codigo_comanda
JOIN 
    Cardapio ca ON ic.codigo_cardapio = ca.codigo_cardapio
ORDER BY 
    c.data_comanda,
    c.codigo_comanda,
    ca.nome_cafe;
