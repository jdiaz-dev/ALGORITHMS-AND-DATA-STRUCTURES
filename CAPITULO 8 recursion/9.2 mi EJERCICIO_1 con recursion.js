
var contador = 0
function decimal_a_binario_con_recursividad(num){
    
    if(num < 2) return num
    contador++  
    return ` ${decimal_a_binario_con_recursividad(Math.floor(num / 2))}${num % 2}`
}
/* 
    Complejidad de tiempo O(log2(n))
*/
console.log(decimal_a_binario_con_recursividad(1024))
console.log(decimal_a_binario_con_recursividad(25))
contador
