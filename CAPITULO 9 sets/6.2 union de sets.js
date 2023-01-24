
/* UNION DE UN CONJUNTO SEGUN DEFINICION MATEMATICA*/
var setA = new Set([1,2,3,4,5,6])   // se puede ingresar un array con numeros

var setB = new Set([2,3,7])

var setC = new Set([15])


function union(setA, setB){
    let conjuntoUnion = new Set(setA)
    let hayUnion

    for(let x of setA){
        if(setB.has(x)){
            for(let y of setB){
                conjuntoUnion.add(y)
            }
            hayUnion = true
            break
        }
    }

    if(hayUnion){
        return conjuntoUnion
    }else{
        return false
    }
}
/* 
    Complejidad de tiempo O(n^2)
*/
console.log(union(setA, setB))


