
//practicando busqueda binaria del libro

function busquedaBinaria(array, valor){
    let bajoIndex = 0,
        altoIndex = array.length - 1

    while(bajoIndex <= altoIndex){

        //continuamente ira dividiendo el array en dos secciones
        let midIndex = Math.floor( (altoIndex + bajoIndex) / 2)

        if(valor == array[midIndex]){
            return midIndex
        }else if(valor > array[midIndex]){
            bajoIndex = midIndex + 1
        }else{
            altoIndex = midIndex - 1
        }
    }

    return -1
}

/* console.log(busquedaBinaria([1,2,3,4,5,6,7,8], 6)) */
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log(busquedaBinaria(numbers, 20))