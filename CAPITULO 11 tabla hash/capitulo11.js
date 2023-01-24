/* 
    CAPITULO 11: tablas hash
            --Una tabla hash es una estructura de dato de tamaño fijo
            --El tamaño es definido al comienzo
            --Las tablas hash usan dos funciones principales: put() y get()
            --Ambas de esas funciones tienen una complejidad de O(1)
            --Una tabla hash es analoga a un array cuyo indice es calculado con la funcion hashing. Esa funcion identifica un espacio en la memoria unico
            --El localStorage es un ejemplo de estructura de dato basado en tablas hash
            --Permite a los desarrolladores conservar datos dentro del navegador. Significa que se puede acceder despues de una sesion

        **Hashing Techniques
            --la parte mas importante de una tabla hash es la funcion hash
            --Esta comvierte una clave especifica en un indice pora un array que almacene todos datos
            --Los tres primeros pasos para una funcion hash son los siguientes:
                ■ Determinista: igual claves producen iguales valores hash
                ■ Eficiencia:  esto deberia ser O(1)
                ■ distribucion Uniforme: aprovecha al maxima el array
                -La primera tecnica para el hash usa numeros primos
                -Al usar el operador modulo, una distribucion uniforme de el indice puede ser garantizado
        **Prime Number Hashing
            --Lo mas importante qui es que los numeros primos garantizan una mejor distribucion para un tamaño fijo
            --un numero no primo solo gatantiza a un largo de numeros de colisiones
            --Un hashing libre de colision es casi imposible en la mayoria de los casos
            --Por ello estrategias para el manejo de colisiones son necesarios

        **Proving(sondeo)
            --El sondeo es buscar el siguiente indice disponible en el array

            ■ Linear Probing
                --El sondeo lineal se hace via ensayos incrementales(el incremente se hace un indice a la vez)
                --Sin embargo cuando la funcion get() es utilizado este hace una iteracion en todo el array
                --Por lo tanto la desventaja de el sondeo lineal es que se puede crear facilmente clusters, lo cual es malo porque se puede crear mas datos para iterar

            ■ Quadratic Probing
                --El sondeo cuadradatico usa funciones cuadraticas para generar los pasos incrementales
                --El sondeo cuadratico es una buena tecnica para abordar el problema del custer
                --Hace uso del cuadrados perfectos en lugar de ir incrementando uno por uno
                --Esto ayuda a distribuir uniformemente a traves de los indices disponibles

            ■ Rehashing/Double-Hashing
                --Otra forma de distribuir uniformente es teniendo una segunda funcion hash que haga has al original
                --los tres requerimientos para hacer el segundo hash son:
                    1. Diferente: necesita ser diferente para distribuir mejor
                    2. Eficiencia: Este deberia ser un tiempo O(1)
                    3. No-cero: nunca deberia ser cero. Cero da el valor inicial hash
                "R" debe de ser menor que el tamaño de la tabla hash
        **Summary
            --Una buena tabla hash es determinista, eficiente y uniformemente distributiva
*/