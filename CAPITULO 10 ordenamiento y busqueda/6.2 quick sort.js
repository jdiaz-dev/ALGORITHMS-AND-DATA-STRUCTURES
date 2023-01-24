/* 
    
    --mi algoritmo de ordenamiento rapido (fuente web)
    --se escoje un pivote 
    --se escoje un puntero en la izquierda y la derecha, estos seran comparados con el pivote
    --los menores al pivote a la izquierda, los mayores al pivote a la derecha
    --entonces el pivote estara bien ordenado
    --los sub-elementos(izquierda y derecha), son los elemntos pasados recursivamente (divide y venceras)
    
    --El pivote ideal es un termino central
*/

let counter = 0
function ordenamientoRapido(array){
    counter++
    console.log(counter)
    if(array.length < 1){
        return []
    }

    let izquierda = [], derecha = [], pivote = array[0]
    
    for(let x = 1; x < array.length; x++){
        if(array[x] < pivote){
            izquierda.push(array[x])
        }else{
            derecha.push(array[x])
        }
    }

            //contatenara sin tener array dentados dentro
    return [].concat(ordenamientoRapido(izquierda),pivote,ordenamientoRapido(derecha))

}

/* 
    Complejidad de tiempo O(nlogn)  -> en el mejor de los casos
    Complejidad de tiempo O(n^2)    -> en el peor de los casos
    Complejidad de espacio O(nlogn)
*/
// console.log(ordenamientoRapido([6, 1, 23, 4, 2, 3]))



