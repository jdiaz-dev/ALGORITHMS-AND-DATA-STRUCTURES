
/* ------------------- implementado del libro para recorrido de grafo deep first ------------------- */
/*
    * Depth-First Search Traversal
        - Depth-first search (DFS) refers to a search algorithm in a graph that focuses on traversing deep into one connection before visiting the other connections
*/
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

// ---------------- método dethp-first search para recorrer un grafo
DirectedGraph.prototype.traverseDFS = function(vertex, fn){
    let visited = {}, count = 0
    this._traverseDFS(vertex, visited, fn )
}
DirectedGraph.prototype._traverseDFS = function(vertex, visited, fn ){
    visited[vertex] = true
    fn(vertex)
    for(let adjacentVetex in this.edges[vertex]){

        if( !visited[adjacentVetex] ){
            this._traverseDFS(adjacentVetex, visited, fn)
        }
    }
    /*
        Complejidad de tiempo O(V + E) : donde V es número de vértices y E el numero de bordes
    */
}

var graph = new DirectedGraph()

//añadimos vértices
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('J')


//añadimos bordes
graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('B', 'E')
graph.addEdge('C', 'D')

graph.addEdge('D', 'G')
graph.addEdge('G', 'H')

graph.addEdge('D', 'F')
graph.addEdge('F', 'J')
graph
//usamos una función anónima para mostrar los nodos recorridos
graph.traverseDFS('A', (vertex) => {console.log(vertex)})



