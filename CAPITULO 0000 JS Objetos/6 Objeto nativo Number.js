/* 
    OBJETO NUMBER

    //CARACTERISTICAS
        --Solo hay un dato de tipo numerico(sin float,etc)
        --podemos representar: 34, 34.05, 123e4 123e-4, 0xFF(255)
*/

//CAMBIO DE BASE ENTRE NUMEROS: toString()
var base10 = 128
console.log(`en numero en base 2 es: ${base10.toString(2)}`)
console.log(`en numero en base 8 es: ${base10.toString(8)}`)
console.log(`en numero en base 16 es: ${base10.toString(16)}`)
console.log('------------------------------------------------------------------')





//infinito y -infinito: No existe numero infinito como tal en programacion, en este caso el numero infinito es el numero mas grande que puede almacenarse en una variable, se usa la palabra reservada Infinity, -Infinity
var infinito = 2
while(infinito != Infinity){
    console.log(infinito)
    infinito *=infinito
}
console.log('------------------------------------------------------------------')
var num1 = 2, num2 = 0  
console.log(num1/num2)  //un numero positivo dividido entre 0 es: infinito
var num3 = -2, num4 = 0  
console.log(num3/num4)  //un numero negativo dividido entre 0 es: -infinito

console.log(typeof Infinity)   //el tipo de infinito es numero
console.log('------------------------------------------------------------------')




//Not A Number (NaN): lo obtenemos cuando intentamos hacer una operacion atipica por ejemplo dividir un numero entre un string
var atipico = 100/'casa'
console.log(atipico)    //resultado sera NaN

var atipico2 = 100/'10'
console.log(atipico2)    //de esta forma si puede divir un numero y una entre una cadena que sea un numero
console.log(isNaN(atipico)) //pregunta lo sgte: "no es un numero atipico"
console.log(typeof NaN) //el tipo de NaN es un numero
console.log('------------------------------------------------------------------')



//NUMEROS COMO OBJETOS
var numero1 = 123
console.log(numero1)            //devuelve un numero

var numero2 = new Number(123) //no recomendable porque es lento en la ejecucion, tambien puede provocar errores   
console.log(numero2)            //devuelve un objet numero

console.log(numero1 == numero2) //es igual en valor 
console.log(numero1 === numero2) //el tipo no es ingual

