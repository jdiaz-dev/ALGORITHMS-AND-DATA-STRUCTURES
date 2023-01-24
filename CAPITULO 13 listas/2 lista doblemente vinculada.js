
//implemetacion del libro
/* nodo de la lista doblemente vinculada */
function DoublyLinkedListNode(data){
    this.data = data
    this.next = null
    this.previus = null
}

/* implementacion de la lista doblemente enlazada */
//las listas doblemente enlazadas deberian usarse cuando se desea hacer una busqueda completa por ambos lados(cabeza y cola)
function DoublyLinkedList(){
    this.head = null
    this.tail = null
    this.size = 0
}
DoublyLinkedList.prototype.isEmpty = function(){
    return this.size == 0
}
DoublyLinkedList.prototype.insertAtFront = function(data){
    let temp = new DoublyLinkedListNode(data)

    //si la lista estaba vacia
    if(!this.head){
        this.head = temp
        this.tail = temp
    }else{
        temp.next = this.head
        this.head.previus = temp
        this.head = temp
    }
    this.size++

    /* 
        Complejidad de tiempo O(1)
        Complejidad de memoria O(1)
    */
}
DoublyLinkedList.prototype.insertAtTail = function(data){
    let temp = new DoublyLinkedListNode(data)

    //si la lista esta vacia
    if(this.tail === null){

        this.tail = temp
        this.head = this.tail
    }else{
        temp.previus = this.tail
        this.tail.next = temp
        this.tail = temp
    }
    this.size++
    /* 
        Complejidad de tiempo O(1)
        Complejidad de memoria O(1)
    */
}

//una lista puede ser pensado como una pila pero con la capacidad de insertar y eliminar por los dos sentidos(cabeza y cola)
DoublyLinkedList.prototype.deleteAtHead = function(){    
    let toReturn = null

    //si la lista no esta vacia
    if(this.head !== null){
        toReturn = this.head.data

        //si solo tien un nodo
        if(this.size === this.tail){
            this.head = null
            this.tail = null

        }else{
            this.head = this.head.next
            this.head.previus = null
        }
    }
    this.size--
    return toReturn
    /* 
        Complejidad de tiempo O(1)
        Complejidad de memoria O(1)
    */
}
DoublyLinkedList.prototype.deleteAtTail = function(){
    let toReturn = null

    //si la cola no esta vacia
    if(this.tail !== null){
        toReturn = this.tail.data

        //si tiene un solo nodo
        if(this.tail == this.head){
            this.tail = null
            this.tail = null
        }else{
            this.tail = this.tail.previus
            this.tail.next = null
        }
    }
    this.size--
    return toReturn
    /* 
        Complejidad de tiempo O(1)
        Complejidad de memoria O(1)
    */
}
//la busqueda en listas doblemente y simplemente enlazadas son igual
DoublyLinkedList.prototype.findStartingHead = function(value){
    let current = this.head

    //mientras current tenga otro nodo
    while(current){
        if(current.data == value){
            return true
        }
        current = current.next
    }
    
    return false
    /* 
        Complejidad de tiempo O(n)
        Complejidad de memoria O(1)
    */
}
//metodo que busca comenzando desde la cola
DoublyLinkedList.prototype.findStartingTail = function(value){
    let current = this.tail

    //mientras current tenga otro nodo
    while(current){
        if(current.data == value){
            return true
        }
        current = current.previus
    }
    
    return false
    /* 
        Complejidad de tiempo O(n)
        Complejidad de memoria O(1)
    */
}

var listaDoble = new DoublyLinkedList()

//insertamos nodos por le frente
listaDoble.insertAtFront('matematicas')
listaDoble.insertAtFront('comunicación')
listaDoble.insertAtFront('fisica')

//insertamos nodos por la cola
listaDoble.insertAtTail('historia')

//eliminamos por la cabeza
console.log(listaDoble.deleteAtHead())

//eliminamos por la cola de la lista
console.log(listaDoble.deleteAtTail())

//buscamos comenzando desde la cabeza
console.log(listaDoble.findStartingHead('matematicas'))

//buscamos comenzando desde la cola
console.log(listaDoble.findStartingTail('comunicación'))

console.log(listaDoble)
