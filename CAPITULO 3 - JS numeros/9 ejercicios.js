

/* ------------exponenciacion modular usado para cryptografia */
function modularExponentiation(base, exponente, modulo){

    if(modulo == 0) return 0

    var value = 1
    
    for(i=0; i < exponente; i++){
        value = (value * base) % modulo
        console.log(value)
    }
    
    return value
}
// tiempo de complejidad = O(n)
modularExponentiation(4,3,5)



/* ------------todos los numeros primos menores que un numero */
function esPrimo(num){

    if(num == undefined) return false
    if(num <= 1) return false
    if(num == 2 || num == 3) return true

    while(num % 2 == 0 || num % 3 == 0) return false

    for(let y=5; y*y <= num; y +=6){
        if(num % y == 0 || num % (y +2) == 0){
            return false
        }
    }
    return true
}
console.log(esPrimo(47))

function todosLosNumerosPrimosMenoresQueUnNumero(num){

    const arrayPrimos = []

    for(let x=0; x < num; x++){

        if(esPrimo(x)){
            console.log(x)
            arrayPrimos.push(x)
        }
    }
    return arrayPrimos
}
// tiempo de complejidad = O(n.sqrt(n))
console.log(todosLosNumerosPrimosMenoresQueUnNumero(50))






/* --------------------------numeros feos */
//los numeros feos son aquellos que como factores solo tienen a 2, 3 y 5

const divisionMaxima = (numero, divisor) => {
    while(numero % divisor == 0){
        numero /= divisor
    }
    return numero
}

const esFeo = (numero) => {
    numero = divisionMaxima(numero,2)
    numero = divisionMaxima(numero,3)
    numero = divisionMaxima(numero,5)

    return numero === 1
}

const arrrayNumerosFeos = (n) => {
    let contador = 0, numeroAevaluar = 1, numerosFeos = [];

    while( contador != n){
        if(esFeo(numeroAevaluar)){
            numerosFeos.push(numeroAevaluar)
            contador++
        }

        numeroAevaluar++
    }
    return numerosFeos
}
console.log(arrrayNumerosFeos(15))