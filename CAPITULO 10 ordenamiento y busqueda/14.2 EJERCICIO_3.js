
//practicando la solucion del ejercicio3 del libro

function findOnceElement(array, low, high){
    if(low > high)  return null

    if(low == high) return array[high]

    let mid = Math.floor((low + high) / 2)
    if(mid % 2 == 0){
        if(array[mid] == array[mid + 1]){
            return findOnceElement(array, mid + 2, high)
        }else{
            return findOnceElement(array, low, mid)
        }
    }else{
        if(array[mid] == array[mid - 1]){
            return findOnceElement(array, mid + 1, high)
        }else{
            return findOnceElement(array, low, mid - 1)
        }
    }
}   
/* 
    Complejidad de tiempo O(log2 n)  -> logaritmo en base 2 de n
    Complejidad de espacio O(1)
*/
function findOnceElementHelp(array){
    return findOnceElement(array, 0, array.length - 1)
}
/* 

*/
console.log(findOnceElementHelp([ 1,1, 2, 2, 4, 4, 5, 5, 6, 6, 8 ]))