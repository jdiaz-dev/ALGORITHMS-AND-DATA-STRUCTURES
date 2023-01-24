
//=======================MI ALGORITMO
const numerosPrimosMenoresQueElNumero = num => {

    const primosMenores = []
    let esPrimo

    for(let x=2; x < num; x++){
        esPrimo = true

        for(let y=2; y < num; y++){
            if(x > y){
                if(x % y == 0){
                    esPrimo = false
                }
            }
        }

        if(esPrimo){
            primosMenores.push(x)
        }
    }

    return primosMenores
    
}

/* console.log(numerosPrimosMenoresQueElNumero(36)) */

const factoresPrimos = num => {

    const primosMenores = numerosPrimosMenoresQueElNumero(num)
    const factores = []
    
    for(let a=0; a < primosMenores.length; a++){
        if(num % primosMenores[a] == 0){
            factores.push(primosMenores[a])
        }
    }
    return factores
}
console.log(factoresPrimos(210))




/* ========================ALGORITMO LIBRO */
function primeFactors (n){

    while(n % 2 == 0){
        console.log(2)
        n = n/2
    }

    for(let i=3; i*i <= n; i = i+2){
        while(n % i == 0){
            console.log(i)
            n = n/i
        }
    }

    if(n > 2){
        console.log(n)
    }
}

primeFactors(210)



