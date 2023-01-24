//DEL LIBRO

function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}
//metodo que devuelve el array entero
Stack.prototype.push = function(value){
    this.array.push(value)
}
Stack.prototype.pop = function(){
    return this.array.pop()
}
Stack.prototype.getBuffer = function(){
    return this.array.slice();
}

//metodo que revisa si esta vacio
Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}

//metodo que revisa el ultimo elemento del array
Stack.prototype.peek = function() {
    return this.array[this.array.length - 1];
}

//el acceso comenzara desde el ultimo que ingreso
Stack.prototype.accessTo_N_element = function(pila, n){
    if(n <= 0 || n > this.array.length ) throw 'ERROR FEO'

    let array_y_sus_metodos = pila.getBuffer()
    //luego sentenciamos a este array para obtener los metodos de la clase prinicipal
    let objetoExportado = new Stack(array_y_sus_metodos)
    
    while( --n !== 0){
        objetoExportado.pop()
    }
    return objetoExportado.pop()

    //Complejidad de tiempo y memoria O(n)
}

//instance of the stack class
var stack_1 = new Stack();
stack_1.push('javascript')
stack_1.push('JAVA')
stack_1.push('C')

console.log(stack_1.accessTo_N_element(stack_1, 3))
stack_1

