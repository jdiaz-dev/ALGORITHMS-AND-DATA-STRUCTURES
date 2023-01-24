

/* 
ITERACION: 
    -la iteracion es el proceso de acceder a cada uno de los elementos de una estructura de datos
    -La complejidad de la iteracion es O(n)
*/
var array1 = ['a','b','c','d','e']
for(let i=0; i < array1.length; i++){
    console.log(array1[i])
}



//Iteracion con bucle for
var array2 = ['a','b','c','d','e']

var contador = 0
while(contador < array2.length){
    console.log(array2[contador])
    contador++
}




//Iteracion mediante for (in) : donde se llama a los indices uno por uno
var array3 = ['a','b','c','d','e']

for(let index in array3){   //la variable antes de "in" es el indice

    console.log(index)
    console.log(array3[index])
}




//Iteracion mediante for (of) : accede al array por los elementos
var array4 = ['a','b','c','d','e']

for(let elemento of array3){   //la variable antes de "in" es el indice

    console.log(elemento)
    
}



/* 
Iteracion mediante forEach() : 
    --la diferencia con otros metodos de iteracion es que no puede salir de la iteracion u      omitir cierto elemento del array
    --forEach() es mas expresivo al pasar por cada elemento
 */
var array5 = ['all','cows','ugly','big']

array5.forEach(function(element, index){

    //ambos mostraran los elementos de array5
    console.log(element)
    console.log(array5[index])
})


