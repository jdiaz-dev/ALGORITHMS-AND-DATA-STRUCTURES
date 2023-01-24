
var M = [ [1, 2, 3, 4, 5], 
          [6, 7, 8, 9, 10], 
          [11, 12, 13, 14, 15], 
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25] ];


function impresionEnEspiral(array){

    let aLaDerecha = 0,
        haciaAbajo = 1,
        aLaIzquierda = 2,
        haciaArriba = 3,
        arrayDiente,
        ciclos = Math.ceil(array.length / 2),
        espiralDeNumeros = [],
        longitudArrays = array.length,
        direcciones = 3

    for(let contador = 0; contador < ciclos; ++contador){

                            //las direcciones es despreciable para la notacion O(n)
        for(let x = 0 ; x <= direcciones; ++x){// x contador del array principal
            
            if(x == aLaDerecha){
                arrayDiente = array[x + contador]
                
                //longitud del sub-array se ira reduciendo en cada iteracion
                for( let posicionIn = 0 + contador; posicionIn <= arrayDiente.length - 1 - contador; ++posicionIn){
                    espiralDeNumeros.push(arrayDiente[posicionIn]) 
                }               
             }
            else if(x == haciaAbajo){
    
                // la iteracion sera en la parte media den array dentado
                //posicion - posicion del array principal
                for(let posicionArray = 1 + contador, parteMedia = longitudArrays - 2 - contador; posicionArray <= parteMedia; ++posicionArray){
                    posicionArray
                    espiralDeNumeros.push(array[posicionArray][array[x].length - 2 - contador])
                
                }
            }
            else if(x == aLaIzquierda){

                arrayDiente = array[array.length -1 - contador]
                
                //iteracion a la izquierda
                for(let posicionIn = array[x].length - 1 - contador, posicionFi = 0 + contador; posicionIn >= posicionFi ; --posicionIn){
                    espiralDeNumeros.push(arrayDiente[posicionIn]) 
                }
            }
            else if(x == haciaArriba){
                
                for(let posicionArray = longitudArrays - 2 - contador; posicionArray >= 1 + contador  ; --posicionArray ){
                    espiralDeNumeros.push(array[posicionArray][contador])
                }
            }
        }

       
    }
    return espiralDeNumeros
}
/* 
Complejidad de tiempo: 0(5n) k = 5
                     : 5(n)

Comlejidad de Memoria: O(n)
*/
console.log(impresionEnEspiral(M))

/* 
var M = [ [1,   2,  3,  4,  5], 
          [6,   7,  8,  9, 10], 
          [11, 12, 13, 14, 15], 
          [16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25] ]; 
*/