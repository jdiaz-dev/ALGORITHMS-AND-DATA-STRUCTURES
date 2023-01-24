

/* ------------------------MERGE SORT----------------------------- */
function merge(leftA, rightA){
    let result = [], indexLeft = 0, indexRight = 0

    while(indexLeft < leftA.length && indexRight < rightA.length){
        if(leftA[indexLeft] < rightA[indexRight]){
            result.push(leftA[indexLeft++])      
        }else{
            result.push(rightA[indexRight++])          
        }
    }

    let leftRemains = leftA.slice(indexLeft),
        rightRemains = rightA.slice(indexRight)

    return result.concat(leftRemains).concat(rightRemains)
}

function mergeSort(array){
    if(array.length < 2){
        return array
    }

    let midPoint = Math.floor((array.length) / 2),
        leftArray = array.slice(0, midPoint),
        rightArray = array.slice(midPoint)
    
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}
/* console.log(mergeSort([9,5,6,3,2,7])) */


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

class SortableStack{
    constructor(array){
        this.arrayUnsorted = new Stack(array)
        this.arraySorted = new Stack(this.sortStackAscending())
    }
    sortStackAscending(){
        return mergeSort(this.arrayUnsorted.getStack())
    }
}

var sorted = new SortableStack([9,5,6,3,2,7])
sorted