
function getNthFibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return getNthFibo(n - 1) + getNthFibo(n - 2);
    }
}

/* 
    --La complejidad del caso base es 0(1)
    --La complejidad de la recursividad: T(n) = T(n-1) + T(n-2) +  O(1)
        ■En cada llamada se llamara dos mas
        ■Por lo tanto la complejidad es: O(2^n) debido a que se crea un arbol binario en cada llamada
    
*/