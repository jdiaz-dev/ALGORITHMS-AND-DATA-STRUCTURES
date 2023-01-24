
//DEL LIBRO
function Queue(array){
    this.array = []
    if(array){
        this.array = array
    }
    
}
Queue.prototype.enqueue = function(value){
    if(value){
        this.array.push(value)
    }
}
Queue.prototype.getQueue = function(){
    return this.array.slice()
}
Queue.prototype.isEmpty = function(){
    return this.array.length == 0
}

Queue.prototype.peek = function(){
    return this.array[0]
}

var cola = new Queue()
cola.enqueue('planchas')
cola.enqueue('sentadillas')
cola.enqueue('tijeras')
cola.enqueue('sprints')

//revisamos el primero en la cola
console.log(cola.peek())

cola
