# Lista de Exercícios 02 - Curso Dev. Full Stack Jr - +Prati & Codifica

Este repositório contém os exercícios da **segunda lista de exercícios** do curso. Os exercícios foram desenvolvidos em JavaScript e podem ser executados localmente utilizando o Node.js.

## Pré-requisitos

Antes de começar, você precisará ter o seguinte instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

## Configuração do Ambiente

Siga os passos abaixo para configurar o ambiente e executar os exercícios:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd nome-do-repositorio
   ```

3. **Instale as dependências**: Execute o comando abaixo para instalar o pacote `prompt-sync`, necessário para capturar entradas do usuário no terminal:
   ```bash
   npm install prompt-sync
   ```

## Como Executar os Exercícios

Cada exercício está em um arquivo separado. Para executar um exercício, siga os passos abaixo:

1. No terminal, execute o comando:
   ```bash
   node nome-do-arquivo.js
   ```
   **OBS**: Substitua `nome-do-arquivo.js` pelo nome do arquivo do exercício que você deseja executar. Por exemplo: `node exercicio_01.js`

2. Siga as instruções exibidas no terminal para interagir com o programa.

## Lista de Exercícios

1. **Exercício 01**: Verifica se uma data é válida, considerando meses de 28–31 dias e ano bissexto para fevereiro.
2. **Exercício 02**: Jogo de adivinhação: o usuário tenta adivinhar um número aleatório de 1 a 100, recebendo dicas de "mais alto" ou "mais baixo".
3. **Exercício 03**: Recebe uma frase e retorna um array com todas as palavras únicas, sem repetições.
4. **Exercício 04**: Calcula o fatorial de um número de forma recursiva, tratando casos de entrada negativa.
5. **Exercício 05**: Implementa a função debounce, que limita a execução de uma função a um intervalo de tempo após a última chamada.
6. **Exercício 06**: Implementa a função memoize, que armazena em cache os resultados de chamadas anteriores de uma função para acelerar chamadas repetidas.
7. **Exercício 07**: Recebe um array de produtos (nome e preço) e retorna um novo array apenas com os nomes, ordenados por preço crescente.
8. **Exercício 08**: Recebe uma lista de vendas (cliente e total) e agrupa os totais por cliente usando reduce.
9. **Exercício 09**: Converte entre arrays de pares [chave, valor] e objetos, com funções para ambos os sentidos.
