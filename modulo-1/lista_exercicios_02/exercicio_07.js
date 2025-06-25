function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice() // cria uma cópia do array para não modificar o original
    .sort((a, b) => a.preco - b.preco)
    .map((produto) => produto.nome);
}

const prompt = require("prompt-sync")();
let produtos = [];

console.log("Informe os produtos. Digite 'fim' para encerrar.");

while (true) {
  let nome = prompt("Nome do produto: ");
  if (nome.toLowerCase() === "fim") break;
  let preco = Number(prompt("Preço do produto: "));
  produtos.push({ nome: nome.trim(), preco: preco });
}

console.log("Nomes ordenados por preço crescente:");
console.log(nomesOrdenadosPorPreco(produtos));
