
/* 
    INSERCION
        --Una funcion primara es revisar su unicidad
        --El set puede añadir items pero no duplicar
*/
var ejemploSet = new Set()
ejemploSet.add(1)
ejemploSet.add(2)

ejemploSet.add(1) //este elemento es repetido y no lo añadira

/* Complejidad de tiempo O(1) */
ejemploSet




/* 
    ELIMINACION
        --Devolvera un booleano: true -> si a eliminado, false -> si no lo hizo
        --Un array toma O(n) eliminar un elemento, mas en el set 0(1)
*/
var ejemploSet2 = new Set()
ejemploSet2.add(1)
ejemploSet2.add(2) 

/* Complejidad de tiempo O(1) */
ejemploSet2.delete(2)   //elimino elemento 2
ejemploSet2





/* 
    BUSQUEDA
        --Hace una rapida busqueda O(1) para ver si el elemento existe dentro del set
*/
var ejemploSet3 = new Set()
ejemploSet3.add(1)
ejemploSet3.add(2) 

/* Complejidad de tiempo */
console.log(ejemploSet3.has(2))