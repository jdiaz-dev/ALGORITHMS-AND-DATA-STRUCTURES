
//DEL LIBRO: solucion al problema 2

/* ESTRUCTURA DE DATO COLA */
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
    if(this.array.length == 0)  return 'is empty'

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
Queue.prototype.accessTo_N_element = function(theQueue,n){
    if(n < 0 || n > this.array.length) throw 'ERROR feo'

    let queueWithTheirMethods = theQueue.getQueue(),
        queueExported = new Queue(queueWithTheirMethods)
    
    while( --n != 0 ){
        queueExported.dequeue()
    }

    return queueExported.dequeue()
}
Queue.prototype.searchQueque = function(theQueue, element){

    let queueWithTheirMethods = theQueue.getQueue()
        queueExported = new Queue(queueWithTheirMethods)
    
    while(queueExported.isEmpty() == false){
        if(queueExported.dequeue() == element)   return true
    }
    return false

}



/* OBJETO CLIENTE */
function Customer(name, order){
    this.name = name
    this.order = order
}


/* OBJETO CAJERO */
function Cashier(){
    this.customers = new Queue()
}
Cashier.prototype.addOrder = function(customer){
    this.customers.enqueue(customer)
}
Cashier.prototype.deliverOrder = function(){
    let deliverCustomer = this.customers.dequeue()
    
    if(deliverCustomer == 'is empty'){
        return 'is empty'
    }else{
        return `${deliverCustomer.name} ya esta listo su ${deliverCustomer.order}`
    }
    
}

var customer1 = new Customer('Alberto','Trucha frita')
var customer2 = new Customer('Esteban','Saltado')
var customer3 = new Customer('Luis','Estofado')
var customer4 = new Customer('Nicolas','Lentejas')

var cashier = new Cashier()
cashier.addOrder(customer1)
cashier.addOrder(customer2)
cashier.addOrder(customer3)
cashier.addOrder(customer4)
cashier

console.log(cashier.deliverOrder())
console.log(cashier.deliverOrder())
console.log(cashier.deliverOrder())
console.log(cashier.deliverOrder())
console.log(cashier.deliverOrder())
cashier