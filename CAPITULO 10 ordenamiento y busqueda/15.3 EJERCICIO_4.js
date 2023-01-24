
//mi solucion al ejercicio_4 : ordenar un array de strigs por su longitud

var mythical = ['dragon', 'slayer','magic','wizard of oz', 'ned stark'];

function quickSortByLengthString(array){

    if(array.length < 1)    return []
    
    let pivot = array[0], lengthPivot, left = [], right = []

    for(let x = 1; x < array.length; x++){
        lengthPivot = pivot.length

        if( lengthPivot > array[x].length){
            left.push(array[x])
        }else{
            right.push(array[x])
        }
    }

    return [].concat(quickSortByLengthString(left), pivot, quickSortByLengthString(right))
}
console.log(quickSortByLengthString(mythical))