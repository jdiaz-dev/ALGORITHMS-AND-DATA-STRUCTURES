
function valoresUnicosDeDosArraysSeparados(arr1, arr2){
    let union = new Set(arr1.concat(arr2))

    return Array.from(union)
}
/* 
    Complejidad de tiempo O(n + m), donde: n = # de elementos de arr1 y m = # de elementos de arr2
                                    ambos elementos deben se iterados para convertir a un set

    Complejidad de espacio O(n + m)
*/
console.log(valoresUnicosDeDosArraysSeparados([1,1,2,3,4,5], [4,5,6,6]))
