
/* 
    *last Recently Used Caching(LRU)
        --El LRU es el algoritmo que elimina el ultimo elemento recientemente usado(es decir el primeroque se usó)
        --cuando un item en el cache es accedido, ese item se mueve hacia atrás(el más nuevo en elorden) de la lista
        --cuando una página en el caché es accedido , el item del frente(o el más antiguo en el orden)es removido, y un nuevo item es puesto en la parte de atrás(siendo el más nuevo en el orden) dela lista
        --la implementación de este algoritmo requiere hacer seguimiento a cual nodo fue usado

        --para cumplir esto el LRU es implementado usando una lista vinculada doblemente y una tablahash
        --la habla hash es necesario para hacer seguimiento si el tamaño de la tabla exedido
        --la doble lista enlazada es requerido para hacer seguimiento a la cabeza(el más antiguo dato)cada nuevo dato es insertado en la cola y la cabeza se mueve hasta que es eliminado



        * LRU behavior

        <------------- last recently used
          1    2   3   4   4   3   1   2 
        ---------------------------------  
        | 1 | 1 | 1 | 2 | 2 | 2 | 4 | 3 |
        ---------------------------------
        |   | 2 | 2 | 3 | 3 | 4 | 3 | 4 |
        ---------------------------------
        |   |   | 3 | 4 | 4 | 3 | 1 | 2 |

*/

function DLLNode(key, data){
    this.key = key
    this.data = data
    this.next = null
    this.prev = null
}

/* TABLA HASH */

function LRUCache(capacity){
    this.keys = {}
    this.capacity = capacity
    this.head = new DLLNode('',null)    //the cache has got the doubly linked list
    this.tail = new DLLNode('',null)
    this.head.next = this.tail
    this.tail.prev = this.head
}
LRUCache.prototype.removeNode = function(node){
    let prev = node.prev,
        next = node.next
    prev.next = next
    next.prev = prev

    /* return node */
}

//every new node will be using the end of the list
LRUCache.prototype.addNode = function(node){
    let realTail = this.tail.prev //next
    realTail.next = node  //head.next = node

    
    node.prev = realTail  //node.prev = head
    node.next = this.tail
    this.tail.prev = node
}
LRUCache.prototype.get = function(key){
    let node = this.keys[key]

    if(node == undefined){
        return null
    }else{
        this.removeNode(node)   //eliminates in the head of the list
        this.addNode(node)      //add in the tail of the list
        
        return node.data
    }
}

//metodo para establecer un valor
LRUCache.prototype.set = function(key, value){
    let node = this.keys[key]

    //verificamos la exitencia del nodo
    if(node == undefined){
        node = new DLLNode(key, value)
        
        //add without remove
        if(Object.keys(this.keys).length != this.capacity ){
            this.keys[key] = node
            this.addNode(node)

        }else{
            //remove and add
            delete this.keys[this.head.next.key]    //eliminates old value of hash keys
            this.removeNode(this.head.next)

            this.addNode(node)
            this.keys[key] = node   //set up the new value in hash keys
        }
    }else{
        this.removeNode(node)
        this.addNode(node)
    }
}


var myLRU = new LRUCache(5);

myLRU.set(1, 1); // 1
myLRU.set(2, 2); // 1 <-> 2
myLRU.set(3, 3); // 1 <-> 2 <-> 3
myLRU.set(4, 4); // 1 <-> 2 <-> 3 <-> 4
myLRU.set(5, 5); // 1 <-> 2 <-> 3 <-> 4 <-> 5
myLRU.set(6, 6)
myLRU
