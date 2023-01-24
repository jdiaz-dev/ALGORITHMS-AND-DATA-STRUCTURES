
/* 
    --mi ordenamiento por insercion 
    --escoje como menor al segundo, luego a patir de ese menor los menores a la izquiera y los mayores a la derecha, el menor sera el siguiente de la primera iteracion
    
    --aprovecha el ordenamiento que tiene de media
    --recomendabe para usarlo en algoritmos cortos

    https://medium.com/javascript-algorithms?source=post_page-----59b6b655373c----------------------

*/
function ordenamientoPorInsercion(array){

    for(let x = 1; x < array.length; x++){
        let clave = array[x],
            y = x - 1
            

        while(y >= 0 && array[y] > clave){
            
          //segundo        primero
            array[y + 1] = array[y]
            y = y - 1
        }
        //primero      segundo
        array[y + 1] = clave

    }
    return array
}
console.log(ordenamientoPorInsercion([6, 1, 23, 4, 2, 3]))