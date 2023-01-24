
var matrix = [[1,0,1],
              [0,0,1],
              [1,1,1]];

function rotacionAlaIzquierda(array){

    let matrizRotada = []
    for(let indiceInicial = array.length - 1; indiceInicial >= 0; indiceInicial--){
        for(let posicionArray = 0; posicionArray <= array[0].length - 1 ; posicionArray++){
            matrizRotada.push(array[posicionArray][indiceInicial])
        }
    }

    return matrizRotada
}
/* 
complejidad de tiempo O(n*m) n = # de filas, m = # de columnas
complejidad de espacio 0(1)
*/
console.log(rotacionAlaIzquierda(matrix))