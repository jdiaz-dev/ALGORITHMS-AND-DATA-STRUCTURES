
//mi algoritmo para encontrar si dos numeros de un array summan un numero dado

function findTwoForTheSum(array,suma){
    let otherSumando

    for(let x = 0; x < array.length; x++){
        otherSumando = suma - array[x]
        
        let lowIndex = 0, hightIndex = array.length - 1, midIndex

        while(lowIndex <= hightIndex){
            midIndex = Math.floor((lowIndex + hightIndex) / 2)
            
            if(array[midIndex] == otherSumando){
                return [array[x], otherSumando]
            }else if(otherSumando < array[midIndex]){
                hightIndex = midIndex - 1
                
            }else if(otherSumando > array[midIndex]){
                lowIndex = midIndex + 1
            }
        }
    }

    return false
}

/* 
    Complejidad de tiempo O(nlogn)
    Complejidad de espacio O(1)
*/
console.log(findTwoForTheSum([1,3,4,5,6,7,8,9], 4))