

/* 
para resolver este algoritmo se utilizo:
    los indices del array
    la diferencia entre suma y cada valor del array
*/
var numeros = [1,2,3,4,5]

function encontrarMejorAlgoritmoDeSuma(arr, suma){

    var tablaHash = {}

    for(let x = 0; x < arr.length; x++){
        let valorActual = arr[x],
            diferencia = suma - valorActual
        
        //verificamos el valor del indice
        if( tablaHash[valorActual] != undefined){
            return [x, tablaHash[valorActual] ]
        }else{

            //usamos la diferencia para guardar el indice
            tablaHash[diferencia] = x
        }

    }

    return -1
}
//complejidad de tiempo O(n)
//complejidad de memoria O(n)
console.log(encontrarMejorAlgoritmoDeSuma(numeros,9))