
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
Queue.prototype.dequeue = function(){
    return this.array.shift()   //shift() -> remueve el primer elemento de un array y lo devuelve

    //Complejidad de O(n); debido a que despues de haber eliminado al primero el resto de los elementos tienen que moverse
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


//eliminamos el primero en la cola
console.log(cola.dequeue())


cola
