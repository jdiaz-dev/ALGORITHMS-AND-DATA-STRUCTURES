

/* 
    MI BUSQUEDA BINARIA: 
        --solo funciona para arrays ordenados
        --la busqueda se hara en una de la mitades del array
*/

function busquedaBinaria(array, valor){
    let longitud = array.length 
    let midIndice = (longitud % 2 == 0) ? Math.floor(longitud / 2) - 1 : Math.floor(longitud / 2) 
    midIndice

    for(let x = ( valor < array[midIndice]) ? 0 : midIndice; x < array.length; x++){
        
        if(array[x] == valor)  return x
    }
    return false
}
/* 
    Complejidad de tiempo O(n/2)
*/
console.log(busquedaBinaria([1,2,3,4,5,6,7,8,9], 5))




