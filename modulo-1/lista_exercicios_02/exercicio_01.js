function ehDataValida(dia, mes, ano) {
  // Verifica se os valores são inteiros positivos
  if (
    !Number.isInteger(dia) ||
    !Number.isInteger(mes) ||
    !Number.isInteger(ano)
  )
    return false;
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;

  // Dias máximos para cada mês
  const diasPorMes = [
    31,
    ehBissexto(ano) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return dia <= diasPorMes[mes - 1];

  function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
  }
}

// Testes da função ehDataValida
const prompt = require("prompt-sync")();
let dia = Number(prompt("Digite o dia: "));
let mes = Number(prompt("Digite o mês: "));
let ano = Number(prompt("Digite o ano: "));
console.log("Data informada:", dia, mes, ano);
console.log(ehDataValida(dia, mes, ano));
