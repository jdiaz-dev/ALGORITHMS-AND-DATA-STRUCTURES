
/* 
-las cuatro operaciones fundamentales en JS son:
                 acceso, 
                 insertar, 
                 eliminar y 
                 buscar
            
 */

var array1 = [0,1,2,3]

/* -INSERCION-
push() - añade un nuevo elemento al final del array
       - la complejidad de este metodo es O(1)
  */          
array1.push(11)
array1.push(11)
array1.push(11)
console.log(array1)



/* -ELIMINACION-
pop() - elimina el ultimo elemento añadido
      - la complejidad de este metodo es O(1)
*/
var array2 = [0,1,2,3,4]
array2.pop()
array2.pop()
console.log(array2)

/* shift() - elimina el primer elemento */
var array3 = [0,1,2,3,4]
array3.shift()
array3.shift()
console.log(array3)



/* ACCESO
    -El acceso lo hace a traves del indice
    -Accecer a un indice especifico toma O(1)
*/
var array4 = ['a','b','c','d','e']
console.log(array4[3])
