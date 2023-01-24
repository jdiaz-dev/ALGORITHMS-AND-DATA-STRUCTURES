
/* 
    MI ALGORITMO DE ORDENAMIENTO POR CONTEO

    --Este algoritmo de clasificacion no es por comparacion 
    --es de clasificacion por conteo
    --solo funciona para numeros
    --el ultimo paso es iterar desde valor minimo al valor maximo
    --disminuimos el valor de la matriz de conteo para que no se agrege demasiados elementos en ese valor
    
    --usar counting sort para un array con un rango limitado

    --los algoritmos de ordenamiento no pueden ejecutarse mas rapido que O(nlogn)
    --pero el counting sort puede ejecutarse con una velocidad O(n) si  O(n) = k; 
                                                                donde k = valor maximo del array entrante

    RECURSOS -> https://medium.com/javascript-algorithms/javascript-algorithms-counting-sort-c94a5fd70c9
    ANIMACION DE COUNTING SORT  -->    https://www.cs.usfca.edu/~galles/visualization/CountingSort.html
    
*/

function countingSort(array, min, max){
    let b, countArray = []

    //por convencion el indice comienza en cero y termina en max
    for(let a = 0; a <= max; a++){
        countArray[a] = 0
    }
    
    for(b = 0; b < array.length; b++){
        countArray[array[b]] += 1
    }
    
    let d = 0 //contador = 0
    /* countArray */
    //revisar este bucle con el contador para ver la complejidad del algoritmo ( el grueso del asunto)
    //la iteracion empieza en min y termina en max
    for(b = min; b <= max; b++){
        while(countArray[b] > 0){
            array[d] = b
            d++
            countArray[b]--    

        }

    }

    return array
    
}
/* 
    Complejidad de tiempo O(n + k), k = valor maximo del array entrante
    Complejidad de espacio 0(k)
*/

console.log(countingSort([6,1,23,2,3,2,1,2,2,3,3,1,123,123,4,2,3], 1, 123))