

/* 
OPERADOR SPREAD (...) - nos permite obtener una lista de parametros de un array o matriz
*/
var numbers = [1, 2, 3, 4];
function addFourNums(a, b, c, d) {
    return a + b + c + d;
}

console.log(addFourNums(...numbers));//operador spread


//OBTENER EL MAXIMO Y EL MINIMO VALOR DE UN ARRAY
var numeros = [1,100,-10, 2, 3, 4];
console.log(Math.max(...numeros))
console.log(Math.min(...numeros))


//usando el metodo apply() y pasando como primer parametro "null"
var array2 = [3,2,-123,2132,12];
console.log(Math.max.apply(null,array2))
console.log(Math.min.apply(null,array2))