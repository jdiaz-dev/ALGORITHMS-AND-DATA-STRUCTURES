
/* DIFERENCIA DE CONJUNTOS : los elementos de A que no esten incluidos en B */
var setA = new Set([1,2,3,4,5,6])   

var setB = new Set([2,3,7])

var setC = new Set([15])

function diferencia(setA, setB){
    let conjuntoDiferencia = new Set(setA)
    
    for(let x of setB){
        if(setA.has(x)){
            conjuntoDiferencia.delete(x)
        }
    }
    return conjuntoDiferencia
}
console.log(diferencia(setA, setB))