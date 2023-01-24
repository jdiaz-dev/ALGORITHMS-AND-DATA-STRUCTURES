
/* Palabra palíndrome */

function esPalindre(palabra){
    
    let palabraDividida = palabra.split('')

    if(palabra.length == 1) return true

    let primeraMitad = palabraDividida.length / 2

    for(let x = 0, y = palabraDividida.length - 1; x < primeraMitad ; x++, y--){
        
        if(palabraDividida[x] != palabraDividida[y]){
            return false
        }
        
    }
    return true
}

/* 
    Complejidad de tiempo O(n/2)
    Complejidad de espacio O(n/2)
*/
console.log(esPalindre('racecar'))