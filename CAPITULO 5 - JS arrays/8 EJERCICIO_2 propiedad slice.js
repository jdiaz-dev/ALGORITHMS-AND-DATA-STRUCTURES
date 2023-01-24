
var numeros = [1,2,3,4,5,6,7,8,9]

function simularArraySlice(array, primerParam, segundoParam){

    let rebanado = []

    if( !primerParam && !segundoParam){
        return array
    }

    if(!segudoParam){
        for(let x = primerParam, y = 0; x < array.length; x++, y++){
            rebanado[y] = array[x]
        }

        return rebanado
    }

    for(let a = primerParam, b = segudoParam -1 , c = 0; a <= b; a++, c++ ){
        rebanado[c] = array[a]
    }

    return rebanado
}

//complejidad de tiempo O(n)
//complejidad de memoria O(n)
console.log(simularArraySlice(numeros))


