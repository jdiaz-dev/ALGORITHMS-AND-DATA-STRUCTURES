
/* 
    --algoritmo del libro 
    --encontrar is hay dos numeros de un array que sumen un numero dado
*/

function findTwoSum(array, suma){

    let hashStore = {}

    for(let x = 0; x < array.length; x++){
        
        //revisamos la existencia de las claves
        if(hashStore[array[x]]){
            return true
        }else{
            hashStore[suma - array[x]] = 'nada'
        }

    }
    
    return false
}
console.log(findTwoSum([1,3,4,5,6,7,8,9], 17))
