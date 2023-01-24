

//mi solucion al ejercicio 4
/* --------------------stack-------------------------- */
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

class SortableStack{
    constructor(array){
        this.arrayUnsorted = new Stack(array)
        this.arraySorted = new Stack()
    }
    sortStackDescending(){
        let length = this.arrayUnsorted.size()        

        for(let x = 0; x < length; x++){
            this.arraySorted.push(this.arrayUnsorted.pop())
            let temp = []
            
            while(this.arrayUnsorted.isEmpty() == false){
                if(this.arrayUnsorted.peek() > this.arraySorted.peek()){
                    temp.push(this.arraySorted.pop())
                    this.arraySorted.push(this.arrayUnsorted.pop())

                }else{
                    temp.push(this.arrayUnsorted.pop())
                }
            }
            this.arrayUnsorted = new Stack(temp)  

        }

        return this.arraySorted
    }
}
var sorted = new SortableStack([9,5,6,3,2,7])
console.log(sorted.sortStackDescending())
console.log(sorted.arrayUnsorted.peek())
sorted