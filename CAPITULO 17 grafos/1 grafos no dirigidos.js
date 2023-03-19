
/* ■■■■■■■■■■■■■■■■■■■■ IMPLEMENTACION DE UN GRAFO NO DIRIGIDO ■■■■■■■■■■■■■■■■■■■■*/

/*
    Undirected Graphs
        - Undirected graphs are graphs that do not have a direction between edges.
        - The edge implies a mutual connection between the two nodes without a direction.
        - A real-life example of an undirected graph relationship is friendship.
        - Friendship occurs only if both parties mutually acknowledge the relationship
*/
/*
    vertex = point where join 2 unidimentional elements
    edge = the unidimentional element

*/

function UndirectedGraph() {
    this.edges = {}
}

//esto porque para tener borde, primero debemos tener vértices
UndirectedGraph.prototype.addVertex = function (vertex) {
    this.edges[vertex] = {}
}

//para añadir un borde con peso
UndirectedGraph.prototype.addEdge = function (vertix1, vertix2, weight) {
    if (weight === undefined) {
        weight = 0
    }

    this.edges[vertix1][vertix2] = weight
    this.edges[vertix2][vertix1] = weight
}

//para remover el borde
UndirectedGraph.prototype.removeEdge = function (index1, index2) {
    if (this.edges[index1] && this.edges[index1][index2] != undefined) {
        delete this.edges[index1][index2]
    }

    if (this.edges[index2] && this.edges[index2][index1] != undefined) {
        delete this.edges[index2][index1]
    }
}

//para remover el vértice
UndirectedGraph.prototype.removeVertex = function (vertex) {
    if (this.edges[vertex]) {
        for (let x in this.edges[vertex]) {

            //eliminamos los bordes que habia con el vértice a eliminar
            this.removeEdge(x, vertex)
        }
    }
    delete this.edges[vertex]
}
var graph1 = new UndirectedGraph()
graph1.addVertex(1)
graph1.addVertex(2)
graph1.addEdge(1, 2, 1)

//vemos el borde y su poderación
console.log(graph1.edges)

graph1.addVertex(3)
graph1.addVertex(4)
graph1.addVertex(5)
graph1.addEdge(2, 3, 8)
graph1.addEdge(3, 4, 10)
graph1.addEdge(4, 5, 100)
graph1.addEdge(1, 5, 88)

//vemos de nuevo el borde y su poderación
console.log(graph1.edges)

//removemos vertices
graph1.removeVertex(5)
console.log(graph1.edges)
graph1.removeVertex(1)

//removemos arista
graph1.removeEdge(2, 3)

//vemos el estado final del grafo
console.log(graph1.edges)


