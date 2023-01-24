
/* 
    CAPITULO 8: recursion
        RECURSION
            --La recursion la ocurrencia de una cosa en terminos de este mismo
            --Una funcion recursiva es una fucnion que se llama a si mismo
            --La recursion es utilizada en muchas estructuras de datos
        **Big-O for Recursion
            --El analisis Big es mucho mas dificil en funciones recursivas
        **Recurrence Relations
            --Consiste en dos partes:
                1.Big-O para el caso base
                2.Big-O para el caso recursivo
        **Master Theorem
            --Tiene 3 casos para analizar la complejidad de un algoritmo recursivo
        **Recursive Call Stack Memory
            --Cada llamada recursiva debe ser almacenada en la memoria hasta que el caso sea resuelto
            --Las funciones recursivas tienen una complejidad extra de complejidad que esta almacenado en la pila de memoria del sistema operativo, la pila esta acumulando hasta que el caso sea resuelto
            --En el peor de los casos si el caso base es implementado incorrectamente, la funcion recursiva causa que el problema se estrelle porque el error del desbordamiento de pila ocurre cuando has mas de los numeros permitidos en memoria

        **SUMMARY
            Siempre utilizar el teorema master para analizar la complejidad de la funcion recursiva

*/
