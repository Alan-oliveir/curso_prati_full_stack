function fatorial(n) {
  if (n < 0) {
    throw new Error("n deve ser não-negativo");
  }
  if (n === 0) {
    return 1;
  }
  return n * fatorial(n - 1);
}

const prompt = require("prompt-sync")();
let numero = Number(prompt("Digite um número: "));
console.log(fatorial(numero));
