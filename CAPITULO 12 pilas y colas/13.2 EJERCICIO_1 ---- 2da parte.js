

//practicando ejercicio 1 - segunda parte del libro


//MI SOLUCION
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
/* var una_cola = new Queue()
una_cola.enqueue(1)
una_cola.enqueue(2)
una_cola.enqueue(3)

una_cola.dequeue()
console.log(una_cola.size())
una_cola */

class StackUsingQueue{
    constructor(){
        this.inbox = new Queue()
        this.outbox = new Queue()
    }
    push(value){
        this.inbox.enqueue(value)
    }
    pop(){
        let longitud = this.inbox.size()
        
        if(this.outbox.isEmpty()){
            let contador = 1
            
            for(let x = 0; x < longitud; x++){
                let inboxWithTheirMethods = this.inbox.getQueue(), 
                    queueExported = new Queue(inboxWithTheirMethods)

                while(queueExported.size() != contador){
                    queueExported.dequeue()

                }                
                this.outbox.enqueue(queueExported.dequeue())
                contador++
            }
        }

        this.inbox.dequeue()
        return this.outbox.dequeue()

        /* 
            Complejidad de tiempo O(n^2)
            Complejidad de memoria O(n)
        */
    }
}
var pila = new StackUsingQueue()
pila.push('a')
pila.push('b')
pila.push('c')
pila.push('d')

console.log(pila.pop())
console.log(pila.pop())
console.log(pila.pop())
console.log(pila.pop())

pila
