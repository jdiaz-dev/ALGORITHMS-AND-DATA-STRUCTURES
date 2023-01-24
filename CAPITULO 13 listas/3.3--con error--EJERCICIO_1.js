
//PARA REVISAR ERROR 
//SOLUCION DEL EJERCICIO 1
//INTENTO DE SOLUCION ESTA AL FINAL DE LA CLASE

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

    /* -----------------EL METODO NO ESTA RESUELTO--------EJERCICIO 1 DEL LIBRO-------------------- */
    //en este método intenté resolver el problema 1 del libro no funciono porque currentNode.next.next.next no puede ser reconocido dentro de un bucle while o un condicional
    reverseSinglyLinkedList(){
        let reverseList = new SinglyLinkedList()
        let currentNode = this.head, counter = 0    
        
        while(currentNode){

            while(currentNode.next){
                console.log(currentNode.data)
                counter++
                counter
                reverseList
                //si el ultimo nodo es null
                if(currentNode.next.next == null){
                    reverseList.insertAtEnd(currentNode.data)
                    currentNode.next = null
                }
                currentNode = currentNode.next
                
            }
            
            if(currentNode.next == null){
                reverseList.insertAtEnd(currentNode.data)
                currentNode = null
            }
        }
        return reverseList
    }
}
var lista = new SinglyLinkedList()

//insetarmos al inicio de la lista
console.log(lista.insertAtBeginning('animal'))

//insertamos al final de la lista
console.log(lista.insertAtEnd('burro'))
console.log(lista.insertAtEnd('castor'))
console.log(lista.insertAtEnd('dalmata'))

lista
