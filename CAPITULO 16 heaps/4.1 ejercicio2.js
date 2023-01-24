
//solución del libro al ejercicio 2

/* ■■■■■■■■■■■■■■■■■■■■ FUNCIONES DE AYUDA DE UN HEAP ■■■■■■■■■■■■■■■■■■■■ */
function Heap(){
    this.items = []
}
//si el valor del padre es mayor, cambiará con el valor del hijo
Heap.prototype.swap = function(index1, index2){
    let temp = this.items[index1]
    this.items[index1] = this.items[index2]
    this.items[index2] = temp
}
//devuelve el indice del padre
Heap.prototype.parentIndex = function(index){ //llega como parámetro el índice

    return Math.floor((index - 1) / 2)  //formula para el indice del padre
}
//devuelve el índice del hijo izquierdo
Heap.prototype.leftChildIndex = function(index){
    return index*2 + 1  //formula para el indice del hijo izquierdo
}
//devuelve el índice del hijo derecho
Heap.prototype.rightChildIndex = function(index){
    return index*2 + 2  //formula para el indice del hijo derecho
}
//devuelve el padre el de los valores que se han ingresado
Heap.prototype.parent = function(index){
    return this.items[this.parentIndex(index)]
}
//devuelve el hijo izquierdo
Heap.prototype.leftChild = function(index){
    return this.items[this.leftChildIndex(index)]
}
//devuelve el hijo derecho
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

}
MinHeap.prototype.poll = function(){
    let item = this.items[0]
    this.items[0] = this.items[this.items.length - 1]
    this.items.pop()
    this.bubbleDown()
    return item
}

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

var minHeap = new MinHeap()
minHeap.add(1);
minHeap.add(10);
minHeap.add(5);
minHeap.add(100);
minHeap.add(8);
minHeap




/* ======================= SOLUCION DEL LIBRO AL EJERCICIO 2 ======================= */
function Kth_smallestElement(array, k){
    //creamos un nuevo array con los elementos
    let minH = new MinHeap()

    for(let x = 0; x < array.length; x++){
        minH.add(array[x])
    }

    for(let y = 1; y < k; y++){
        minH.poll()
    }
    
    return minH.poll()
}

var result = Kth_smallestElement(minHeap.items, 2)
result



