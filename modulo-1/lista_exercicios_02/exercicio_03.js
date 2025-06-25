function palavrasUnicas(frase) {
  let palavras = frase.split(" ");
  let unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    let encontrada = false;

    // Verifica se a palavra já está no array de únicas
    for (let j = 0; j < unicas.length; j++) {
      if (palavra === unicas[j]) {
        encontrada = true;
        break;
      }
    }

    if (!encontrada) {
      unicas.push(palavra);
    }
  }

  return unicas;
}

const prompt = require("prompt-sync")();
let frase = prompt("Digite uma frase: ");
console.log(palavrasUnicas(frase));
