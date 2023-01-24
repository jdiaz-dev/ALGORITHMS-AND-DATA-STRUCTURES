//DEL LIBRO
function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}
//metodo que devuelve el array entero
Stack.prototype.push = function(value){
    this.array.push(value)
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

//instance of the stack class
var stack_1 = new Stack();
stack_1.push('javascript')
stack_1.push('JAVA')
stack_1.push('C')

console.log(stack_1.peek())


