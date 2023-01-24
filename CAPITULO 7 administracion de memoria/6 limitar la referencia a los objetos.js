
var objeto1 = {
    nombre:'Jonathan'
}

function imprimirValor(imformacion){
    return imformacion.nombre
}
//evitar pasar el objeto entero esto debido a que la memoria del objeto podria ser muy grande(ej: 100000 datos)
console.log(imprimirValor(objeto1))






function imprimirValor2(imformacion){
    return imformacion
}
//en lugar de ello utilizemos los valores que necesitemos del objeto
console.log(imprimirValor2(objeto1.nombre))