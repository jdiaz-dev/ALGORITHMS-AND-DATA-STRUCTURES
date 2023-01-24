
/* 
    LINK :  https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

    LISTAS ENLAZADAS
        --A diferencia de los arrays las listas no se ubican en ubicaciones contiguas
        --los elementos de datos se vinculan mediante punteros

        CARACTERISTICAS
        --los nodos estan conectados por punteros
        --el ultimo nodo apunta a null
        --la "cabeza" del puntero apunta al primer nodo de la lista

        VENTAJAS
        --una lista enlazada puede incrementar o disminuir su tamaño en tiempo de ejecucion
        --añade memoria a medida que crece la lista
        --otra ventaja es que a diferencia de un array puede insertar o eliminar datos sin reorganizar toda la estructura

        DESVENTAJAS
        --el acceso aleatorio de daatos no esta permitido.Se debe acceder a los nodos secuencialmente a partir del primero. Por ello hacer una busqueda en una lista enlazada es lenta
        --utiliza mas memoria debido al almacenamiento utilizado por sus punteros

        TIPOS DE LISTAS
        --hay muchas pero las mas populares son:
            ■listas simples
            ■listas dobles
            ■listas circulares

        OPERACION DE INSERTAR EN UNA LISTA ENLAZADA INDIVIDUALMENTE
        --insertar un nodo antes de la cabezera
        --insertar un nodo en medio de la lista
        --insertar un nodo despues de la cola

        ELIMINAR DE UNA LISTA ENLAZADA INDIVIDUALMENTE
        --eliminar el primer nodo
        --eliminar el ultimo nodo
        --eliminar un nodo del medio de la lista
*/
/* ------------------IMPLEMENTACION DE UNA LISTA ENLAZADA INDIVICUALMENTE------------------ */
class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next    //puntero de la lista
    }
}

class SinglyLinkedList{
    constructor(){
        //head es el puntero que señala el primer nodo de la lista
        this.head = null    //cabezera de la lista
    }
    insertAtBeginning(data){
        let newNode = new Node(data)

        //el puntero "next" es igual a la cabeza del puntero, asi que ambos punteros apuntan a hacia el mismo nodo
        newNode.next = this.head    //para que "newNode.next" apunte a null
        
        //como nosotros estamos insertando al principio, el puntero de la cabeza ahora debe apuntar al nuevo nodo(newNode)
        this.head = newNode

        return this.head
    }
    insertAtEnd(data){

        //creamos un nuevo nodo
        let newNode = new Node(data)

        //si no existe nada en la lista
        if(!this.head){
            this.head = newNode
            return this.head
        }

        //si ya existe elementos en la lista
        let tail = this.head
        while(tail.next !== null){
            tail = tail.next
        }
        tail.next = newNode

        return this.head
    }
    //metodo para obtener el indice de un nodo
    getAt(index){
        let counter = 0,
            node = this.head
        
        while(node){
            if(counter == index){
                return node
            }
            node = node.next
            counter++
        }
        return null
    }
    //metodo para insertar en medio de la lista
    insertAt(data, index){
        if(!this.head == null){
            this.head = new Node(data)
            return
        } 

        //si se quiere insertar al frente de la cabezera
        if(index == 0){
            this.head = new Node(data, this.head)
            return
        }

        //encontramos el nodo previo donde vamos a insertar el nuevo nodo
        const previus  = this.getAt(index - 1)
        let newNode = new Node(data)
        newNode.next = previus.next     //el nuevo nodo apunta donde apuntaba el nodo previo
        previus.next = newNode          //el nodo previo apunta al nuevo nodo

        return this.head
    }
    //metodo para eliminar el primer nodo de la lista
    deleteFirstNode(){
        if(!this.head){
            return
        }

        this.head = this.head.next
        return this.head
    }
    //metodo que elimina el nodo final de la lista
    deleteEndNode(){
        if(!this.head){
            return null
        }

        //si tiene un solo elemento
        if(!this.head.next){
            this.head.next = null
            return
        }

        //si tiene varios elementos debemos recorrer toda la lista
        let previus = this.head,
            tail = this.head.next

        while(tail.next != null){
            previus = tail
            tail = tail.next
        }
        previus.next = null
        return this.head
    }
    //Eliminar de un nodo mediante indice
    deleteAt(index){
        if(!this.head) return 'No exist elements in la list'
        
        if(index == 0){
            this.head = this.head.next
            return this.head
        }
        
        const previus = this.getAt(index - 1)
        if(!previus || !previus.next){
            return
        }
        previus.next = previus.next.next
        return this.head
    }
    //metodo que elimina toda la lista vinculada
    deleteList(){
        this.head = null
    }
}
var lista = new SinglyLinkedList()

//insertamos al principio de la lista
console.log(lista.insertAtBeginning('calabaza'))

//insertamos al final de la lista
console.log(lista.insertAtEnd('zapallo'))
console.log(lista.insertAtEnd('tomate'))
console.log(lista.insertAtEnd('zanahoria'))

//obtenemos el nodo del indice dado
console.log(lista.getAt(3))

//insertamos un nuevo nodo "antes" del indice dado
console.log(lista.insertAt('brocoli',1))

//eliminaremos el primer nodo de la lista
console.log(lista.deleteFirstNode())

//eliminamos el ultimo nodo de la lista
console.log(lista.deleteEndNode())

//eliminanos un nodo mediante indice
console.log(lista.deleteAt(1))

//eliminamos toda la lista vinculada
lista.deleteList()

lista