
/* 
    --mi merge sort
    --se prefiere para ordenar una "lista vinculada"
    --no depende de un elemento aleatorio como lo hace quicksort

    https://medium.com/javascript-algorithms/javascript-algorithms-merge-sort-c1c102b8cfa8
*/
function fusion(firstArray,secondArray){
    let resultado = [], indexOnFirst = 0, indexOnSecond = 0

    while(indexOnFirst < firstArray.length && indexOnSecond < secondArray.length){
        if(firstArray[indexOnFirst] < secondArray[indexOnSecond]){
            resultado.push(firstArray[indexOnFirst++])
            // resultado
        }else{
            resultado.push(secondArray[indexOnSecond++])
        }
    }

    let firstRestante = firstArray.slice(indexOnFirst),
        secondRestante = secondArray.slice(indexOnSecond)
    
    return resultado.concat(firstRestante).concat(secondRestante)
}

function ordenamientoPorFusion(array){

    if(array.length < 2){
        return array
    }

    var mitad = Math.floor((array.length) / 2),
        firstHalf = array.slice(0,mitad),
        secondHalf = array.slice(mitad)

    return fusion(ordenamientoPorFusion(firstHalf), ordenamientoPorFusion(secondHalf))

}
/* 
        Complejidad de tiempo O(nlogn)  = linealgoritmico
        Complejidad de espacio O(n)
*/
console.log(ordenamientoPorFusion([6,1,23,4,2,3,10]))   // [1, 2, 3, 4, 6, 23]

const numbers = [6,1,23,4,2,3,10]
const result1 = numbers.slice(0,4)
const result2 = numbers.slice(7)
result1
result2

let number = 1
const element = numbers[number++]
element
number

