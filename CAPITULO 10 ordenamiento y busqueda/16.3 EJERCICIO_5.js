
//mi solucion al EJERCICIO_5. Implementar un contador de palabras, el resultado debe ser un objeto
var texto = 'practice makes perfect get perfect by practice just practice'

function countingSort(objeto, low, max){

    let puntajes = [], //para guardar los contadores del objeto
                      //counting sort se hara aqui mismo
        contadorDePuntajes = [],
        ordenInvertido

    for(let y in objeto){
        puntajes.push(objeto[y])
    }

    //lenamos counterOfAmount con ceros
    for(let x = 0; x <= max; x++){
        contadorDePuntajes[x] = 0
    }

    //aumentamos el contador segun el puntaje
    for(let y = 0; y < puntajes.length; y++){
        contadorDePuntajes[puntajes[y]]++
    }
    
    /* ordenamos usando contting sort */
    let index = 0

    //iteracion de min a max
    for(let z = low; z <= max; z++){
        while(contadorDePuntajes[z] > 0){
            puntajes[index] = z
            contadorDePuntajes[z]--
            index++
        }
    }

    ordenInvertido = puntajes.reverse()
    
    return ordenInvertido
}

function countingSortHelper(objeto){
    return countingSort(objeto, 1, 3)
}

function countWordsHelper(texto){
    let palabras = texto.split(' '), countHash = {}, response = {}
    
    for(let x in palabras){
        if(!countHash[palabras[x]]){
            countHash[palabras[x]] = 1
        }else{
            countHash[palabras[x]]++
        }
    }
    
    const ordenInvertido = countingSortHelper(countHash)    //el ordenInvertido es un array

    for(let x in ordenInvertido){
        for(let y in countHash){
            if(ordenInvertido[x] == countHash[y]){

                //clave       //valor
                response[y] = ordenInvertido[x]
            }
        }
    }

    return response
}

/* 
    Complejidad de general de tiempo 0(n^2)
    Complejidad de espacio O(n)
*/
console.log(countWordsHelper(texto))

