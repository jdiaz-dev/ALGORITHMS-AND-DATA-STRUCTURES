
var M = [ [1, 2, 3, 4, 5], 
          [6, 7, 8, 9, 10], 
          [11, 12, 13, 14, 15], 
          [16, 17, 18, 19, 20]]

/* NO FUNCION0: NO ACTIVAR QUOKKA */
function espiralDeNumeros(array){

    let filaTop = 0,
        filaBotom= array.length - 1,
        columnaRight  = array[0].length - 1,
        columnaLeft = 0,
        totalCiclos = array.length / 2,
        espiral = []

    
    for(let ciclo = 1; ciclo <= totalCiclos; ++ciclo){
        ciclo
        
        for(let colum = columnaLeft; colum < columnaRight; ++colum){
             espiral.push(array[filaTop][colum])
            
        }
        filaTop += ciclo

        for(let fila = filaTop; fila <= filaBotom; ++fila){
            espiral.push(array[fila][columnaRight])
        }   
        columnaRight -= ciclo

        for(let colum = columnaRight; columnaRight >= columnaLeft; --colum){
            espiral.push(array[filaBotom][columnaRight])
        }
        filaBotom -= ciclo

        if(ciclo != 2){
            for(let fila = filaBotom; fila > filaTop; fila--){
                espiral.push(array[fila][columnaRight])
            }
            columnaLeft -= ciclo
        }
        
    }

    return espiral
}
console.log(espiralDeNumeros(M))