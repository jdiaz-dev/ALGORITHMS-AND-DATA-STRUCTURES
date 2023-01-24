/* 
    //DE WEB
    https://initjs.org/implement-a-queue-in-javascript-de306a8821c#.r6sdesei2
    
    --se usa para la construccion de otras estructuras de datos como en el recorrido transversal de un arbol 
    --Tiene dos metodos principales
        enqueue() -> encolar o agregar un nodo
        dequeue() -> desencolar(elimina al primero y devuelve el siguiente nodo de la cola)

    --Metodos secundarios
        peek() -> devuelve el nodo al frente de la cola
        isEmpty()

    --Los cuatro métodos anteriores tienen una comlejidad de O(1) constante
*/

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
cola.enqueue('abominales')
cola.enqueue('sprints')
cola.enqueue('sentadillas')

//desencolamos a uno
cola.dequeue()

//revisamos si esta vacio
console.log(cola.isEmpty())

//obtenemos toda la cola
console.log(cola.getQueue())

//revisamos el primer elemento
console.log(cola.peek())

//accedemos a N elemento dado
console.log(cola.accessTo_N_element(cola,2))

//buscamos en la cola
console.log(cola.searchQueue(cola,'sprints'))

cola