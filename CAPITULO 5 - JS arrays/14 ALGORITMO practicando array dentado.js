
function matriz(filas, columnas){

    let arrayDentado = new Array(filas)

    for(let x = 0; x < columnas; ++x){
        arrayDentado[x] = new Array(columnas)
    }
    return arrayDentado
}
console.log(matriz(3,4))



/* Para accdeder a un array dentado especificar la fila y columna */
var matrix3by3 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix3by3[0])
console.log(matrix3by3[1])
console.log(matrix3by3[2])

console.log(matrix3by3[0][0])
console.log(matrix3by3[2][2])
console.log(matrix3by3[1][2])
