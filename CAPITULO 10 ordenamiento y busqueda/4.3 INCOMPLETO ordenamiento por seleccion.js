
//algoritmo de ordenamiento por seleccion

function ordenamientoPorSeleccion(array){
    /* let final = array.length - 1 */
    let aEvaluar, mayor

    for(let final = array.length - 1 ; final > 4; final--){
        for(let x = 0; x < array.length; x++){

            if( array[final - 1] > array[final] ){    
                aEvaluar = array[final]
                array[final] = array[final - 1]
                array[final - 1] = aEvaluar
                aEvaluar
    
                movElUltimo = true
            }else if( array[final] != array[x]){
                aEvaluar = array[final - 1]            //[2,1,3,4,23,6]
                movElUltimo = false
                array
                
            }
    
            if(aEvaluar < array[x]){
                mayor = array[x]
                array[x] = aEvaluar
                aEvaluar = mayor

                array[final - 1] = aEvaluar
                array
                
            }
            aEvaluar = undefined
        }
    }
    
    return array
}
console.log(ordenamientoPorSeleccion([6,1,23,4,2,3]))