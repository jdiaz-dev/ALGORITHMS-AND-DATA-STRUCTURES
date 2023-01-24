
var board = [['O', 'X', '-'], ['-' ,'X', 'O'], ['O', 'X', '-']];

function revisarEnDiente(array, ganador){

    for(let w = 0; w < array.length; w++){
        if(array[w] == ganador){
            return w
        }
    }
}

function ganadorTresEnRaya(array, ganador){

    let posiciones = {}

    for(let x = 0; x < array.length; ++x){
        let posicion = revisarEnDiente(array[x], ganador)

        //si es poscion es '-' o undefined es falso
        if(posicion == '-' || posicion == undefined){
            return false  

        }else if(posiciones[posicion]){
            posiciones[posicion]++

        }else if(posiciones[posicion] == undefined){
            posiciones[posicion] = 1
               
        }
        
    }

    //revisamos el objeto posiciones
    let suma = 0
    for(let y in posiciones){
        
        if(posiciones[y] == 3){
            return true
        }else{
            if(posiciones[y] == 1){
                suma += posiciones[y]
            
                if(suma == 3){
                    return true
                }
            }
            
        }
    }
    return false
}
/* 
Complejidad de tiempo:O(n*m) n = filas, m = columnas 
Complejidad de tiempo:O(n)   

*/
console.log(ganadorTresEnRaya(board, 'X'))





/* 
var board = [['O','-','X'],['-','O','-'],['-','X','O']];

[['O', 'X', '-'], ['-' ,'X', 'O'], ['O', 'X', '-']]
*/