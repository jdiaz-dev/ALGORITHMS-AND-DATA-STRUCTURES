var mensaje = "Hay tres ciclos de grado superior: Desarrollo de aplicaciones web, Desarrollo de aplicaciones multiplataforma y Administracion de 'Sistemas Informaticos' en Red y 1 ciclo de grado Medio: Sistemas 'Microinformaticos' y Redes"

/* METODOS PARA INCLUYE, EMPIEZA O TERMINA */
//includes() - devuelve true si la cadena incluye el parametro
console.log("Incluye 'ciclos' ---mensaje---?: " + mensaje.includes("ciclos") )

//startsWith() - devuelve true si la cadena empieza con el parametro
console.log("Empieza ---mensaje--- con 'Hay'?: " + mensaje.startsWith("Hay"))

//endsWith() - devuelve true si finaliza con el parametro
console.log("Termina con 'Redes' ---mensaje---?:" + mensaje.endsWith("Redes"))






var palabra1 = "Murcielago"
var palabra2 = "Animal"
/* METODOS PARA CONCATENCACION Y REPETICION */
//concat() - concatena a la cadena el parametro
console.log("Union de ---palabra1--- y ---palabra2--- = " + palabra1.concat(palabra2))

//repeat() - repite la cadena del numero de veces que aparece en el parametro
console.log("Repite 5 veces ---palabra1--- = " + palabra1.repeat(5))






var palabra3 = "MujeriegoXD"
var palabra4 = "Anastacio"
var mensajito = "Hay tres ciclos de grado superior: Desarrollo de aplicaciones web"
var mensajitoConEspacio = "           ciclos de grado superior              "
/* METODOS PARA EXTRACCION */
//slice() - devuelve la cadena comprendida entre ambas posiciones
console.log(palabra3.slice(2,6))
console.log(palabra3.slice(-5,11))

//substring() - funciona igual que slice con la particularidad de no admitir posiciones negativas e invertir las posiciones de menor a mayor
console.log(palabra3.substring(2,6))
console.log(palabra3.substring(11, 4))  //esta invirtiendo las posiciones

//substr( <posicionInicial>, <numero de caracteres>) - devuelve la posicion inicial y el numero de caracteres
console.log(palabra4.substr(2, 5))

//split() - recibe un 2do parametro opcional que indica cuantas palabras va extraer contando desde el inicio
console.log(mensajito.split(" ",3))

//trim() - estrae la cadena eliminando los espacios del principio y del final
console.log(mensajitoConEspacio.trim())





var palabra5 = "Escritorio"
/* METODOS DE MAYUSCULA Y MINUSCULA */
console.log(palabra5.toLowerCase())
console.log(palabra5.toUpperCase())//con caracteres especiales(ruso) toLocaleUpperCase()





var palabra6 = "Computador"
var numero = 23542354
/* METODOS ESPECIALES */
//toString() - devuelve el valor del objeto string, sobre todo en numeros
console.log(numero.toString())

//valueOf() - devuelve el valor primitivo del objeto
console.log(palabra6.valueOf())
