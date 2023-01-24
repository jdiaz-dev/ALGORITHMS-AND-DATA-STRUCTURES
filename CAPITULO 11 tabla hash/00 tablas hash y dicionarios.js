/* 
    fuente de tabla hash usando clases : https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b

    TABLAS HASH:
        --La estructura central de una tabla hash son los arrays
        --actua como un diccionario desornado
        --Se llama tabla has porque usa una funcion de hash
        --En JS se puede usar new Map()
        --Funcionan mal para busqueda de valores maximos y minimos(para ello es mejor el arbol de busqueda binario)
        --Los numeros primos 31, 33, 37, 39, 41 produciran menos cantidad de colisiones

        ■Ventajas
        --Las lecturas son rapidas O(1), pues es como acceder a un array[0]
        --Si hay colisiones el rendimiento es O(n / k); donde K = tamaño de la tabla hash
        --Ese tamaño "k" puede reducirse a O(n)
        --Con un buen algoritmo hash el rendimiento generalmente sera O(1)
        --Utilizado para indexacion a base de datos

        ■Desventajas
        --Depende del lenguaje
        --Las colisiones hash son inevitables
        --Se vuelve ineficiente cuando hay muchas colisiones
        --No permite valores nulos como el hash map

        ■Complejidad
        --Complejidad de espacio O(n)
        --Complejidad buscar, insertar, eliminar O(1) en el mejor caso, y en el peor O(n)
*/

/* 
    DICCIONARIOS:
        --JS no tiene diccionarios de forma nativa como en otro tipo de lenguajes estaticos como C#
        --En JS se considera como diccionarios a los "Objects" gracias a su tipado dinamico
*/