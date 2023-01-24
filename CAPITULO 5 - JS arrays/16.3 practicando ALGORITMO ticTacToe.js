var board1 = [['O','-','X'],['-','O','-'],['-','X','O']];
var board2 =   [['O', 'X', '-'], ['-' ,'X', 'O'], ['O', 'X', '-']]

function resisarFilas(array,letra){

    for(let i in array){
        if(array[i] != letra){
        
            return false
        }
    }

    return true
}
function resisarColumnas(array, columna, letra){

    for(let x in array){
        if(array[x][columna] != letra){
            
            return false
        }
    }

    return true
}

function ganadorTicTacToe(array, letra){

    let filas = resisarFilas(array,[0], letra) || resisarFilas(array[1], letra) || resisarFilas(array[2], letra)
    
    let columnas = resisarColumnas(array, 0, letra ) || resisarColumnas(array, 1, letra ) || resisarColumnas(array, 2, letra )

    let diagonalLeftToRight = (array[0][0] == letra && array[1][1] == letra && 
        array[2][2] == letra)

    let diagonalRigthToLeft = (array[0][2] == letra && array[1][1] == letra && 
        array[2][0] == letra)

    return filas || columnas || diagonalLeftToRight || diagonalRigthToLeft
}
/* 
complejidad de Tiempo: O(n) n = # de columnas
complejidad de espacio: O(n)
*/
console.log(ganadorTicTacToe(board2, 'X'))



