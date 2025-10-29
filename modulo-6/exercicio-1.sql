-- Tabela para o Cardápio
CREATE TABLE Cardapio (
    codigo_cardapio INT PRIMARY KEY AUTO_INCREMENT,
    nome_cafe VARCHAR(100) NOT NULL UNIQUE,
    descricao_composicao TEXT,
    preco_unitario DECIMAL(10, 2) NOT NULL
);

-- Tabela para a Comanda
CREATE TABLE Comanda (
    codigo_comanda INT PRIMARY KEY AUTO_INCREMENT,
    data_comanda DATE NOT NULL,
    numero_mesa INT,
    nome_cliente VARCHAR(255)
);

-- Tabela de Itens da Comanda (Tabela Associativa)
CREATE TABLE Itens_Comanda (
    codigo_comanda INT NOT NULL,
    codigo_cardapio INT NOT NULL,
    quantidade INT NOT NULL CHECK (quantidade > 0),
    
    -- Chave primária composta garante que o mesmo café não seja inserido duas vezes na MESMA comanda
    PRIMARY KEY (codigo_comanda, codigo_cardapio),
    
    -- Chaves estrangeiras
    FOREIGN KEY (codigo_comanda) REFERENCES Comanda(codigo_comanda),
    FOREIGN KEY (codigo_cardapio) REFERENCES Cardapio(codigo_cardapio)
);
