

//algoritmo de compresion de un numero
var diccionario = 'abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split("")
console.log(diccionario.length)

function codificarNumero(num){

    if(num === 0) return diccionario[0]

    let base = diccionario.length
    let codificado = ""

    while(num > 0){
        codificado += diccionario[(num % base)]
        num = Math.floor(num / base)
    }

    return invertirCodificado(codificado)
}
console.log(codificarNumero(11231230))

function invertirCodificado(codificado){

    let invertido = ""

    for(let i = codificado.length - 1; i >= 0; i--){
        invertido += codificado.charAt(i)
    }

    return invertido
}




//algoritmo de decodificacion (decodificacion del ejercicio anterior )
function decodificar(codificado){

    let base = diccionario.length
    let decodificado = 0

    for(let i=0; i < codificado.length; i++){
        decodificado = decodificado * base + diccionario.indexOf(codificado.charAt(i))
    }

    return decodificado
}

console.log(decodificar('VhU2'))