
//algoritmo que revisa si la palabra es palindroma

function esPalindroma(palabra){

    function esPalindromaAyuda(palabra, inicio, final){

        //caso base
        if(inicio >= final) return true

        if(palabra.charAt(inicio) != palabra.charAt(final)){
            return false
        }else{
            return esPalindromaAyuda(palabra, inicio + 1, final -1 )
        }

    }
    
    return esPalindromaAyuda(palabra, 0, palabra.length -1)
}

/* 
    Complejidad de tiempo O(n)
    Complejidad de espacio O(n)
*/
console.log(esPalindroma('sometemos'))