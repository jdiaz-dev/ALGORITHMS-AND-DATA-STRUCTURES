
//algoritmo raiz cuadrada del libro
function sqrtInt(number) {
    if(number == 0 || number == 1) return number;
    var start = 1, end = number, ans;

    while(start <= end) {
        let mid = parseInt((start+end)/2);
        mid
        if (mid*mid == number){
            return mid;
        }   

        if(mid*mid<number){
            start = mid+1; // use the upper section
            ans = mid;
        }else{
            end = mid-1; // use the lower section
        }
    }
    return ans;
}
/* 
    Complejidad de tiempo O(n)
    Complejidad de espacio O(1)
*/
console.log(sqrtInt(16.23));