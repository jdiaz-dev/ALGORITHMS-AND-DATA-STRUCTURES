
/* mi algoritmo de d busqueda sobre si tiene raiz cuadrada exacta*/

//funcion que crea un array de todos las posibles raices hasta un limite pasado como la raiz a buscar
function raices(limitRoot){
    let arrayRaices = []
    
    let intervalRoot = 1
    for(let square = 1; square <= limitRoot; square = square + intervalRoot){
        arrayRaices.push(square)
        intervalRoot = intervalRoot + 2
    }
    return arrayRaices
}
console.log(raices(100))


//funcion que hara una busqueda binaria del numero dado como parametro
function raizCuadrada(num){
    let limite = 100, roots = raices(num)

    let lowIndex = 0, hightIndex = roots.length - 1, midIndex

    while(lowIndex <= hightIndex){
        midIndex = Math.floor((lowIndex + hightIndex) / 2)

        if(roots[midIndex] == num){
            return 'Si es raiz exacta'
        }else if(num < roots[midIndex]){
            hightIndex = midIndex - 1
        }else if(num > roots[midIndex]){
            lowIndex = midIndex + 1
        }
    }

    return 'No es raiz exacta'
}
console.log(raizCuadrada(49))