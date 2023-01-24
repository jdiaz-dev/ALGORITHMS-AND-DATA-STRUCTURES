
//mi posible solucion al ejercicio 1

function raizCuadrada(number){
    
    if( number == 0 || number == 1){
        return number
    }

    let num = 2, square = 1, contador = 0

    while(square <= number){
        contador++
        square = num*num
        if(square == number){
            contador
            return num
        }
        
        num++
    }
    
    return false
}
/* 
    Complejidad de tiempo O(log n )
    Complejidad de memoria O(1)

*/
console.log(raizCuadrada(49))