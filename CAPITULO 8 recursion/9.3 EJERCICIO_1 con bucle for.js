

function decimal_a_binario_con_bucle_for(num){

    var numeroBinario = []

    while( num > 2 ){
        numeroBinario.push(num % 2) //empuja el residuo
        num = Math.floor(num / 2)
    }
    numeroBinario.push(num) //empuja el cociente
    
    return numeroBinario.reverse()
}
console.log(decimal_a_binario_con_bucle_for(1010))

