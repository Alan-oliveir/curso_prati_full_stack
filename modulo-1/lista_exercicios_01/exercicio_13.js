const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;

console.log(
  "Digite números decimais para calcular a média (digite 0 para encerrar):"
);

while (true) {
  const numero = parseFloat(prompt("Digite um número: "));

  if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");
    continue;
  }

  if (numero === 0) {
    break;
  }

  soma += numero;
  contador++;
}

if (contador === 0) {
  console.log("Nenhum número foi inserido.");
} else {
  const media = soma / contador;
  console.log(
    `A média aritmética dos números inseridos é: ${media.toFixed(2)}`
  );
}
