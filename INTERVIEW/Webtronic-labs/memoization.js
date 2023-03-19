/*
    Ejercicio 2
    Dada una funcion que suma numeros desde 0 al limite. Implementa una solucion
    para optimizar las llamadas en caso de que sena repetitivas
*/
const sumNumber = (limit) => {
  let sum = 0;

  if (!this.hash) {
    this.hash = new Map();
  }

  if (this.hash.has(limit)) {
    console.log("-etnry");
    return this.hash.get(limit);
  }

  for (let i = 0; i < limit; i++) {
    sum += i;
  }

  this.hash.set(limit, sum);

  return sum;
};

console.time("sumNumber");
console.log(sumNumber(100000000));
console.log(sumNumber(2));
console.log(sumNumber(100000000));
console.timeEnd("sumNumber");
