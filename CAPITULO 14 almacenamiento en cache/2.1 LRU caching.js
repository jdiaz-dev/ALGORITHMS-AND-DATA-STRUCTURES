
/* 
    *last Recently Used Caching(LRU)
        --El LRU es el algoritmo que elimina el ultimo elemento recientemente usado(es decir el primeroque se usó)
        --cuando un item en el cache es accedido, ese item se mueve hacia atrás(el más nuevo en elorden) de la lista
        --cuando una página en el caché es accedido , el item del frente(o el más antiguo en el orden)es removido, y un nuevo item es puesto en la parte de atrás(siendo el más nuevo en el orden) dela lista
        --la implementación de este algoritmo requiere hacer seguimiento a cual nodo fue usado

        --para cumplir esto el LRU es implementado usando una lista vinculada doblemente y una tablahash
        --la habla hash es necesario para hacer seguimiento a la cabeza(el más antiguo dato)
        --la doble lista enlazada es requerido debido al LRU
        --cada nuevo dato es insertado y la cabeza se mueve hasta que el tamaño sea exedido, entoncesel más viejo dato es desalojado
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

//every new node will be added at end of the list
LRUCache.prototype.addNode = function(node){
    let realTail = this.tail.prev
    realTail.next = node

    
    node.prev = realTail
    node.next = this.tail
    this.tail.prev = node
}
LRUCache.prototype.get = function(key){
    let node = this.keys[key]

    if(node == undefined){
        return null
    }else{
        this.addNode(this.head.next.data)
        this.removeNode(this.head.next)
        return node.data
    }
}
LRUCache.prototype.set = function(key, value){
    let node = this.keys[key]

    if(node){
        this.removeNode(node)
    }

    let newNode = new DLLNode(key, value)
    this.keys[key] = newNode
    this.addNode(newNode)

    //evict a node
    if(Object.keys(this.keys).length > this.capacity){
        let realHead = this.head.next
        this.removeNode(realHead)
        delete this.keys[realHead.key]
    }


}

var myLRU = new LRUCache(5);

myLRU.set(1, 1); // 1
myLRU.set(2, 2); // 1 <-> 2
myLRU.set(3, 3); // 1 <-> 2 <-> 3
myLRU.set(4, 4); // 1 <-> 2 <-> 3 <-> 4
myLRU.set(5, 5); // 1 <-> 2 <-> 3 <-> 4 <-> 5
myLRU.set(3, 3)
myLRU
