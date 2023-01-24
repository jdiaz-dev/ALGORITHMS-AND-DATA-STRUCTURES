
/* ------------------- mi implementación para recorrer un grafo : depth first ------------------- */

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

// ----------------segundo método para recorrer un grafo : depth-first search
DirectedGraph.prototype.traverseDFS = function(vertex, fn){
    let stack = [],
        queue = []

        stack.push(vertex)

        while(stack.length){
            let vertex = stack.pop()
            queue.push(vertex)
            
            //función de ayuda para visitar los nodos por orden alfabético
            stack = this.traverseDFS_helper(stack, vertex)

        }
        
        while(queue.length){
            let vertex = queue.shift()
            fn(vertex)
        }
        /* 
            Complejidad de tiempo O(V + E) : donde V es número de vértices y E el numero de bordes
        */
}
DirectedGraph.prototype.traverseDFS_helper = function(stack, vertex){
    let tempStack = []
    
    for(let adjacentVertex in this.edges[vertex]){
        tempStack.push(adjacentVertex)
    }
    
    return stack.concat(tempStack.reverse())
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
graph.traverseDFS('A', (vertex) => {console.log(vertex)})
