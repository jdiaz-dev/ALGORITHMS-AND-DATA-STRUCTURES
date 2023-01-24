

var frase = 'Aprender Javascript, javascript para machine learning'
//search() - devuelve la posicion de la palabra buscada
console.log(frase.search(/Javascript/i))


var korah = 'Nombre-Korah apellido-korah edad-korah profesion-korah korah '
//match() - se usa para obtener todas las ocurrencias de una expresion regular dentro de una cadena
console.log(korah.match(/korah/g))  




var re = /quick\s(brown).+?(jumps)/ig;
var text = 'The Quick Brown Fox Jumps Over The Lazy Dog'
/* 
    exec() - ejecuta una busqueda sobre una expresion regular en una cadena especifica  
             devuelve un array como resultado o null
*/
var result = re.exec(text);
console.log(result)




var cadena = "hello world!";
var expresionRegular = /^hello/
/* 
    test() - ejecuta una busqueda de un ocurrencia entre una expresion regular y una cadena
             devuelve true o false
*/
var resultado = expresionRegular.test(cadena);
console.log(resultado);