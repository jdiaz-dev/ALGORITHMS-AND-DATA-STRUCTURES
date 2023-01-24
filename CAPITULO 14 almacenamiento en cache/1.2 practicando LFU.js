
function LFUNode(key, value){
    this.data = value
    this.key = key
    this.next = null
    this.prev = null
    this.freqCount = 1
}

/* tabla hash */
function LFUCache(capacity){
    this.keys = {}
    this.freq = {}
    this.capacity = capacity
    this.minFreq = 0
    this.size = 0
    
}

/* lista doblemente vinculada */
function LFUDoblyLinkedList(){
    this.head = new LFUNode('buffer head', null)
    this.tail = new LFUNode('buffer tail', null)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
}

LFUDoblyLinkedList.prototype.insertAtHead = function(node){
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
    node.prev = this.head   
    this.size++
}
LFUDoblyLinkedList.prototype.removeAtTail = function(){
    let oldTail = this.tail.prev
    let prev = this.tail.prev

    prev.prev.next = this.tail
    this.tail.prev = prev.prev
    this.size--

    return oldTail
}
LFUDoblyLinkedList.prototype.removeNode = function(node){
    node.prev.next = node.next
    node.next.prev = node.prev
    this.size--
}

LFUCache.prototype.set = function(key, value){
    let node = this.keys[key]

    //si el nodo no existe
    if(node == undefined){
        node = new LFUNode(key, value)
        this.keys[key] = node

        //verificamos si la hash table esta llena
        if(this.size != this.capacity){
            if(this.freq[1] ==undefined){
                this.freq[1] = new LFUDoblyLinkedList()
            }
            this.freq[1].insertAtHead(node)
            this.size++

        }else{
            let oldTail = this.freq[this.minFreq].removeAtTail()
            delete this.keys[oldTail.key]

            if(this.freq[1] ==undefined){
                this.freq[1] = new LFUDoblyLinkedList()
            }
            this.freq[1].insertAtHead(node)
        }
        this.minFreq = 1

    }else{  //si el nodo sí existe
        let oldFreq = node.freqCount
        node.data = value //////
        node.freqCount++

        //eliminamos el nodo de lista de frecuencias anteriores
        this.freq[oldFreq].removeNode(node)

        if(this.freq[node.freqCount] == undefined){
            this.freq[node.freqCount] = new LFUDoblyLinkedList()
        }
        this.freq[node.freqCount].insertAtHead(node)

        if(oldFreq == this.minFreq && this.size == this.capacity){
            this.minFreq ++
        }
    }
}
LFUCache.prototype.get = function(key){
    let node = this.keys[key]  

    //verficamos si el nodo existe
    if(node == undefined){
        return null
    }else{
        let oldFreqCount = node.freqCount
        node.freqCount++

        this.freq[oldFreqCount].removeNode(node)

        if(this.freq[node.freqCount] == undefined){
            this.freq[node.freqCount] = new LFUDoblyLinkedList()
        }
        this.freq[node.freqCount].insertAtHead(node)


        //--------------FALTA COMPLETAR EL AUMENTO DE minFreq-------------------------------
        /* if(oldFreqCount == this.minFreq && this.size == this.capacity){
            this.minFreq++
        } */
        return node.data
    }
}
var cache = new LFUCache(5)
cache.set(1, 1)
cache.set(1, 1)
cache.set(2, 2)
cache.set(2, 2)
cache.set(3, 3)
cache.set(3, 3)
cache.set(4, 4)
cache.set(4, 4)
cache.set(5, 5)
cache.set(5, 5)

console.log(cache.get(1))
cache