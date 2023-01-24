

function elementosComunes(arr){

    let hashMap = {},
        respuesta = []

    for(let x in arr){
        let arrayActual = arr[x],
            ultimo = null

        for(let y in arrayActual){
            let elementoActual = arrayActual[y]

            if(ultimo != elementoActual){
                if(hashMap[elementoActual] == undefined){
                    hashMap[elementoActual] = 1
                }else{
                    hashMap[elementoActual]++
                }
            }

            ultimo = elementoActual
        }
        
    }

    for(let z in hashMap){
        if(hashMap[z] == arr.length){
            respuesta.push(z)
        }
    }

    return respuesta
}
console.log(elementosComunes([
    [1, 2, 3, 4],
    [1, 2, 2, 2, 3, 4],
    [1, 2, 4]
])); // [ 1, 2, 4 ]