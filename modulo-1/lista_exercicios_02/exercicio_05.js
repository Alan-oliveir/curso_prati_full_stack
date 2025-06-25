function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Exemplo de uso:
function teste() {
  console.log("Função executada após o delay!");
}

const prompt = require("prompt-sync")();
let delay = Number(prompt("Informe o delay em milissegundos: "));
const debouncedTeste = debounce(teste, delay);

// Chame debouncedTeste várias vezes rapidamente, só executa após passar o tempo do delay sem chamadas.
debouncedTeste();
debouncedTeste();
debouncedTeste();
debouncedTeste();
