
/* 
    herencia entre dos clases
*/


function Animal(nombre, tipo){
    this.nombre = nombre
    this.tipo = tipo
}
Animal.prototype.decirNombre = function(){
    return this.nombre
}
Animal.prototype.decirTipoAnimal = function(){
    return this.tipo
}

var animal = new Animal('gato', 'mamifero')
console.log(animal.decirNombre())
console.log(animal.decirTipoAnimal())

        

function Perro(nombre, tipo){
    Animal.call(this,nombre,tipo)
}
        //Otra forma de hacer la herencia
        Perro.prototype = Object.create(Animal.prototype)

var perro = new Perro('perro','mamifero')
perro
console.log(perro.decirNombre())