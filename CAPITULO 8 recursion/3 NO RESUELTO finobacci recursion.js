
/* 
    --La recursion en cola es una funcion la cual llama a la ultima cosa ejecutada en una funcion
*/


//1, 1, 2, 3, 5, 8, 13, 21 …

function getNthFibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return getNthFibo(n - 1) + getNthFibo(n - 2);
    }
}
/* Complejidad de tiempo O(2^n) */
console.log(getNthFibo(8))