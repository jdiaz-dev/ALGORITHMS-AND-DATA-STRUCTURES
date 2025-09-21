
/* ========================= IMPLEMENTCION DE LAST FRECUENCY USED(LFU) CACHING ===================== */

/* 
    **Least Frequently Used Caching
        -el almacenamiento menos frecuentemente usado es un algoritmo usado por el sistema operativo para administrar la memoria
        --cuando el caché exede su límte, el sistema elimina el boque menos frecuentemente usado
        --cada bloque cargado en el cache es asignado con un contador e incrementado cada vez que se hace referencia a ese bloque

        --cuando el caché exede su límite, el sistema busca el bloque con el contador mas y lo remueve del cache 
        --Aunque este enfoque parace intuitivo, no es ideal cuando un item en la memoria es referenciado repetidas veces por una cantidad corta de tiempo y no se accede otra vez
        --la frecuencia de ese bloque es alta, pero podría forzar al sistema a eliminar otros bloques que podrian ser utilizados frecuentemente
        --nuevos items en el sistema son susceptibles de ser eliminados rapidamente del sistema debido a su baja frecuencia

        --debido a esos problemas LFU es poco comun, pero sistemas hibridos utilizan el el núcleo del concepto de LFU, por ejemplo los teclados de los sistemas de aplicaciones móviles, dode la app sugiere palabras al teclado de la app, ahí si tiene mucho sentido implementear LFU caching, ya que el usuario probablemente usa la misma palabra muchas veces, donde la frecuencia de la palabra es útil para ver si la palabra debería existir en el cache

    * LFU behavior
          7  0  1  2  0  3  0  4  2  3  0  3  2  1  2
        ----------------------------------------------
        | 7| 7| 7| 2| 2| 2| 2| 4| 4| 3| 3| 3| 3| 3| 3| 
        ----------------------------------------------
        |  | 0| 0| 0| 0| 0| 0| 0| 0| 0| 0| 0| 0| 0| 0| 
        ----------------------------------------------
        |  |  | 1| 1| 1| 3| 3| 3| 2| 2| 2| 2| 2| 1| 2| 
        
        * frecuencies
        7 = 0        2 = 3
        0 = 0        3 = 3
        1 = 1        4 = 0

         * frecuencies
        7 = 0        2 = 1
        0 = 2        3 = 0
        1 = 1        4 = 0


*/

//7--el LFU caching usa una lista doblemente enlazada para eliminar elementos en un tiempo O(1) la LFU caching tiene un contador que representa la frecuencia de este elemento después de haber sido insertado en el primer tiempo

function LFUNode(key, value) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.data = value;
    this.freqCount = 1;
}

function LFUDoublyLinkedList() {
    this.head = new LFUNode('buffer head', null);
    this.tail = new LFUNode('buffer tail', null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
}

/* --------------------------------------------tabla hash */
function LFUCache(capacity) {
    this.keys = {}; // stores LFUNode   
    this.freq = {}; // stores LFUDoublyLinkedList   ,   store keys of frecuency
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0;
}


LFUDoublyLinkedList.prototype.insertAtHead = function(node) {
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
    this.size++;
}

LFUDoublyLinkedList.prototype.removeAtTail = function() {   
    var oldTail = this.tail.prev;
    var prev = this.tail.prev;
    prev.prev.next = this.tail; //removes last node by omision
    this.tail.prev = prev.prev;
    this.size--;
    return oldTail; //will return the penultimate
}

LFUDoublyLinkedList.prototype.removeNode = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    this.size--;
}




LFUCache.prototype.set = function(key, value) {
    var node = this.keys[key];

    //if node in key tables not exist
    if (node == undefined) {
        node = new LFUNode(key, value);

        this.keys[key] = node;

        //for the lists
        if (this.size != this.capacity) {
            // insert without deleting
            if (this.freq[1] === undefined) {
                this.freq[1] = new LFUDoublyLinkedList();
            }
            this.freq[1].insertAtHead(node);
            this.size++;

        //always it will create a freq[1]
        } else {
            // delete and insert
            var oldTail = this.freq[this.minFreq].removeAtTail();   //eliminamos la frecuencia vieja(que no sea la mas alta)
            delete this.keys[oldTail.key];

            if (this.freq[1] === undefined) {
                this.freq[1] = new LFUDoublyLinkedList();
            }

            this.freq[1].insertAtHead(node);
        }
        this.minFreq = 1; //because node never has existed

    } else {
        var oldFreqCount = node.freqCount;  
        node.data = value;
        node.freqCount++;
        
        //removes node of frecuency tables
        this.freq[oldFreqCount].removeNode(node);

        if (this.freq[node.freqCount] === undefined) {
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[node.freqCount].insertAtHead(node);
        
        //not understanded
        if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).size == 0) {
            this.minFreq++;
        }
        
    }
    
}




LFUCache.prototype.get = function(key) {
    var node = this.keys[key];

    if (node == undefined) {
        return null;
    } else {

        var oldFreqCount = node.freqCount;
        node.freqCount++;

        this.freq[oldFreqCount].removeNode(node);

        if (this.freq[node.freqCount] === undefined) {
            this.freq[node.freqCount] = new LFUDoublyLinkedList();
        }

        this.freq[node.freqCount].insertAtHead(node);

        if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).length == 0) {
            this.minFreq++;
        }
        return node.data;
    }
}

var myLFU = new LFUCache(5);
myLFU.set(1, 1); // state of myLFU.freq: {1: 1}
myLFU.set(2, 2); // state of myLFU.freq: {1: 2<->1}
myLFU.set(3, 3); // state of myLFU.freq: {1: 3<->2<->1}
myLFU.set(4, 4); // state of myLFU.freq: {1: 4<->3<->2<->1}
myLFU.set(5, 5); // state of myLFU.freq: {1: 5<->4<->3<->2<->1}
myLFU.get(1); // returns 1, state of myLFU.freq: {1: 5<->4<->3<->2, 2: 1}
myLFU.get(1); // returns 1, state of myLFU.freq: {1: 5<->4<->3<->2, 3: 1}
myLFU.get(1); // returns 1, state of myLFU.freq: {1: 5<->4<->3<->2, 4: 1}
myLFU.set(6, 6); // state of myLFU.freq: {1: 6<->5<->4<->3, 4: 1}
myLFU.get(6); // state of myLFU.freq: {1: 5<->4<->3, 4: 1, 2: 6}
myLFU

var objeto = {
    obj:{jonathan:'jonathan'},
    size:4
    
}
console.log(Object.keys(objeto.size))