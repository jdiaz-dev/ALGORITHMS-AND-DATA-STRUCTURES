
//INSTANCIACION DE CADENAS
var daw = "Desarrollo de aplicaciones web"
var dam = 'Desarrollo de aplicaciones multiplataforma'
var asir = "Administracion de 'Sistemas Informaticos' en Red"
var smr = "Sistemas \"Microinformaticos\" y Redes  "    //la barra es un caracter de escape, despues de esta podemos incluir comillas dobles que nos la incluira dentro de la oracion

var ciclos = new String("MENSAJE: ")


//CONCATENACION DE CADENAS
ciclos += "Hay tres ciclos de grado superior: \n" //  "\n" es un salto de linea
ciclos += daw + ", " + dam + " y " + asir + "\n"
ciclos += " y 1 ciclo de grado Medio: \n"
ciclos += smr

console.log(ciclos)


//PROPIEDADES
//constructor
//prototype
//length: devuelve la longitud de una cadena
console.log("La longitud de la cadena ciclos es: " + ciclos.length)