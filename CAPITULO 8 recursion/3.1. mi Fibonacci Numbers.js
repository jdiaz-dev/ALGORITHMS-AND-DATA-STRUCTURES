/* mi solución a fibonaci numbers */

//establecemos los datos iniciales de los fibonacci numbers
var num1 = 0
var num2 = 1

function fibonacciNumbers( fibonacci, posteriorValue, total){   //total es el cantidad de números que se queire imprimir
    
    //caso base : cuando se hay llegado al último numero a imprimir
    if(total == 0) return

    console.log(fibonacci)

    fibonacciNumbers(posteriorValue, value2 = posteriorValue + fibonacci, total - 1)
}
fibonacciNumbers(num2, num1 + num2, 19)