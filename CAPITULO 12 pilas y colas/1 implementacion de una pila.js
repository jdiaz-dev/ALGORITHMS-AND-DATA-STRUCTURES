
/* 
    //DEL LIBRO
    --Es una estructura de dato en la cual el ultimo elemento insertado puede ser removido y accdedido
            --Su principio es LIFO(last in, first out)
            --Es genial porque es rapido
            --Ya que se sabe el ultimo elemento que puede ser removido, la busqueda e insercion sucede en un tiempo constante O(1)
            --Los stacks deben usarse sobre las matrices cuando se debe trabajar con datos en forma de LIFO

            --Su limitacion es que si quieres acceder a datos que no son los ultimos se debe remover los datos que estan encima de la estructura
*/
function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}
//metodo que devuelve el array entero
Stack.prototype.getBuffer = function() {
    return this.array.slice();
}
Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}


//instance of the stack class
var stack_1 = new Stack();

stack_1
