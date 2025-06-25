function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.hasOwnProperty(key)) {
      // Resultado já está em cache
      return cache[key];
    }
    // Calcula e armazena no cache
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Exemplo de uso:
function soma(a, b) {
  console.log(`Calculando soma(${a}, ${b})`);
  return a + b;
}

const somaMemo = memoize(soma);

console.log(somaMemo(2, 3)); // Calcula e mostra 5
console.log(somaMemo(2, 3)); // Retorna do cache, mostra 5 instantaneamente
console.log(somaMemo(4, 1)); // Calcula e mostra 5
console.log(somaMemo(2, 3)); // Retorna do
