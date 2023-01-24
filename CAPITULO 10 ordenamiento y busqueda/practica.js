
function countingSort(array, low, max){

    let countingArray = []

    //el indice comienza en cero por convencion
    for(let x = 0; x <= max; x++){
        countingArray[x] = 0
    }

    for(let y = 0; y < array.length; y++){
        countingArray[array[y]]++
    }

    let index = 0
    for(let z = low; z <= max; z++){
        while(countingArray[z] > 0){
            array[index] = z
            countingArray[z]--
            index++
        }
    }
    
    return array
}

function countingSortHelper(array){
    return countingSort(array, 1, 123)
}

var numeros = [6,1,23,2,3,2,1,2,2,3,3,1,123,123,4,2,3]
console.log(countingSortHelper(numeros))

console.log(numeros.reverse())

var objeto = {practica:'feo',practica1:'feo1',practica2:'feo2'}

/* for(let x in objeto){
    console.log(x)
} */