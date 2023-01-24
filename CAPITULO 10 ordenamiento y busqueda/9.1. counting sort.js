/* 
    ALGORITMO COUNTING SORT DEL LIBRO

*/

function countingSort(array){

    //una manera efiiente sera ordenarlo en un objeto, el orden lo hace el objeto
    let hash = {}, arraySort = []
    
    for(let x = 0; x < array.length; x++){
        if(!hash[array[x]]){
            hash[array[x]] = 1         
        }else{
            hash[array[x]]++

        }
    }
    
    for(let key in hash){
        for(let y = 0; y < hash[key]; y++){
            arraySort.push(parseInt(key))
            hash[key]--
        }
    }
    
    return arraySort
}
/* 
    Complejidad de tiempo O(n + k); k = valor max del array
    Complejidad de espacio 0(k)
*/
console.log(countingSort([6, 1, 23, 2, 3, 2, 1, 2, 2, 3, 3, 1, 123, 123, 4, 2, 3]))

