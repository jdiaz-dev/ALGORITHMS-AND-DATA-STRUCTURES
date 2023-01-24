
var mensaje = "Hay tres ciclos de grado superior: Desarrollo de aplicaciones web, Desarrollo de aplicaciones multiplataforma y Administracion de 'Sistemas Informaticos' en Red y 1 ciclo de grado Medio: Sistemas 'Microinformaticos' y Redes"
console.log( mensaje.length)


/* METODOS */
//Métodos de búsqueda

//charAt() - devuelve el caracter de una posicion
console.log( mensaje.charAt(18) )

//indexOf() - devuelve la primera posicion de un caracter en una cadena
console.log( mensaje.indexOf("e"))

//lastIndexOf() - devuelve la ultima posicion de un caracter en una cadena
console.log( mensaje.lastIndexOf("R"))

//search() - busca la cadena o expresion regular en otra cadena
console.log( mensaje.search("Redes"))




var palabra1 = "murcielago"
var palabra2 = "animal"

//METODOS DE COMPARACION
/*  localeCompare() - devuelve  -1 (antes), 0 (igual),  1(despues)  de acuerdo al alfabeto
*/
console.log("palabra1 va despues de la palabra 2?: " + palabra1.localeCompare(palabra2))
