
function elementosDuplicadosDeUnArray(arr){

    let conjunto = new Set(arr)

    if(conjunto.size < arr.length){
        return true
    }else{
        return false
    }
    
}
/* 
    Complejidad de tiempo O(n) -> Tiene que iterar todos los elementos del array para pasarlo al conjunto
    Complejidad de espacio O(n)
*/
console.log(elementosDuplicadosDeUnArray([1,1,2,3,4,5]))
