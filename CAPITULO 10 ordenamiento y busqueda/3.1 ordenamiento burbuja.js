//Ordenamiento burbuja libro

/* 
    ALGORITMOS DE ORDENAMIENTO
        --El algoritmo de ordenamiento es uno de los mas importantes en las ciencias de la computacion
        --Es mas facil buscar un item en un array ordenado que en uno desordenado
        --Hay consideraciones que se debe de tener en cuenta cuando se ordena algoritmos
        --Existe varias tecnicas de ordenamiento
*/

/* 
    ORDENAMIENTO BURBUJA

        --Es uno de los mas simples
        --Consiste en iterar el array intercambiando elementos si uno es mayor que otro
*/

function bubbleSort(array) {
    for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
        for (var j = 0; j < arrayLength - 1 - i; j++) {

            //si el primero es mayor
            if (array[j] > array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSort([6, 1, 2, 3, 4, 5]))