var contador = 0
function pascalTriangle(row, col){
    contador++
    console.log(contador)
    //avisamos la falta de parámetros
    if(row === undefined || col === undefined) return 'Without complete params'

    if(col === 0){

        //unicamente existe columna cero = 1
        return 1
    }else if(row === 0){

        //no existe fila cero
        return 0
    }else{
        
        //      izquierda              +            derecha
        return pascalTriangle(row - 1, col - 1) + pascalTriangle(row - 1, col)
    }
    /* 
        Complejidad de tiempo O(2^n) : n = número de niveles
    */
}

console.log(pascalTriangle(5,2)) //10