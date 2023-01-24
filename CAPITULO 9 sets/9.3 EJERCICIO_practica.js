
//interseccion de dos conjuntos

function elementosUnicosDeDosArrays(arr1, arr2){

    //solo convertiremos un arra1 a conjunto
    let arrConjunto = new Set(arr1)

    //interseccion de los conjuntos
    let interseccion = new Set()

    for(let x of arr2){
        if( arrConjunto.has(x) ){
            interseccion.add(x)
        }
    }

    return interseccion
}
console.log(elementosUnicosDeDosArrays([1,2,3,4,5], [5,4,3]))