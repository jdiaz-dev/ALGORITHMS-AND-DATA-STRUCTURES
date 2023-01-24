
function intercambio(arr, indice1, indice2){
    let mover = arr[indice1]

    arr[indice1] = arr[indice2]
    arr[indice2] = mover
}

function permutacion(arr, inicio, final){

    //no pude guardar las respuestas en un array
    /* if(!permutaciones){
        var permutaciones = []
    } */
    
    if(inicio == final){
        permutaciones.push(arr)
        
    }else{
        for(let x = inicio; x < final + 1; x++){
            intercambio(arr, inicio, x)
            permutacion(arr, inicio + 1, final)
            intercambio(arr, inicio, x)
        }
        
    }
    
}

function permutacionArray(arr){
    permutacion(arr, 0, arr.length - 1)
    
}
/* 
    Complejidad de tiempo O(n!)
    Complejidad de estapcio O(n!)
*/
console.log(permutacionArray(['A','B','C']))