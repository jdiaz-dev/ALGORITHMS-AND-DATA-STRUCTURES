/* 
    --Veremos que constructores incorpora JS. que alternativas existe, y porque no es necesario utilizar los constructores tal y como los conocemos

*/

/* CONSTRUCTORES QUE NOS VAMOS A ENCONTRAR */
//1. String
    var x1 = new String()   //no es recomendable utilizar
    var y1 = "Alejandro Díaz"   //preferible utilizar

//2. Number
var x2 = new Number()   //no es recomendable utilizar
var y2 = 1996   //preferible utilizar

//3. Boolean
var x3 = new Boolean()   //no es recomendable utilizar
var y3 = "Alejandro Díaz"   //preferible utilizar

//4. Array
var x4 = new Array()   //no es recomendable utilizar
var y4 = []   //preferible utilizar

//5.RegExp: Nos sirven para validar cademas (ejm:DNI, correo electronio), para comprobar que estan bien estructuradas
var x5 = new RegExp()   //no es recomendable utilizar
var y5 = /()/   //preferible utilizar

//6. Function
var x6 = new Function()   //no es recomendable utilizar
var y6 = function(){}   //preferible utilizar

//7. Date: No hay una defincion de fecha como tal que podamos definir
var x7 = new Date() //podremos almacenar valores de tipo temporal como fechas u horas,etc

//8. Math: No se puede puede declarar con New porque es un objeto global
    Math

//9. Object
var x8 = {}