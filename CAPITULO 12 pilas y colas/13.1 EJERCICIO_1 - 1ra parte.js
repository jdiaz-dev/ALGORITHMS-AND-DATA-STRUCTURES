
//DEL LIBRO
/* ==================1RA PARTE: STACK USANDO COLAS====================== */
/* 
    DE QUE VA EL ASUNTO?
    --Imitar el comportamiento de una cola usando metodos de pilas
*/

/* --------STACK-----*/

function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}
Stack.prototype.push = function(value){
    this.array.push(value)
}
Stack.prototype.pop = function(){
    return this.array.pop()
}
Stack.prototype.getBuffer = function(){
    return this.array.slice();
}
Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}
Stack.prototype.peek = function() {
    return this.array[this.array.length - 1];
}
Stack.prototype.accessTo_N_element = function(pila, n){
    if(n <= 0 || n > this.array.length ) throw 'ERROR FEO'

    let array_y_sus_metodos = pila.getBuffer()    

    let objetoExportado = new Stack(array_y_sus_metodos)   
    
    while( --n !== 0){
        objetoExportado.pop()
    }
    return objetoExportado.pop()

    //Complejidad de tiempo y memoria O(n)
}
Stack.prototype.searchStack = function(pila, element){

    let array_y_sus_metodos = pila.getBuffer(),
        objetoExportado = new Stack(array_y_sus_metodos)

    while(objetoExportado.isEmpty() == false){
        if(objetoExportado.pop() == element){
            return true
        }
    }

    return false
    //Complejidad de tiempo y memoria O(n)
}



function TwoStackQueue() {
    this.inbox = new Stack();
    this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function(val) {
    this.inbox.push(val);
}

TwoStackQueue.prototype.dequeue = function() {
    console.log(this.inbox)
    if (this.outbox.isEmpty()) {
        while (!this.inbox.isEmpty()) {
            this.outbox.push(this.inbox.pop());
        }
    }
    return this.outbox.pop();
};
var queue = new TwoStackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue
console.log(queue.dequeue()); // 1
queue
console.log(queue.dequeue()); // 2
queue
console.log(queue.dequeue()); // 3
queue