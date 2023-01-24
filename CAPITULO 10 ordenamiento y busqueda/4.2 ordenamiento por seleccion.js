
// Mi algoritmo de ordenamiento por seleccion
//https://medium.com/javascript-algorithms/javascript-algorithms-selection-sort-54da919d0513

function intercambio(array, index1, index2){
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

function ordenamientoPorSeleccion(array){

    for(let x = 0; x < array.length; x++){
        min = x

        for(let y = x + 1; y < array.length; y++){

            //despues de la iteracion siempre se estara buscando al menor
            if(array[y] < array[min]){
                min = y
            }
        }

        if(min != x){
            intercambio(array, x, min)
        }
    }
    return array
}
console.log(ordenamientoPorSeleccion([6, 1, 23, 4, 2, 3]))