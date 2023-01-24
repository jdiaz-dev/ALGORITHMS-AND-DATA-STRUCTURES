
/* ------------------- implementado recorrido de grafo breadth first ------------------- */

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


//usamos una función anónima para mostrar los nodos recorridos
graph.traverseBFS('A', (vertex) => {console.log(vertex)})









