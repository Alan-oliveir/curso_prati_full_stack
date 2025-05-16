const prompt = require("prompt-sync")();

let soma = 0;

console.log("Digite 5 números:");

for (let i = 1; i <= 5; i++) {
  const numero = parseFloat(prompt(`Digite o número ${i}: `));
  if (isNaN(numero)) {
    console.log("Por favor, insira um número.");
    i--;
  } else {
    soma += numero;
  }
}

console.log(`A soma total é: ${soma}`);
