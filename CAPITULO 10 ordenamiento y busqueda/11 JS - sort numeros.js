//funcion de comparacion para ordenar numeros

                                    //a:  from arr[1] to arr[arr.length - 1]
                                    //b:  from arr[0] to arr[arr.length - 2]
function compararNumerosAscendente(a, b) {
  //I guess that b is higher and b is lower
  return a - b; //para ascentente
}
var array1 = [12, 3, 4, 2, 1, 34, 23, 100, 234];
array1.sort(compararNumerosAscendente);
array1;

var arr = [12, 3, 4, 2, 1, 34, 23, 100, 234];
function compararNumerosDescendente(a, b) {
  return b - a; //para descentente
}
arr.sort(compararNumerosDescendente);
arr;
