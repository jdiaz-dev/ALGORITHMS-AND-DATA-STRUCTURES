/* 
    CAPITULO 16: heaps
            --Es una estructura de datos que regresa el mayor o menor elemento en un tiempo O(1)
            --Heap sort es un algoritmo basado en heaps
            --Un heap actua como una fila prioritaria(los elementos con menos en una fila de impresiones se imprimirán primero)
    
        **Understanding Heaps
            --Es como un árbol binario donde los padres son mayores que los hijos
            --Esta propiedad del heap es util para ordenar datos

            --Los heaps en lugar usan arrays para ordenar datos en lugar de tener punteros a sus hijos
            --Las posiciones de los nodos hijos del heap pueden ser calculados fácilmente

            --Hay muchos tipos de heaps con diferentes números de hijos, pero solomante consideraremos los heaps binarios
            --Ya que los heps usan arrays para ordenar sus datos, el índice del array define el orden/altura de cada elemento
            --Un ábol binario puede ser construido colocando el primer elemento del array como raiz y colocando cada elemento de la izquierda y la derecha en orden

            --Hay dos tipos de Heaps: 
                1. max-heap : donde la raíz el más alto valor y cada nodo es más grande cualquiera de sus hijos
                2. min-heap : donde la raíz es el más bajo valor y cada nodo es mas pequeño que cualquiera de sus hijos

            --Los heaps pueden almacenar cualquier tipo de valores: string, números e incluso clases
            --En los capítulo 3 y 4 se vió como JS puede manejar números y strigs nativamente
            --Pero para personalizar clases el desarrollador debe implementar su propia forma de comparar clases
            --En este capitulo solamente se trabaja heaps con números

        **Max-Heap
        **Min-Heap
        **Binary Heap Array Index Structure

*/       

/* 
    ♥ Percolación : paso lentro de fluidos a través de los materiales
*/