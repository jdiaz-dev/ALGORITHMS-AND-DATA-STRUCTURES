
//ver si la palabra es palindrome

function esPalindrome(word){

    let wordSplit = word.split('')
    let inicio = 0
    let final = wordSplit.length - 1
    let mitad = Math.floor((wordSplit.length / 2)) - 1  //mitad del array
    
    function palindrome(wordSplit, inicio, final, mitad){

        
        if(wordSplit.length == 1) return true

        //caso base
        if( wordSplit[inicio] == wordSplit[final] ){
            if(inicio == mitad){
                return  //no se guardara este valor 
            }else{
                palindrome(wordSplit, inicio + 1 , final - 1, mitad)
            }
        }else{
            return false
        }
        return true
        
    }
    let resultado = palindrome(wordSplit, inicio , final, mitad )
    return resultado
}
/* 
    Complejidad de tiempo O(n/2) = O(n)
    Complejidad de espacio O(n/2) = O(n)
*/
console.log(esPalindrome('sometemos'))