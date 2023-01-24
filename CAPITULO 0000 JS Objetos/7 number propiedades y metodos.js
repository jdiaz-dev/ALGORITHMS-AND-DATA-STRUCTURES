
/* ====================================-PROPIEDADES: las propiedades se escriben con mayuscula despues del nombre de la variable=========================*/
var maximo = Number.MAX_VALUE   //el maximo valor permitido
console.log(maximo)

var minimo = Number.MIN_VALUE   //el minimo valor permitido
console.log(minimo)

var positivoInfinito = Number.NEGATIVE_INFINITY     //el infinito positivo
console.log(positivoInfinito)

var negativoInfinito = Number.POSITIVE_INFINITY     //el negativo positivo
console.log(negativoInfinito)

var noNumero = Number.NaN       //no es un numero
console.log(noNumero)
console.log('------------------------------------------------------------------')





/* ============================-METODOS: se escriben con minuscula despues ========================== */
//toFixed() //muestra la cantidad de decimales y redondea el numero a ese decimal
var num1 = 9.6783
console.log(num1.toFixed(0))
console.log(num1.toFixed(2))
console.log(num1.toFixed(7))
console.log('------------------------------------------------------------------')



//toPresicion(): indica la cadena de cifras esperadas tanto antes y despuede la coma
var num2 = 7.6783
console.log(num2.toPrecision()) //mostrara todo el numero si no se le pasa una cantidad de cifras
console.log(num2.toPrecision(2))
console.log(num2.toPrecision(7))
console.log('------------------------------------------------------------------')



//toExponential(): devuelve una cadena redondeado con notacion cientifica
var num3 = 12421414232 
console.log(num3.toExponential(3))  
            //un numero simpre se devolvera una cifra antes de la coma y con        toExpontential mostrara 3 cifras en este caso con el resto en notacion cientifica
console.log('------------------------------------------------------------------')




//toString(): ademas de cambiar las bases de los numeros, lo convierte a string
var num4 = 123
console.log(num4.toString())
console.log((543).toString())
console.log((34 + 34).toString())
console.log('------------------------------------------------------------------')


//valueOf():devuelve el valor primitivo de una objeto, no solo con numeros sino con strings, boolean, funciones etc
var num5 = 13345
console.log(num5.valueOf())
console.log('------------------------------------------------------------------')




/* =============================METODOS GLOBALES PARA CONVERTIR VARIABLES EN NUMEROS===================== */
//Number(): devuelve el valor numerico de una variable
console.log(Number(true))       //devuelve 1
console.log(Number(false))      //devuelve 0
console.log(Number(new Date())) //devuelve el numero de milisegundos desde 1/1/1970
console.log(Number('10'))       //devuelve el numero en cadena
console.log(Number('casa'))     //devuelve NaN
console.log('------------------------------------------------------------------')



//parseInt(): pasa a un numero entero redondeado
console.log(parseInt('10.6'))    //devuelve 10 
console.log(parseInt('80 20'))   //devuelve el primer numero
console.log(parseInt('69 casa')) //devuelve el numero
console.log(parseInt('casa 10')) //devuelve NaN


/* =============CONCLUSION================= */
//El objeto numero es muy complejo y deberiamos conocerlo todo para sacarle el maximo partido
