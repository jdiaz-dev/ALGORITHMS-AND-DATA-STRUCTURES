//slice: rebanar , splice: empalmar


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]

/* 
slice(begin, end) - devuelve parte de un array sin modificar a este 
                  - begin: es donde comenzara a extraer
                  - end: extraera hasta 1 antes de "end" 
                  - si tiene un solo parametro, extraera desde ahi hasta el final
*/
console.log(fruits.slice(1))
console.log(fruits.slice(1,3))

console.log(fruits.slice() == fruits)   //es falso porque el contenido es el mismo mas no la direccion de memoria



//UTILIDAD PARA COPIAR UN ARRAY
var array1 = [1,2,3,4]
var array2 = array1

array1
array2

array2[0] = 5   //cambiara tambien el valor de array1 porque este array2 hace referencia al valor de array 1

array1
array2




//OTRA OPCION PARA COPIAR - Array.from() -> para crear un nuevo array
var numeros1 = [1,2,3,4]
var numeros2 = Array.from(numeros1)

numeros1
numeros2

numeros2[0] = 5 //solamente cambiara el valor de numeros2

numeros1
numeros2