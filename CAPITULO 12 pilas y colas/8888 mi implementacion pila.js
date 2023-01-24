
/* 
    https://initjs.org/data-structure-stack-in-javascript-714f45dbf889
    //DE WEB
    --Son las estructuras de datos mas basicas
    --Es mas simple que una matriz
    --La complejidad de un array es O(n), debido a su iteracion
    --la complejidad de una pila es O(1) en todas sus metodos (push, pop, peek, empty, size, swap)
    --Para revisar algun n elemento, esto se hace desde arriba pero su complejidad es O(n)
    --Para "busqueda" O(n)
*/
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
        
        return this.pila[this.pila.length - 1]
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

//revisamos si esta vacio la incio
console.log(mi_stack.isEmpty())

//agregamos
mi_stack.push('javascript')
mi_stack.push('PHP')
mi_stack.push('JAVA')
mi_stack.push('C')

//revisamos el tamaño de la pila al inicio
console.log(mi_stack.size())

//revisamos si esta vacio despues de agregar datos
console.log(mi_stack.isEmpty())

//revisamos el ultimo dato
console.log(mi_stack.peek())

//intercambiamos ultimos
mi_stack.swap()
mi_stack

//elimanmos el ultimo
console.log(mi_stack.pop())

//revisamos tamaño al final
console.log(mi_stack.size())

//obteemos toda la pila
console.log(mi_stack.getStack())

//accedemos una posicion del stack
console.log(mi_stack.accessTo_N_element(mi_stack,4))

//buscamos si el elemento esta en el stack
console.log(mi_stack.searchStack(mi_stack, 'GO'))   //false

mi_stack
