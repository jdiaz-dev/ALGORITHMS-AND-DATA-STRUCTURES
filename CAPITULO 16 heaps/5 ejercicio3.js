
// solución del libro al ejercicio 1

/* ■■■■■■■■■■■■■■■■■■■■ FUNCIONES DE AYUDA DE UN HEAP ■■■■■■■■■■■■■■■■■■■■ */
function Heap(){
    this.items = []
}
Heap.prototype.swap = function(index1, index2){
    let temp = this.items[index1]
    this.items[index1] = this.items[index2]
    this.items[index2] = temp
}
Heap.prototype.parentIndex = function(index){
    return Math.floor((index - 1) / 2)
}
Heap.prototype.leftChildIndex = function(index){
    return index*2 + 1
}
Heap.prototype.rightChildIndex = function(index){
    return index*2 + 2
}
Heap.prototype.parent = function(index){
    return this.items[this.parentIndex(index)]
}
Heap.prototype.leftChild = function(index){
    return this.items[this.leftChildIndex(index)]
}
Heap.prototype.rightChild = function(index){
    return this.items[this.rightChildIndex(index)]
}
Heap.prototype.peek = function(){
    return this.items[0]
}
Heap.prototype.size = function(){
    return this.items.length
}




/* ■■■■■■■■■■■■■■■■■■■■ IMPLEMENTACION COMPLETA MAX HEAP ■■■■■■■■■■■■■■■■■■■■ */
function MaxHeap(){
    this.items = []
}

//herencia
MaxHeap.prototype = Object.create(Heap.prototype)

MaxHeap.prototype.add = function(item){
    this.items[this.items.length] = item
    this.bubbleUp()
}
//metodo para eliminar el primer elemento del array
MaxHeap.prototype.poll = function(){
    let item = this.items[0]
    this.items[0] = this.items[this.items.length - 1]
    this.items.pop()
    this.bubbleDown()
    return item
}
//la percolación permite mantener sus estructura
//percolacion burbujeado abajo
MaxHeap.prototype.bubbleDown = function(){
    let index = 0

    while(this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index]){
        let biggerIndex = this.leftChildIndex(index)

        if(this.items[this.rightChildIndex(index)] > this.items[biggerIndex]){
            biggerIndex = this.rightChildIndex(index)
        }
        this.swap(biggerIndex, index)
        index = biggerIndex
    }
}
//percolacion burbujeado arriba
MaxHeap.prototype.bubbleUp = function(){
    let index = this.items.length - 1

    while(this.parent(index) < this.items[index]){
        this.swap(this.parentIndex(index), index)
        index = this.parentIndex(index) //index toma la posición del padre
    }
}

var maxheap = new MaxHeap()
maxheap.add(1);
maxheap.add(10);
maxheap.add(5);
maxheap.add(100);
maxheap.add(8);
maxheap

function getKthBiggestElement(array, k){
    let maxH = new MaxHeap()

    for(let x = 0; x < array.length; x++){
        maxH.add(array[x])
    }

    for(let y = 1; y < k; y++){
        maxH.poll()
    }

    return maxH.poll()
    /* 
        Complejidad de tiempo O( klog2 (n) )    k -> el enésimo elemento que se quiere eliminar
        Complejidad de espacio O(n)   n -> # de elementos del heap original
    */

}

var result = getKthBiggestElement(maxheap.items, 1)
result

//el heap original permancece intacto, pero se consume memoria al crear otro heap con los datos originales
maxheap