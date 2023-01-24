
//mi solucion al algoritmo para encontrar el elemento que aparece solo una vez en el array ejercicio3

var array = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8]
var array2 = [1, 1, 3, 3, 4, 4, 5, 5, 7, 7, 8]
function findElementOnce(array){

    let x = 0
    while(x < array.length){
        if(array[x] == array[x + 1]){
            x += 2
        }else{
            return array[x]
        }
    }
}
/* 
    Complejidad de tiempo O(n)
    Complejidad de memoria O(1)
*/
console.log(findElementOnce(array2))