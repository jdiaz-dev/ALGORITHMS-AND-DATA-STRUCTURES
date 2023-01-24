
//mi solucion ordenes de comida
//solucion combinada con tablas hash
class HashRequests{
    constructor(size){
        this.size = size
        this.table = new Array(size)
        this.buildToothTable()
        this.limit = 0
    }
    put(client, order){
        if(this.limit >= this.size) return 'Hash Table is full'

        let clientHashed = this.hash(client), indexClient = 0, squareIndex = 1
        
        while(this.table[clientHashed][indexClient] != null){
            clientHashed += Math.pow(squareIndex,2)
            clientHashed= clientHashed % this.size

            squareIndex++
        }
        this.table[clientHashed][indexClient] = client
        this.table[clientHashed][indexClient + 1] = order
        this.limit++
    }
    get(orderClient){

        let clientHashed = this.hash(orderClient), indexClient = 0, squareIndex = 1, counter = 0

        while(this.table[clientHashed][indexClient] != orderClient && counter <= this.limit){
            clientHashed += Math.pow(squareIndex,2)
            clientHashed = clientHashed % this.size

            squareIndex++
            counter++
        }

        if(counter > this.limit){
            return 'No existe cliente'
        }else{
            return this.table[clientHashed][indexClient + 1]
        }

    }
    showTable(){
        for(let key = 0; key < this.table.length; key++){
            if(this.table[key] != null){
                console.log(`${key}:${this.table[key]}`)
            }
        }
    }
    hash(client){
        let numberHelp = 0

        for(let x = 0; x < client.length; x++){
            numberHelp = this.size*numberHelp + client.charCodeAt(x)
        }
        
        return this.doubleHash(numberHelp % this.size)
    }
    doubleHash(clientHashed){
        let R = this.size - 4

        return R - clientHashed % R
    }
    buildToothTable(){
        for(let x = 0; x < this.table.length; x++){
            this.table[x] = new Array()
        }
    }
}
var hash = new HashRequests(11)

class QueueClients{
    constructor(queue){
        this.hashClients = new HashRequests(11)
        this.clients = []
        this.count = 0
        this.first = 0
        if(queue){
            this.array = queue
            this.count = queue.length
        }
    }
    addOrder(client, order){
        this.hashClients.put(client, order)
        this.clients.push(client)
        this.count++
    }
    deliverOrder(){
        if(this.count == 0) return 'No hay mas ordenes en espera'

        let orderClient = this.clients.shift(),
            orderReady = this.hashClients.get(orderClient)
            orderReady
        this.count--
        return `${orderClient} ya esta listo su ${orderReady}`
    }
    isEmpty(){
        return this.requests.length == 0
    }
    getQueue(){
        return this.hashClients.showTable()
    }
    size(){
        return this.requests.length
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

var solicitudesDeComida = new QueueClients()
solicitudesDeComida.addOrder('ronaldo','pescado')
solicitudesDeComida.addOrder('veleza','chicharron')
solicitudesDeComida.addOrder('jonathan','frejoles')
solicitudesDeComida.addOrder('esteban','menestron')
solicitudesDeComida.addOrder('eduardo','milanesa')

console.log(solicitudesDeComida.deliverOrder())
console.log(solicitudesDeComida.deliverOrder())
console.log(solicitudesDeComida.deliverOrder())
console.log(solicitudesDeComida.deliverOrder())
console.log(solicitudesDeComida.deliverOrder())
console.log(solicitudesDeComida.deliverOrder())

/* solicitudesDeComida.getQueue() */
solicitudesDeComida