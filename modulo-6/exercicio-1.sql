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

-- Inserir cafés no cardápio
INSERT INTO Cardapio (nome_cafe, descricao_composicao, preco_unitario) VALUES
('Espresso', 'Café puro intenso', 5.00),
('Capuccino', 'Café, leite vaporizado e espuma', 8.50),
('Mocha', 'Café, chocolate, leite vaporizado e chantilly', 12.00),
('Café Coado', 'Café tradicional filtrado', 4.00);

-- Inserir comandas
INSERT INTO Comanda (data_comanda, numero_mesa, nome_cliente) VALUES
('2025-10-27', 5, 'Ana Beatriz'),
('2025-10-27', 3, 'Carlos Eduardo'),
('2025-10-28', 5, 'Ana Beatriz');

-- Inserir itens nas comandas
-- Comanda 1 (Ana Beatriz) - Pediu 2 tipos de café
INSERT INTO Itens_Comanda (codigo_comanda, codigo_cardapio, quantidade) VALUES
(1, 1, 1), -- 1 Espresso
(1, 3, 2); -- 2 Mochas

-- Comanda 2 (Carlos Eduardo) - Pediu 1 tipo de café
INSERT INTO Itens_Comanda (codigo_comanda, codigo_cardapio, quantidade) VALUES
(2, 2, 1); -- 1 Capuccino

-- Comanda 3 (Ana Beatriz) - Pediu 1 tipo de café
INSERT INTO Itens_Comanda (codigo_comanda, codigo_cardapio, quantidade) VALUES
(3, 4, 3); -- 3 Cafés Coados
