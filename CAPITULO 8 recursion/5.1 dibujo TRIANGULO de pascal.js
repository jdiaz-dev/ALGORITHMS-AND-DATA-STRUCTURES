
/* 
    --Este algoritmo dibuja el triangulo de Pascal
*/
function trianguloDePascal(filas, a){

    if(filas < 2)   return a

    let arrayDiente = a[a.length - 1]
    let nuevoArrayDiente = [1]
    
    for(let x = 1; x < arrayDiente.length; x++){
        nuevoArrayDiente[x] = arrayDiente[x] + arrayDiente[x - 1]
    }
    nuevoArrayDiente.push(1)
    a.push(nuevoArrayDiente)

    return trianguloDePascal(filas - 1, a)

}
var triangulo = trianguloDePascal(8, [[1]])
triangulo

