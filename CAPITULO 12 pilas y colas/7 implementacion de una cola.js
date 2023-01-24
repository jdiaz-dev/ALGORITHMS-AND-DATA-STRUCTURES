/* 
    DEL LIBRO
        --Es una estructura donde solamente puede remover el primer elemento añadido
        --Este principio es conocico como FIFO
        --Una cola es genial porque tiene un tiempo constante en diferentes operaciones
        --Al igual que con las pilas tiene limitaciones debido a que solo puede ser accedido uno a la vez
        --Se trabaja sobre los arrays
        --Se debe usar solamente cuando se necesita acceder al primer elemento
*/
function Queue(array){
    this.array = []
    if(array){
        this.array = array
    }
    
}
Queue.prototype.getQueue = function(){
    return this.array.slice()
}
Queue.prototype.isEmpty = function(){
    return this.array.length == 0
}

var cola = new Queue()
cola