
//mi solución al ejercicio 1

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



/* ■■■■■■■■■■■■■■■■■■■■ IMPLEMENTACION COMPLETA MIN HEAP ■■■■■■■■■■■■■■■■■■■■ */
function MinHeap(){
    this.items = []
}
//creamos la herencia 
MinHeap.prototype = Object.create(Heap.prototype)


MinHeap.prototype.add = function(item){
    this.items[this.items.length] = item
    this.bubbleUp()
    /* 
        Complejidad de tiempo O(log2 (n) )
    */
}
MinHeap.prototype.poll = function(){
    let item = this.items[0]
    this.items[0] = this.items[this.items.length - 1]
    this.items.pop()
    this.bubbleDown()
    return item
    /* 
        Complejidad de tiempo O(log2 (n) )
    */
}
//la percolación permite mantener sus estructura
//percolacion burbujeado abajo
MinHeap.prototype.bubbleDown = function(){
    let index = 0

    //el bucle solo pasará 2 veces debido a que solo tiene 2 hijos
    while(this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index]){
        let smallerIndex = this.leftChildIndex(index)

        if(this.rightChild(index) < this.items[smallerIndex]){
            smallerIndex = this.rightChildIndex(index)
        }
        this.swap(index, smallerIndex)
        index = smallerIndex
    }
}
//percolacion burbujeado arriba
MinHeap.prototype.bubbleUp = function(){
    let index = this.items.length - 1
    while(this.parent(index) > this.items[index]){
        this.swap(this.parentIndex(index), index)
        index = this.parentIndex(index) //index tama la posición del padre
    }
    
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



/* ======================= mi solución al ejercicio 1 ======================= */
//hallar la mediana a medida que se ingresan numeros

function HeapsCollection(){
    this.minHeap = new MinHeap() //min-heap de los mayores de todos los numeros
    this.maxHeap = new MaxHeap() //max-heap de los menores de todos los numeros
}
HeapsCollection.prototype.push = function(value){    
    
    //con la primera condición nos aseguramos de enviar el valor primero a min-heap
    if(this.minHeap.size() == 0 && this.maxHeap.size() == 0){
        this.minHeap.add(value)
    }else if(value > this.minHeap.peek()){
        this.minHeap.add(value)
    }else{
        this.maxHeap.add(value)
    }

    //rebalanceamos la longitud de maxheap y minheap
    if(this.minHeap.size() - this.maxHeap.size() > 1){
        this.maxHeap.add(this.minHeap.poll())
    }else if((this.maxHeap.size() - this.minHeap.size() > 1)){
        this.minHeap.add(this.maxHeap.poll())
    }
    
}

HeapsCollection.prototype.median = function(){

    //si los heaps están vacios regresamos -infinito
    if(this.minHeap.size() == 0 && this.maxHeap.size() == 0){
        return Number.NEGATIVE_INFINITY
    }else if(this.minHeap.size() == this.maxHeap.size() ){
        return (this.minHeap.peek() + this.maxHeap.peek()) / 2
    }else if(this.minHeap.size() > this.maxHeap.size()){
        return this.minHeap.peek()
    }else{
        return this.maxHeap.peek()
    }
}
var medianH = new HeapsCollection();

console.log(medianH.median());
medianH.push(12);
console.log(medianH.median()); // 12
medianH.push(2);
console.log(medianH.median()); // 7 ( because 12 + 2 = 14; 14/2 = 7)
medianH.push(23);
console.log(medianH.median()); // 12
medianH.push(13);
console.log(medianH.median()); // 12.5
medianH.push(50);
console.log(medianH.median()); // 13
medianH.push(17);
console.log(medianH.median()); // 15 
medianH.push(20);
console.log(medianH.median()); // 17
medianH.push(55);
console.log(medianH.median()); //18.5


