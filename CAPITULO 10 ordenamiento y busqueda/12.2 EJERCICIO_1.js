
//practicando algoritmo de raiz cuadrada del libro con busqueda binaria 

function raizCuadrada(num){

    if(num == 0 || num == 1)    return num

    let star = 1, end = num, ans

    while(star <= end){
        let mid = parseInt((star + end) / 2)

        if(mid*mid == num){
            return mid
            
        }else if(mid*mid < num){
            star = mid + 1
            ans = mid

        }else if(mid*mid > num){
            end = mid - 1
        }
    }
    
    return ans
}
/* 
    Complejidad de tiempo O(n)
    Complejidad de espacio O(1)
*/
console.log(raizCuadrada(16.23))
