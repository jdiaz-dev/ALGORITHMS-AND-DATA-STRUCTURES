/*
    Directed Graphs
        - Directed graphs are graphs that do have a direction between vertices.
        - Each edge in a rected graph goes from one vertex to another
*/


function DirectedGraph() {
    this.edges = {}
}
DirectedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {}
}
//el borde solamente va dirigido en una dirección
DirectedGraph.prototype.addEdge = function (origVertex, destVertex, weight) {
    if (weight === undefined) {
        weight = 0
    }
    this.edges[origVertex][destVertex] = weight
}

//metodo para remover borde
DirectedGraph.prototype.removeEdge = function (origVertex, destVertex) {
    if (this.edges[origVertex][destVertex]) {
        delete this.edges[origVertex][destVertex]
    }
}

//metodo para remover vertices
DirectedGraph.prototype.removeVertex = function (vertex) {
    for (let x in this.edges[vertex]) {
        this.removeEdge(x, vertex)
    }
    delete this.edges[vertex]
}
var graph = new DirectedGraph()

//añadimos vértices
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addVertex('D')


//añadirmos bordes
graph.addEdge('A', 'B', 1)
graph.addEdge('B', 'C', 2)
graph.addEdge('C', 'A', 3)

graph.addEdge('B', 'D', 2)
graph.addEdge('D', 'C', 2)

//resultado final de un grafo dirigido
graph

//eliminados borde
graph.removeEdge('A', 'B')
graph

//eliminamos vertices
graph.removeVertex('D')

//resultado final de un grafo dirigido, la implementación de este método no termina eliminando B:{D:2}, por ello parece que no está completa
graph








