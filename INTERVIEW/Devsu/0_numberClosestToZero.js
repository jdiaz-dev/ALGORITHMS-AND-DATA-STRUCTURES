function ordenamientoRapido(array){

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

    return [].concat(ordenamientoRapido(izquierda),pivote,ordenamientoRapido(derecha))

}

function computeClosestToZero(ts) {
    // Write your code here
    // To debug: console.error('Debug messages...');
    if(ts.length === 0) return 0

    const arrOrdered = ordenamientoRapido(ts)

    let res
    for(let x = 0; x < arrOrdered.length; x++){
        if(arrOrdered[x] > 0 ) res = arrOrdered[x]
    }
    return -1;
}

