# Lista de Exercícios - Banco de Dados - Curso Dev. Full Stack Jr - +Prati & Codifica

Este repositório contém o trabalho prático de **Banco de Dados** do curso. O projeto consiste na modelagem e implementação de um sistema de controle de vendas para a cafeteria BomGosto, utilizando MySQL.

## Descrição do Projeto

A cafeteria BomGosto deseja controlar suas vendas de café através de um sistema de comandas. O sistema permite:
- Cadastro de cafés no cardápio com nome, descrição e preço
- Registro de comandas com data, mesa e nome do cliente
- Controle de itens vendidos em cada comanda
- Consultas para análise de vendas e faturamento

## Modelagem do Banco de Dados

O sistema utiliza 3 tabelas principais:

### Tabela: Cardapio
Armazena os cafés disponíveis para venda.
- `codigo_cardapio` (PK, AUTO_INCREMENT)
- `nome_cafe` (UNIQUE)
- `descricao_composicao`
- `preco_unitario`

### Tabela: Comanda
Registra as comandas dos clientes.
- `codigo_comanda` (PK, AUTO_INCREMENT)
- `data_comanda`
- `numero_mesa`
- `nome_cliente`

### Tabela: Itens_Comanda
Relaciona os cafés vendidos em cada comanda (tabela associativa).
- `codigo_comanda` (PK, FK)
- `codigo_cardapio` (PK, FK)
- `quantidade`

## Lista de Consultas Implementadas

### 1. Listagem do Cardápio
Exibe todos os cafés ordenados por nome, com descrição e preço.

### 2. Comandas com Itens Detalhados
Apresenta todas as comandas com seus respectivos itens, incluindo:
- Dados da comanda (código, data, mesa, cliente)
- Dados dos itens (nome do café, descrição, quantidade, preço unitário, preço total)
- Ordenação por data, código da comanda e nome do café

### 3. Comandas com Valor Total
Lista todas as comandas com o valor total de cada uma, ordenadas por data.

### 4. Comandas com Múltiplos Cafés
Filtra apenas as comandas que possuem mais de um tipo de café, mostrando o valor total de cada comanda.

### 5. Faturamento por Data
Calcula o faturamento total agrupado por data, ordenado cronologicamente.

## Dados de Teste

O banco inclui dados de exemplo:
- **4 cafés** no cardápio (Espresso, Capuccino, Mocha, Café Coado)
- **3 comandas** registradas em datas diferentes
- **5 itens** distribuídos entre as comandas

## Conceitos Aplicados

- Modelagem de dados relacional
- Relacionamentos 1:N e N:N
- Chaves primárias compostas
- Chaves estrangeiras e integridade referencial
- Constraints (UNIQUE, CHECK)
- JOINs entre tabelas
- Funções de agregação (SUM, COUNT)
- Agrupamento com GROUP BY
- Filtros com HAVING
- Ordenação de resultados

## Licença

Este projeto foi desenvolvido como parte do curso Dev. Full Stack Jr - +Prati & Codifica.
