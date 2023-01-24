
/* 
    BUSQUEDA LINEAL: 
        --la busqueda puede hacerse en una estructura de dato ordenada o desordenada
        --hacer una busqueda lienal si el array esta desordenado

*/

function busquedaLineal(array, valor){
    for(let x in array){
        if(array[x] == valor)  return true
    }
    return false
}
/* 
    Complejidad de tiempo O(n)
*/
console.log(busquedaLineal([1,2,3,4,5,6,7,8,9], 6))
console.log(busquedaLineal([1,2,3,4,5,6,7,8,9], 10))