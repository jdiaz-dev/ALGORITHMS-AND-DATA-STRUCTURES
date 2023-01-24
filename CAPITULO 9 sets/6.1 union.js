
/* UNION DE UN CONJUNTO SEGUN EL LIBRO*/
var setA = new Set([1,2,3,4,5,6])   // se puede ingresar un array con numeros

var setB = new Set([2,3,7])

var setC = new Set([15])

function union(setA, setB){
    var conjuntoUnion = new Set(setA)

    for(let x of setB){
        conjuntoUnion.add(x)
    }

    return conjuntoUnion
}
console.log(union(setA, setC))