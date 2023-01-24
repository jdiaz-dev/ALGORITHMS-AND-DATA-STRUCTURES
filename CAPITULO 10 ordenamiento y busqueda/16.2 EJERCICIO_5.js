

function wordCount(oracion){

    let palabras = oracion.replace(/[.]/g, '').split(' '),
        contadorDeOcurrencias = {},
        resultado = {}

    for(let x = 0; x < palabras.length; x++){
        if(!contadorDeOcurrencias[palabras[x]]){
            contadorDeOcurrencias[palabras[x]] = 1
        }else{
            contadorDeOcurrencias[palabras[x]]++
        }
    }

    let temArray = []

    for(let y in contadorDeOcurrencias){
        temArray.push([contadorDeOcurrencias[y], y])
    }
    
    function ordenar(a, b){
        return b[0] - a[0]  //ordenara en funcion al indice 0 (que contiene los numeros)
    }
    temArray.sort(ordenar)

    for(let z = 0; z < temArray.length; z++){
        let arrayDiente = temArray[z]
        resultado[arrayDiente[1]] = arrayDiente[0]
    }

    return resultado
}
/* 
    Complejidad de tiempo 0(nlog2 (n))  ---> por haber usar el motor de JS que es igual a la complejidad de quicksort o mergesort
    
    Complejidad de espacio(n)
*/
console.log(wordCount('practice makes perfect. get perfect by practice. just practice'))