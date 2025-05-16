const prompt = require("prompt-sync")();

console.log("Calculadora de IMC");

const peso = parseFloat(prompt("Digite o seu peso em kg: "));
const altura = parseFloat(prompt("Digite a sua altura em metros: "));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  console.log("Por favor, insira valores válidos para peso e altura.");
} else {
  const imc = peso / (altura * altura);
  console.log(`Seu IMC é: ${imc.toFixed(2)}`);

  if (imc < 18.5) {
    console.log("Categoria: Baixo peso");
  } else if (imc >= 18.5 && imc < 24.9) {
    console.log("Categoria: Peso normal");
  } else if (imc >= 25 && imc < 29.9) {
    console.log("Categoria: Sobrepeso");
  } else {
    console.log("Categoria: Obesidade");
  }
}
