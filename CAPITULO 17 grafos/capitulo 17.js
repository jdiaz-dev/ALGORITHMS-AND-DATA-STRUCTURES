/* 
    CAPITULO 17: grafos
            --aprenderé terminología fundamental y tipos de grafos, métodos para representar grafos en estrucutras de datosque ya hemos estado explorando
            --finalmente algoritmos para atravesar, buscar y ordenar grafos serán explorados para resolver problemas como encontrar el camino más corto entre dos nodos de un grafo

        **Graph Basics
            1. vértice (nodo).
            2. borde (arista)
            3. grado de vértice: número de aristas en un vértice    
            4. grafo disperso: un grafo disperso es considera cuando solamente una limitada conexión entre los vértices
            5. grafo denso : un grafo es denso cuando hay muchas conexiones entre los vertices
            6. grafo cíclico: un grafo es considerado cíclico si viaja desde un nodo y regresa a este mismo
            7. peso (costo): un peso puede significar varias cosas dependiendo el contexto, por ejemplo en los grafos puede repreentar la distancia requerida para llegar de un nodo a otro

        **Undirected Graphs(grafo no dirigidos)
            --un grafo no dirigido es una relación mutua entre entre dos vértices pero sin una dirección, los valores dentro de los bordes podrian indicar cuan cerca es la relación entre dos vértices

            --hay varias formas de representar grafos no dirigidos en una clase
            --dos de las mas comunes son:
                1. listas de proximidad (en este libro solamente se cubre las listas de proximidad)
                2. matriz de proximidad
            --con la proximidad se representa los vecinos cercanos a un nodo

        **Directed Graphs
            --son aquellos que tienen direccion entre grafos
            --donde la dirección indica de donde a donde únicamente puede viajar el nodo

        **Graph Traversal
            --los dos enfoques más comunes son: 
                1. breadth-first search
                2. depth-first search

        **Breadth-First Search
            --se enfoque en la búsqueda de sus nodos conectados y sus hijos conectados in order. Es algo parecido a level order en arboles binarios
            --la visita es hacia cada nodo y sus hijos

        **Depth-First Search
            --Enfocado en profundizar primero en la profundidad de un nodo antes de visitar otra conección.
            --la primera visita es hacia el nodo vecino más cercano

        **Weighted Graphs and Shortest Path

        **Weighted Graphs and Shortest Path
            --discutiremos el ponderado de las aristas y el algoritmo Dijkstra para buscar caminos más cortos

        **Graphs with Weighted Edges
            --la longitud de un vértice no tiene nada que ver con el peso del vértice, la longitud es simplemente para fines visuales
            --el peso es el que indica la distancia entre un nodo y otro
            --la cuestión más importante en un grafo es el camino más corto. uno de ellos es el algoritmo de Dijkstra

        **Dijkstra’s Algorithm: Shortest Path
            --toma el camino más corto para llegar a su destino
            --al principio la distancia es marcada como infinito porque algunos nodos no podrían ser alcanzados
            --entonces en cada iteración para recorrer el árbol, la distancia más corta es más elegida de cada nodo

        **Topological Sort
            --para un grafo dirigido puede ser muy importante cual nodo va a ser procesado primero en varias aplicaciones
            --un ejemplo de esto puede donde una tarea depende de una tarea previamenete realizada
            --otro ejemplo es el administrador de dependencias librerias de JS, donde este tiene que averiguar que librerías importar antes que otras
            --el algoritmo de orden topológico utiliza el algoritmo de recorrido DFS para registrar el orden

*/