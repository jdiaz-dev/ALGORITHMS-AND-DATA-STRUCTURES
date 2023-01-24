

//1, 1, 2, 3, 5, 8, 13, 21 …

function sequenciaFinonbacciMedianteFor(ordinal){
    let suma,
        ultimo = 1,
        ultimoUltimo = 0
    

    for(let x = 1; x < ordinal; x++ ){
        suma = ultimo + ultimoUltimo
        ultimoUltimo = ultimo
        ultimo = suma
    }
    return suma
}
/* 
    Complejidad de tiempo: O(n)
*/
console.log(sequenciaFinonbacciMedianteFor(8))