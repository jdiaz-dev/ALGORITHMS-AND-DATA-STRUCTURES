
/* 
fuente: https://dev.to/akhilpokle/quickselect-quicksort-on-steroids-solving-facebook-interview-question-3da4
    --El pivote es de ayuda para ordenar el array
    --el indice es para rastrear el elemento que se esta buscando
*/

function swap(array, index1, index2){
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

function partition(array, low, high){
    let pivot = array[high]
    let index = low //index rastreara la posición de cada elemento en orden

    for(let x = low; x < high; x++){
        if(array[x] <= pivot){
            swap(array, index, x)
            index++
        }
    }
    
    swap(array, index, high)
    return index 
}

function quickSelect(array, low, high, k){

    if(low > high) return

    let pivot = partition(array, low, high)

    if(pivot + 1 == k){
        return pivot
    }

    //intentamos acercar nuestro pivote a k 
    if(pivot < k){
        return quickSelect(array, pivot + 1, high, k)
    }else{
        return quickSelect(array, low, pivot - 1, k)
    }
    
}

var test2 = [1000,999,1,2,3,100,105]

let foundIndex = quickSelect(test2, 0, test2.length - 1, 7)
test2
console.log(test2[foundIndex])