

//mis solucion al ejercicio 1
//pero esta solucion no tiene nada que ver con el enunciado del libro, es mas bien una practica mia
class Stack{
    constructor(array){
        this.pila = []
        this.count = 0
        if(array){
            this.pila = array
            this.count = array.length
        }
    }
    push(value){
        if(value == null) return
        this.pila[this.count] = value
        this.count++
    }
    pop(){
        if(this.count == 0) return null

        this.count--
        return this.pila.pop()
    }
    peek(){ //peek--vistaso
        if(this.count == 0) return null
        
        return this.pila.length - 1
    }
    getStack(){
        return this.pila.slice()
    }
    isEmpty(){
        return this.count == 0
    }
    size(){
        return this.count
    }
    swap(){
        let indice = this.pila.length -1, temp = this.pila[indice]
        this.pila[indice] = this.pila[indice -1]
        this.pila[indice - 1] = temp
    }
    accessTo_N_element(pila, n){
        if(n <= 0 || n > this.count ) return 'ERROR feo'

        let array_y_sus_metodos = pila.getStack(),
            objetoExportado = new Stack(array_y_sus_metodos)
            
        while( --n != 0){
            objetoExportado.pop()
        }
        return objetoExportado.pop()
    }
    searchStack(pila, element){
        
        let array_y_sus_metodos = pila.getStack(),
            objetoExportado = new Stack(array_y_sus_metodos)

        while(objetoExportado.isEmpty() == false){
            if(objetoExportado.pop() == element){
                return true
            }
        }
        return false
    }
    
}

var mi_stack = new Stack()

//agregamos elementos al stack
mi_stack.push('javascript')
mi_stack.push('PHP')
mi_stack.push('JAVA')
mi_stack.push('C')



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
        if(this.count == 0) throw 'Is Empty'

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
var cola = new Queue()

//encolamos
cola.enqueue('planchas')
cola.enqueue('abdominales')
cola.enqueue('sprints')
cola.enqueue('sentadillas')



function stackToQueue(the_stack){
    let stackExported = the_stack.getStack(),
        stackWithTheirMethods = new Stack(stackExported)

    let newQueue = new Queue()

    while(stackWithTheirMethods.isEmpty() == false){
        let element = stackWithTheirMethods.pop()
        newQueue.enqueue(element)
    }

    return newQueue
}
console.log(stackToQueue(mi_stack))
var convertedToQueue = stackToQueue(mi_stack)


function queueToStack(the_queue){
    let queueExported = the_queue.getQueue(),
        queueWithTheirMethods = new Queue(queueExported)

    let newStack = new Stack()
    
    while(queueWithTheirMethods.isEmpty() == false){
        let element = queueWithTheirMethods.dequeue()
        newStack.push(element)
    }

    return newStack
}
console.log(queueToStack(cola))

/* 
    COMPORTAMIENTO
        ■ pila a cola : [1,2,3,4,5] -> [5,4,3,2,1]
        ■ cola a pila : [a,b,c,d,e] -> [a,b,c,d,e]
*/
