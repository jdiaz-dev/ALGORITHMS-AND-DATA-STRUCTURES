/* 
    EXTRA : arboles
    LINK : https://medium.com/@iampika/javascript-trees-b8f3b4261c3a
    
        --el árbol es una de las estrcuturas de datos más comunes y la forma natural de modelar ciertas áreas informáticas y la forma natural de modelar ciertas áreas temáticas(ejm. árbol genealógico, árbol de archivos)
        --entonces cualquier jerarquía por definción es un árbol
        --a menudo la comprensión del tema de los árboles y la capacidad para trabajar con ellos está relacionado con el nivel del desarrollador

        --la caracteristica clave de un árbol es que es recursiva
        --en otras palabras un árbol consiste en subárboles que a su vez consisten en subárboles que al final en el fondo tienen hojas

        ♥ Nodos
            --los nodos se dividen en dos tipos: 
                1. nodo internos : aquellos que tienen descendientes
                2. nodo hoja : aquellos que no tienen descendientes
            --En el caso de un sistema de archivos, los nodos hoja están representados por archivos, y los internos por directorios

        --los arboles comienzan con la raiz que no tiene padres y el árbol comienza con él, el número de descendientes en cualquier vértice, en general puede ser cualquiera
        --Los arboles resaltan el concepto de profundidad, que determina cuántos pasos debe seguir a lo largo de los picos para llegar a la corriente(nodo que se está viendo)
        --los picos a la misma profundidad se llaman fraternos

        DEFINICICION:
        --El número de describir árboles es infinito
        --Aquí consideramos aquellos que se basan en la repetición de la estructura de árbol, en la que se escribió la estructura de datos
        --La opción más primitiva son la matrizes anidadas

        --Si el nodo hijo no es una matriz, entonces es considerada como una hoja, de lo contrario un nodo interno

        LIMITACIONES:
        --Los nodos internos no pueden almacendar datos

        IR MAS ALLÁ Y LOGRAR UNA MAYOR FLEXIBILIDAD
        --Se puede ir más allá y lograr mayor flexibilidad. Imagine a cada elemento del árbol como una matriz en la que el primer elemento, es el valor almacendao del nodo y el segundo elemento es la matriz de elementos secundarios(es un opción mas detallada, pero permite almacenar datos arbitarios en cualquier nodo, ni siquiera en una hoja)
        --un detalle interasante es que el código fuente de lenguajes de alto nivel tiene tambien una estructura recursiva
*/

/* 
    DEFINICIONES:
        --Arbitrio:  que depende de la voluntad o capricho de una persona y no obedece a princicios dictados por la razón, lógica o las leyes

        --Lenguajes lisp :
            --Es el segundo más viejo lenguaje de programación de alto nivel
            --Tiene una notación de prefijo distintiva completamente entre paréntesis
            --muchos de los lenguajes de programción de alto nivel se parecen a lisp
            --Lisp es bueno porque tiene una sintaxis muy mínima, simple y regular.
            --Lisp es malo porque tiene una sintaxis muy mínima, simple y regular.
            
            --lisp es una de las pioneras de muchas ideas de las ideas de las ciencias de la computación
                ¹estructuras de árbol de datos,
                ¹gestión de almacenamiento automático,
                ¹tiádo dinámico,
                ¹condicionales,
                ¹funciones de orden superior,
                ¹recursividad y 
                ¹el ciclo lectura-evaluación-impresión
*/

//estructura de un árbol
//     *
//    /|\
//   * 2 *
// / |   | \
// 1 4   3 8
var tree1 = [[1, 4], 2, [3, 8]]



//-Se puede ir más allá y lograr mayor flexibilidad. Imagine a cada elemento del árbol como una matriz en la que el primer elemento, es el valor almacendao del nodo y el segundo elemento es la matriz de elementos secundarios(es un opción mas detallada, pero permite almacenar datos arbitarios en cualquier nodo, ni siquiera en una hoja)
var tree2 = [[3], [4], [[10], [[3], [2], [8], [[2], [[3], [4]]]]]]



//un detalle interasante es que el código fuente de lenguajes de alto nivel tiene tambien una estructura recursiva
var tre3 = f1(3 * f2( f3() + 5) )   //si este codigo lo reescribimos al estilo de los lenguajes lisp obtendremos un árbol más real consistente en listas



//otra definición is basada en array asociactivos y especificamente en JS son los objetos
const obj = {
    value:5,
    children:[  //el array de este objeto se puede considerar como un arbol
        {vale:10},
        {vale:100},
        {vale:'nested', children:[]},
    ]
    //secreto: el sistema de archivos no solo tiene una estructura de árbol sino que también están representados a nivel de implementación como estructura de datos
}




