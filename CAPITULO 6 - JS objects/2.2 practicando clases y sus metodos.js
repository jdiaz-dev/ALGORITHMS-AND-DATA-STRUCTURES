
/* 
Para crear una clase, se debe de añadir una propiedad a la funcion como en los objetos

*/

function persona(nombre, apellido){

    //con "this" esto sera el constructor de la clase
    this.nombre = nombre
    this.apellido = apellido
}

//crearemos un metodo para la clase persona
persona.prototype.saludar = function(){
     return `Hola yo soy ${this.nombre} ${this.apellido}`
}

var alejandro = new persona('Jonathan', 'Díaz')
alejandro

console.log(alejandro.saludar())