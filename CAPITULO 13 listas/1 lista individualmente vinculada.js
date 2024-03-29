
/* ADVERTENCIA: esta implementacion de lista individualmente vinculada es del libro, pero esta incompleta, ir a la implementacion 8888.1 si se desa usar la implementacion de la lista*/

/* objeto nodo */
function SinglyLinkedListNode(value){
    this.data = value
    this.next = null
}


/* clase lista individualmente vinculada */
function SinglyLinkedList(){
    this.head = null
    this.size = 0
}
SinglyLinkedList.prototype.isEmpty = function(){
    return this.size == 0
}
//IMPORTATE: este metodo es sólo para insertar dato como primer nodo
SinglyLinkedList.prototype.insert = function(value){
    if(this.head == null){
        this.head = new SinglyLinkedListNode(value)
    }else{
        let temp = this.head
        this.head = new SinglyLinkedListNode(value)
        this.head.next = temp
    }
    this.size++
    /*
        Complejidad de tiempo O(1)
        Complejidad de memoria O(1)
    */
}
//metodo que elimina de la cabeza, medio o final de la lista, pero no retorna nada
SinglyLinkedList.prototype.remove = function(value){
    let currentNode = this.head
    if(currentNode.data == value){
        this.head = this.head.value
    }
    //previous is an helper
    let previus = currentNode
    while(currentNode.next){

        if(currentNode.data == value){

            //eliminamos por omision de nodo
            previus.next = currentNode.next

            //para evitar que entre al condicional de abajo
            previus = currentNode
            currentNode = currentNode.next
            break;
        }
        previus = currentNode
        currentNode = currentNode.next
        previus
        currentNode
    }

    //si valor no esta en la cabeza o en el medio, está en la cola
    if(currentNode.data == value){
        previus.next = null
    }
    /*
        Complejidad de tiempo O(n)

    */
        previus
}
//metodo para remover al prinicipio de la lista
SinglyLinkedList.prototype.reomveAtHead = function(){
    let toReturn = null

    if(this.head != null){
        toReturn = this.head.data
        this.head = this.head.next
    }

    return toReturn

    /*
        Complejidad de tiempo O(1)
        Complejidad de memoria O(1)
    */
}
//metodo para busqueda en la lista
SinglyLinkedList.prototype.search = function(value){
    let currentNode = this.head
    while(currentNode){
        if(currentNode.data == value){
            return true
        }
        currentNode = currentNode.next
    }
    return false
    /*
        Complejidad de tiempo O(n)
        Complejidad de espacio O(1)
    */
}

var sll1 = new SinglyLinkedList();
sll1.insert(1); // linked list is now:  1 -> null
sll1.insert(12); // linked list is now: 12 -> 1 -> null
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null
sll1.insert(50);
/*
sll1.insert(100); */

// console.log(sll1)

// sll1.remove(12); // linked list is now: 20 -> 1 -> null
// sll1

sll1.remove(12); // linked list is now: 1 -> null
sll1

//removemos al inicio de la lista vinculada
// console.log(sll1.reomveAtHead())
// sll1

//hacemos una busqueda en la lista
// console.log(sll1.search(20))


