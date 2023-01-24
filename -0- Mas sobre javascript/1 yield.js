
/* 
    yield : 
    --actua como un terun
    --donde devuelve un objeto con dos propepiedades: 
        value -> resultado de evaluar la expresion de yield 
        done -> devuelve false indicando que la funcion generador no se ha terminado
*/
function *suma(n){

    while(n < 10){
        n = n + 2
        yield n
    }
}
var sum = suma(2)
console.log(sum.next())
console.log(sum.next())
console.log(sum.next())
console.log(sum.next())
console.log(sum.next())