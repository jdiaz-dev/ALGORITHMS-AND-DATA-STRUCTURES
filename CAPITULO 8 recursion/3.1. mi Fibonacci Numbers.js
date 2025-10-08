/* mi solución a fibonaci numbers */

//establecemos los datos iniciales de los fibonacci numbers
function fibonacciNumbers(total, prevValue = 0, posteriorValue = 1) {
  //total es el cantidad de números que se queire imprimir

  //caso base : cuando se hay llegado al último numero a imprimir
  if (total == 0) return;

  console.log(prevValue);

  fibonacciNumbers(total - 1, posteriorValue, posteriorValue + prevValue);
}
fibonacciNumbers(19);
