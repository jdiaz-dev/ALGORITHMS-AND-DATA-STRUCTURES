/* 
    --el metodo sort() es incorporado en JS
    --ordena los numeros en forma ascendente
    --ordena alfabeticamente, por lo tanto no sirve para numeros
    --this method use insertion sort algorithm, that means that is not appropiate for large data sets
*/

//no ordena numeros, debido a que a "sort()" no se le paso como parametro una funcion de comparacion
//los elementos fueron convertidos a stings y fueron ordenados
var array1 = [12,3,4,2,1,34,23,100,234];
console.log(array1.sort())

//puede ordenar letras del alfabeto
var array2 = ['feo','matematica','covid-19','algoritmos']
console.log(array2.sort())