
//interseccion de los conjuntos A y B
var setA = new Set([1,2,3,4])   // se puede ingresar un array con numeros
setA

var setB = new Set([2,3])
setB



function interseccion(setA, setB){
    let interseccion = new Set()

    for(let elem of setA){
        if(setB.has(elem)){
            interseccion.add(elem)
        }
    }

    return interseccion
}
console.log(interseccion(setA, setB))