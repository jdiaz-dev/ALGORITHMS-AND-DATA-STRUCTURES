
/* 
    LINK : https://humanwhocodes.com/blog/2019/02/computer-science-in-javascript-doubly-linked-lists/
    github : https://github.com/humanwhocodes/computer-science-in-javascript/tree/master/tests/data-structures


    LISTAS DOBLEMENTE VINCULADA
        --las listas individualmente vinculadas necesitan un recorrido de toda la lista para las operaciones y por ello generalmente tienen un bajo rendimiento
        --una forma mejor a las listas vinculadas es agregar un seguno puntero en cada nodo que apunte al nodo anterior de la lista

        VENTAJAS
        --la ventaja de una lista doblemente vinculada radica en que se puede buscar en ambas direcciones
        --como tenemos la referencia del nodo anterior ya no debemos de iterar para elminr un nodo ( metodo pop() )

        DESVENTAJAS
        --las listas doblemente enlazadas utilizan mas memoria por nodo debido a sus dos punteros, pero nos permite desplazarnos en ambas direccioens
        --las listas doblemente enlazadas tienen una complejiddad de tiempo O(1) para la insercion o eliminacion de nodos, mientras que las listas simplemente enlazadas tienen una complejidad lineal O(n)

        NOTA:
        --muchas de las operaciones de las listas doblemente vinculadas son igual al de indivicualmente vinculada ya que terminan atravesando la mayor parte de la lista
        --por ello las listas doblemente enlazadas no ofrecen ninguna ventaja real sobre los arrays incorporada por JS para almacenar una coleccion de datos no relacionados
*/

/* clase nodo */
class Node{
    constructor(data){
        this.data  = data

        //next y previus son null porque al instaciar la clase los nodos anterirores y previos no se conocen
        this.next = null    
        this.previous = null
    }
}


/* clase de implementacion de la lista */
//las listas doblemente enlazadas deberian usarse cuando se desea hacer una busqueda completa por ambos lados(cabeza y cola)
class DoublyLinkedList{
    constructor(){
        //head y tail no estan destinados a acceder desde fuera de la clase
        this.tail = null
        this.head = null
    }
    //metodo que inserta por el frente y por la cola mas no mediante un indice dado
    insert(data){
        let newNode = new Node(data)

        //si el la lista no tiene nodos
        if(!this.head){
            this.head = newNode
        }else{
            this.tail.next = newNode
            newNode.previous = this.tail
        }

        //reasignamos la cola
        this.tail = newNode

        /* 
            Complejidad de tiempo O(1)
        */
    }
    //el metodo get() es igual al de la lista individualmente vinculada, debido a que debe recorrer toda la lista para obtener el valor del nodo
    get(index){

        //aseguramos que se un numero positivo
        if(index > -1){
            let current = this.head,
                counter = 0

            while((current != null) && (counter < index)){
                current = current.next
                counter++
            }

            return current != null ? current.data : undefined
        }else{
            return 'No exist negatives indices'
        }

        /* 
            Complejidad O(n)
            Complejidad de tiempo O(1)
        */
    }
    //método que remueve cualquier nodo mediante su indice
    remove(index){
        //en caso que la lista este vacia o el índice sea menor
        if(this.head == null || index < 0){
            throw new RangeError(`Index ${index} doesn´t exist`)
        }

        //en caso que el indice sea cero
        if(index == 0){

            let toReturn = this.head.data
            this.head = this.head.next

            //si era el unico elemento
            if(this.head == null){
                this.tail = null
            }else{
                //el previo de la nueva cabeza sera null
                this.head.previous = null
            }

            return toReturn
        }

        let current = this.head,
            counter = 0
        
        //mismo algoritmo usado en get()
        while(current != null && counter < index){
            current = current.next
            counter++
        }

        //si el nodo fue encontrado
        if(current !== null){
            
            //eliminamos por omision
            current.previous.next = current.next

            //si el nodo eliminado fue la cola
            if(this.tail == current){

                //eliminamos el nodo previus de la cola
                this.tail = this.tail.previous
            }else{
                current.next.previous = current.previous
            }
            return current.data
        }

        //si el nodo no fue encotrado
        throw new RangeError(`The index ${index} does not exit.`)

        /* 
            Comlejidad de tiempo O(n)
            Complejidad de memoria O(1)
        */
    }
    //metodo que hace una iteracion inversa comenzando desde la cola hasta que no haya nodos
    //crear un iterador inverso es util para descubrir nodos en la implementacion y evitar la reorganizar nodos solo para acceder en un orden diferente

    //una lista puede ser pensado como una pila pero con la capacidad de insertar y eliminar por los dos sentidos(cabeza y cola)
    *reverse(){

        let current = this.tail

        while(current !== null){

            yield current.data  //no me funciona yeld
            /* console.log(current.data) */
            current = current.previous
        }
    }
    
}
var listaDoble = new DoublyLinkedList()

//insertamos nodos
listaDoble.insert('diez')
listaDoble.insert('veinte')
listaDoble.insert('treinta')
listaDoble.insert('cuarenta')
listaDoble.insert('cincuenta')
listaDoble.insert('sesenta')

//obtenemos valor del nodo mediante su indice
console.log(listaDoble.get(1))

//eliminamos nodos
console.log(listaDoble.remove(0))
console.log(listaDoble.remove(1))

//iteramos de forma inversa(desde la cola)
for(let value of listaDoble.reverse()){
    console.log(value)
}


listaDoble