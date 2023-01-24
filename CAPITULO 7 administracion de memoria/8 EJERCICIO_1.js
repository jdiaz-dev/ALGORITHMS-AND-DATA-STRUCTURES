

function arrayMuyGrande(){
    return new Array(10)
}
var objeto = {
    array1:arrayMuyGrande(),
    array2:arrayMuyGrande()
}
function imprimeArray(dato){
    return dato
}
console.log(imprimeArray(objeto['array1']))