const prompt = require("prompt-sync")();

console.log("Calculadora de Preço de Maçãs");

const quantidade = parseInt(prompt("Digite o número de maçãs compradas: "));

if (isNaN(quantidade) || quantidade < 0) {
  console.log("Por favor, insira uma quantidade válida.");
} else {
  const preco = quantidade < 12 ? 0.3 : 0.25;
  const total = quantidade * preco;
  console.log(`O valor total da compra é: R$ ${total.toFixed(2)}`);
}
