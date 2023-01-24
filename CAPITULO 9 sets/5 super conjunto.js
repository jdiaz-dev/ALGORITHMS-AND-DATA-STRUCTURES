
/* SUPERCOJUNTO : Es un superconjunto si todos los elementos estan incluidos dentro de un conjunto de referencia

*/
var setA = new Set([1,2,3,4])   // se puede ingresar un array con numeros

var setB = new Set([2,3])

var setC = new Set([5])

function esSuperConjunto(setA, subConjunto){

    for(let x of subConjunto){
        if(!setA.has(x)){
            return false
        }else{
            
        }
    }
    return true
}
/* 
    --setA es un super conjunto de setB
    --setB es un sub-conjunto de setA
*/
console.log(esSuperConjunto(setA, setB))