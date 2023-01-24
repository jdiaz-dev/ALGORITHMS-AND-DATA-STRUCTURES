
//DEL LIBRO : la solucion del libro es mejor que la mia
/* ==================2DA PARTE: COLA USANDO PILAS====================== */
/* --------STACK-----*/

class Queue{
    constructor(queue){
        this.array = []
        this.count = 0
        this.first = 0
        if(queue){
            this.array = queue
            this.count = queue.length
        }
    }
    enqueue(value){
        this.array.push(value)
        this.count++
    }
    dequeue(){
        if(this.array.length == 0) return 'Is Empty'

        this.count--
        return this.array.shift()
    }
    isEmpty(){
        return this.array.length == 0
    }
    getQueue(){
        return this.array.slice()
    }
    size(){
        return this.array.length
    }
    peek(){
        return this.array[this.first]
    }
    accessTo_N_element(the_queue, n){
        if(n > this.count || n <= 0) throw 'ERROR feo'

        let queueWithTheirMethods = the_queue.getQueue(),
            
            queueExported = new Queue(queueWithTheirMethods)
            
        while( --n != 0){
            queueExported.dequeue()
        }

        return queueExported.dequeue()
    }
    searchQueue(the_queue, element){

        let queueWithTheirMethods = the_queue.getQueue(),
            queueExported = new Queue(queueWithTheirMethods)
            
        while(queueExported.isEmpty() == false){
            if(queueExported.dequeue() == element){
                return true
            }
        }
        
        return false
    }
}


class QueueToStack{
    constructor(){
        this.inbox = new Queue()
    }
    push(value){
        this.inbox.enqueue(value)
    }
    pop(){
        let size = this.inbox.array.length - 1, 
        counter = 0,
        bufferQueue = new Queue()
            
        while( ++counter <= size){
            bufferQueue.enqueue(this.inbox.dequeue())
        }
        let popped = this.inbox.dequeue()
        this.inbox = bufferQueue
        return popped
    }
}

var stack = new QueueToStack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
stack