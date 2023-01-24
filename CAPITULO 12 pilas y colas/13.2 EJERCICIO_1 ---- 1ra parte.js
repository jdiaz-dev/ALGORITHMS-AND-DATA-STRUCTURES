
//practicando ejercicio 1 - primera parte del libro
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
class twoStacksQueue{
    constructor(){
        this.inbox = new Stack()
        this.outbox = new Stack()
    }
    enqueue(value){
        this.inbox.push(value)
    }
    dequeue(){
        if(this.outbox.isEmpty()){
            while(!this.inbox.isEmpty()){
                this.outbox.push(this.inbox.pop())
            }
        }
        return this.outbox.pop()
    }
}
var cola = new twoStacksQueue()
cola.enqueue('a')
cola.enqueue('b')
cola.enqueue('c')
cola

console.log(cola.dequeue())
console.log(cola.dequeue())
console.log(cola.dequeue())
cola
