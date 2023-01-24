
// algoritmo de raiz cuadrada de un numero punto flotante


//practicando algoritmo de raiz cuadrada del libro con busqueda binaria 

function raizCuadrada(num){

    if(num == 0 || num == 1)    return num

    // "limite" es la precision de decimales
    let limite = 0.0000000001, 
        star = 0, 
        end = num, 
        mid
    let counter = 0
    while(end - star > limite){
        mid = (star + end) / 2
        counter++
        console.log(counter)
        if(mid*mid < num){
            star = mid

        }else if(mid*mid > num){
            end = mid 
        }
    }
    
    return mid
}
/* 
    Complejidad de tiempo O(n)
    Complejidad de espacio O(1)
*/
console.log(raizCuadrada(3))
