
function medianaDelArray(arr){

    let longitudDelArray = arr.length

    //array impar
    if(longitudDelArray % 2 == 1) return arr[Math.floor(longitudDelArray / 2)]

    //arraypar
    if(longitudDelArray % 2 == 0) return (arr[longitudDelArray / 2] + arr[longitudDelArray / 2 -1])/2
}
console.log(medianaDelArray([2,3]))

function mediadaDeDosArrays(arr1,arr2,pos){

    if(pos <= 0) return -1

    if(pos == 1) return (arr1[0] + arr2[0])/2

    if(pos == 2) return ( Math.max(arr1[0],arr2[0]) + Math.min(arr1[1], arr2[1]) ) / 2

    //si la longitud del array es mayor a 2
    let mediana1 = medianaDelArray(arr1),
        mediana2 = medianaDelArray(arr2)

    if(mediana1 == mediana2) return mediana1

    let resta = pos % 2 == 0? 0:1,
        restarDelArray = pos - Math.floor(pos/2) - resta,
        longitudNewArray = pos - Math.floor(pos/2)
      
         //La recursion se hace con la mitad de datos, entonces tiempo O(Log2(n)) 
    return mediadaDeDosArrays(arr1.slice(restarDelArray), arr2.slice(0, -restarDelArray), longitudNewArray)

}

//complejidad de tiempo O(log2(n))
//complejidad de memoria O((n))
console.log(mediadaDeDosArrays([1, 2, 3], [4, 5, 6], 3));//3.5
console.log(mediadaDeDosArrays([1, 2, 3, 4], [5, 6, 7, 8], 4)); // 3.5
console.log(mediadaDeDosArrays([11, 23, 24], [32, 33, 450], 3)); // 28
console.log(mediadaDeDosArrays([32, 33, 450],[11, 23, 24], 3));
console.log(mediadaDeDosArrays([5, 6, 7, 8],[1, 2, 3, 4], 4))
console.log(mediadaDeDosArrays([4, 5, 6], [1, 2, 3],  3))