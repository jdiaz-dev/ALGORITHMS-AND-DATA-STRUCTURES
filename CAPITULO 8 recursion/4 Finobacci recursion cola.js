

//1, 1, 2, 3, 5, 8, 13, 21 …

function sequenciaFinonbacciMedianteRecursividad(ordinal, ultimo, ultimoUltimo){

    if(ordinal == 0) return ultimoUltimo
    if(ordinal == 1) return ultimo

    return sequenciaFinonbacciMedianteRecursividad(--ordinal, suma = ultimo + ultimoUltimo, ultimo)

}
/*  
    Complejidad de tiempo O(n) 
    Complejidad de espacio O(n) 
*/
console.log(sequenciaFinonbacciMedianteRecursividad(8, 1, 0))
