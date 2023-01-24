
//solucion al ejercicio 2
//eliminar un elemento duplicado de una lista vinculada

/* 
    LINK :  https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

    LISTAS ENLAZADAS
        --A diferencia de los arrays las listas no se ubican en ubicaciones contiguas
        --los elementos de datos se vinculan mediante punteros

        CARACTERISTICAS
        --los nodos estan conectados por punteros
        --el ultimo nodo apunta a null
        --la "cabeza" del puntero apunta al primer nodo de la lista

        VENTAJAS
        --una lista enlazada puede incrementar o disminuir su tamaño en tiempo de ejecucion
        --añade memoria a medida que crece la lista
        --otra ventaja es que a diferencia de un array puede insertar o eliminar datos sin reorganizar toda la estructura

        DESVENTAJAS
        --el acceso aleatorio de daatos no esta permitido.Se debe acceder a los nodos secuencialmente a partir del primero. Por ello hacer una busqueda en una lista enlazada es lenta
        --utiliza mas memoria debido al almacenamiento utilizado por sus punteros

        TIPOS DE LISTAS
        --hay muchas pero las mas populares son:
            ■listas simples
            ■listas dobles
            ■listas circulares

        OPERACION DE INSERTAR EN UNA LISTA ENLAZADA INDIVIDUALMENTE
        --insertar un nodo antes de la cabezera
        --insertar un nodo en medio de la lista
        --insertar un nodo despues de la cola

        ELIMINAR DE UNA LISTA ENLAZADA INDIVIDUALMENTE
        --eliminar el primer nodo
        --eliminar el ultimo nodo
        --eliminar un nodo del medio de la lista
*/
/* ------------------IMPLEMENTACION DE UNA LISTA ENLAZADA INDIVICUALMENTE------------------ */

//RECOMENDACION : usar esta pracitica de implementacion, porque estoy mas familiarizado con ella
class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    //metodo que inserta un nodo al comienzo de la lista
    isEmpty(){
        return this.size == 0
    }
    insertAtBeginning(data){  
        let newNode = new Node(data)

        //si no hay nada en la lista
        if(!this.head){           
            newNode.next = this.head 
            this.head = newNode
            this.size++

            return this.head
        }else{
            newNode.next = this.head
            this.head = newNode
            this.size++

            return this.head
        }
        /* 
            Complejidad de tiempo O(1)
            Complejidad de memoria O(1)
        */
    }

    //metodo que inserta al final de la lista
    insertAtEnd(data){ 
        let newNode = new Node(data)

        //si la lista esta vacia
        if(!this.head){
            newNode.next = this.head    //para que apunte newNode.next apunte a null
            this.head = newNode
            this.size++

            return this.head
        }

        let tail = this.head
        while(tail.next != null){
            tail = tail.next
        }
        tail.next = newNode
        this.size++

        return this.head
        /* 
            Complejidad de tiempo O(n)
            Complejidad de memoria O(1)
        */
    }
    //metodo para obtener(busqueda) nodo despues de pasar un indice
    getAt(index){   
        let node = this.head, 
            counter = 0

        while(node){
            if(counter == index){
                return node
            }
            node = node.next
            counter++
        }

        return null
        /* 
            Complejidad de tiempo O(n)
            Complejidad de memoria O(1)
        */
    }
    //metodo para insertar un nodo en cualquier lugar de la lista
    insertAt(data, index){
        let newNode = new Node(data)

        if(index == 0){
            newNode.next = this.head
            this.head = newNode
            return this.head
        }

        let nodePrevius = this.getAt(index - 1), counter = 0
        newNode.next = nodePrevius.next
        nodePrevius.next = newNode
        this.size++

        return this.head
        /* 
            Complejidad de tiempo O(n)
            Complejidad de memoria O(1)
        */
    }
    //eliminar un nodo al inicio de la lista 
    deleteFirstNode(){
        //si no existe nodos en la lista
        if(!this.head)  return 'No exist nodes in the list'

        let eliminated = this.head.data
        this.head = this.head.next
        this.size--

        return eliminated
        /* 
            Complejidad de tiempo O(1)
            Complejidad de memoria O(1)
        */
    }
    //eliminamos un nodo al final de la lista
    deleteEndNode(){
        //si no existe nodos en la lista
        if(!this.head)  return 'No exist nodes in the list'

        //si solamente tiene un solo nodo
        let eliminated = null
        if(!this.head.next){
            eliminated = this.head.data
            this.head = null
            this.size--

            return eliminated
        }

        //iteramos y eliminamos al final de la lista
        let nodePrevius = this.head, tail = this.head.next
        while(tail.next != null){
            nodePrevius = tail
            tail = tail.next
        }
        eliminated = nodePrevius.next.data
        nodePrevius.next = null
        this.size--

        return eliminated
        /* 
            Complejidad de tiempo O(n)
            Complejidad de memoria O(1)
        */
    }
    //eliminar un elemento mediante un indice
    deleteAt(index){
        //si no existe nodos en la lista
        if(!this.head)  return 'No exist nodes in the list'

        let eliminated = null
        //si el nodo a eliminar es del inicio
        if(index == 0){
            eliminated = this.head.data
            this.head = this.head.next
            this.size--
            return eliminated
        }
        
        let nodePrevius = this.getAt(index - 1)
        eliminated = nodePrevius.next.data
        nodePrevius.next = nodePrevius.next.next
        this.size--

        return eliminated
        /* 
            Complejidad de tiempo O(n)
            Complejidad de memoria O(1)
        */
    }
    //eliminar toda la lista
    deleteList(){
        this.head = null
        this.size = 0
        /* 
            Complejidad de tiempo O(1)
            Complejidad de memoria O(1)
        */
    }
}
var lista = new SinglyLinkedList()

//insetarmos al inicio de la lista
console.log(lista.insertAtBeginning('animal'))

//insertamos al final de la lista
/* console.log(lista.insertAtEnd('burro'))
console.log(lista.insertAtEnd('castor')) */
console.log(lista.insertAtEnd('dalmata'))
console.log(lista.insertAtEnd('dalmata'))
console.log(lista.insertAtEnd('murcielago'))

lista

/* function deleteElementDuplicated(list){

    let node = list.head
    let tempArray = []
    let previus = null, nodeCheck
    
    while(node){
        let temp = node.next,
            nodeEvaluate = node.data
        
        //si es array temporal esta vacio
        if(!tempArray[0]){
            tempArray.push(nodeEvaluate)
        }else{
            for(let x = 0; x < tempArray.length; x++){
                if(nodeEvaluate == tempArray[x]){
                    node.next = previus
                    previus = node
                    if(!temp) break

                    node = temp

                    almacenado = true
                    break
                }
            }

            if(almacenado == false){

            }
            
        }
        

    }

    return list
} */

function deleteElementDuplicated(lista){

    let node = lista.head, elements = [], disconnected

    contador = 0
    while(node != null){
        let data = node.data
        contador++
        contador
        //añade un elemento si el array está vacio
        if(elements[0] == null){
            elements.push(node.data)
        }else{
            disconnected = false

            for(let x in elements){
                if(data == elements[x]){
                    console.log(node.next.data)
                    /* node.next = node.next.next
                    disconnected = true
                    break */
                }
            }

            if( !disconnected ){
                elements.push(data)
                
            }
        }

        node = node.next
    }

    return elements
}

/* console.log(deleteElementDuplicated(lista)) */


