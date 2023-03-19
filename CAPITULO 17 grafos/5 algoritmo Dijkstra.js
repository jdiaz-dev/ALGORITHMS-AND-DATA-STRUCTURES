
/*
    **Dijkstra’s Algorithm: Shortest Path
        --toma el camino más corto para llegar a su destino
        --al principio la distancia es marcada como infinito porque algunos nodos no podrían ser alcanzados
        --entonces en cada iteración para recorrer el árbol, la distancia más corta es más elegida de cada nodo

        --este algoritmo hace uso del algoritmo para atravesar el grafo BFS

        --Diskstra algorithm return the most shortest path to every node
*/

/* ------------------- implementado algortimo Dijkstra ------------------- */


/* implentación de un grafo dirigido */
function DirectedGraph(){
    this.edges = {}
}
DirectedGraph.prototype.addVertex = function(vertex){
    this.edges[vertex] = {}
}
DirectedGraph.prototype.addEdge = function(origVertex, destVertex, weight){
    if(weight === undefined){
        weight = 0
    }
    this.edges[origVertex][destVertex] = weight
}
DirectedGraph.prototype.removeEdge = function(origVertex, destVertex){
    if(this.edges[origVertex][destVertex]){
        delete this.edges[origVertex][destVertex]
    }
}

DirectedGraph.prototype.removeVertex = function(vertex){
    for(let x in this.edges[vertex]){
        this.removeEdge(x, vertex)
    }
    delete this.edges[vertex]
}

// ----------------metodo breath first search para atravesar un grafo
DirectedGraph.prototype.traverseBFS = function(vertex, fn){
    let queue = [],
        visited = {}

        queue.push(vertex)
        while(queue.length){
            vertex = queue.shift()

            if(!visited[vertex]){
                visited[vertex] = true
                fn(vertex)
                for(let adjacentVertex in this.edges[vertex]){
                    queue.push(adjacentVertex)
                }
            }
        }
}
DirectedGraph.prototype.dijkstra = function(source){
    let Q = {}, //vertices con aristas
        dist = {}

    for(let vertex in this.edges){
        dist[vertex] = Infinity

        Q[vertex] = this.edges[vertex]
    }

    dist[source] = 0

    while( !isEmpty(Q) ){
        let u = _extractMin(Q, dist)

        delete Q[u]

        //iteración para revisar distancia con sus vecinos
        for(let neighbour in this.edges[u]){

            //distancia mas corta hacia su vecino
            let pathsSum = dist[u] + this.edges[u][neighbour]

            //si hay un camino mas corto hacia su vecino
            if(pathsSum < dist[neighbour]){
                dist[neighbour] = pathsSum
            }
        }
    }

    return dist

    /*
        Tiempo de complejiad : O(V^2  +  E)     -> donde V = vertices, E = aristas
    */
}

function isEmpty(Q){
    return Object.keys(Q).length === 0
}

//extraemos distancia mas corta para llegar a un nodo
function _extractMin(Q, dist){
    let minimunDistance =  Infinity,
        nodeWithminimunDistance = null

    for(let node in Q){
        if(dist[node] <= minimunDistance){
            minimunDistance = dist[node]
            nodeWithminimunDistance = node
        }
    }

    return nodeWithminimunDistance
}

var graph1 = new DirectedGraph()
graph1.addVertex(1)
graph1.addVertex(2)
graph1.addEdge(1,2,1)

//vemos el borde y su poderación
console.log(graph1.edges)

graph1.addVertex(3)
graph1.addVertex(4)
graph1.addVertex(5)
graph1.addEdge(2,3,8)
graph1.addEdge(3,4,10)
graph1.addEdge(4,5,100)
graph1.addEdge(1,5,88)

//vemos de nuevo el borde y su poderación de sus aristas
console.log(graph1.edges)

console.log(graph1.dijkstra(1))






