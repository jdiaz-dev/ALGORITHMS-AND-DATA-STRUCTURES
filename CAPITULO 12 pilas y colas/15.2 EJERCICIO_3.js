
//mi solucion al ejercicio 3
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

function ValidateParenthesis(collectionParenthesis){
    let splited = collectionParenthesis.split('')
    splited
    let parenthesisStored = new Stack(splited),
        longitud = parenthesisStored.pila.length
    
    if(longitud % 2 != 0)   return false

    for(let x = 0, y = longitud - 1; x < longitud / 2; x++, y--){
        if(parenthesisStored.pila[x] == parenthesisStored.pila[y]){
            return false
        }
    }

    return true
}
console.log(ValidateParenthesis('()()'))
console.log(ValidateParenthesis('((()'))
console.log(ValidateParenthesis('((()))'))