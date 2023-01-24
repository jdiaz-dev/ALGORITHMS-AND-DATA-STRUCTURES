

/* 
splice() - remueve y añade items dentro de un array, retorna los items removidos
         - primer parametro: indice donde comienza
         - segundo parametro: cantidad de elementos a remover
         - tercer parametro: nuevos elementos añadidos
*/
var fruits = ["Banana", "Orange", "Apple", "Mango","pinaple","orange"]
console.log(fruits.splice(2,3,"Pear"))
fruits



//la belleza de splice() es que se le puede añadir cualquier cosa
//la complejidad es O(n) si se tuviera que revmover todos los elementos del array
var array1 = [1,2,3,4]
array1.splice(1,2,['Alejandro'],{nombre:'Jonathan'})
array1