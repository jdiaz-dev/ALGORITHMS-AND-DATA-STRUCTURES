
//SOLUCION DEL LIBRO AL EJERCICIO 3

/* estructura stack */
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
Stack.prototype.searchStack = function(pila, element){

    let array_y_sus_metodos = pila.getBuffer(),
        objetoExportado = new Stack(array_y_sus_metodos)

    while(objetoExportado.isEmpty() == false){
        if(objetoExportado.pop() == element){
            return true
        }
    }

    return false
    //Complejidad de tiempo y memoria O(n)
}




/* funcion que valida parentesis */
function isParenthesisValid(collectionParenthesis){
    let stack = new Stack()

    for(let x = 0; x < collectionParenthesis.length; x++){
        if(collectionParenthesis.charAt(x) == '('){
            stack.push('(')

        }else if(collectionParenthesis.charAt(x) == ')'){
            if(stack.isEmpty()) return false

            stack.pop()
        }

    }

    return stack.isEmpty()
}
/* 
    Complejidad de tiempo O(n)
    Complejidad de espacio O(n/2)
*/

console.log(isParenthesisValid('()()()'))
console.log(isParenthesisValid('((()))'))
console.log(isParenthesisValid('((())'))
console.log(isParenthesisValid('(()))'))
  