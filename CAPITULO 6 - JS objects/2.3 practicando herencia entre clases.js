



function heredeDe(prototipoHijo, prototipoPadre){
    let fn = function(){}
    fn.prototype = prototipoPadre.prototype //establecemos al padre
    prototipoHijo.prototype = new fn

    //creamos el constructor
    prototipoPadre.prototype.constructor = prototipoHijo
}

//Clase persona
function Persona(nombre, apellido){

    //con "this" esto sera el constructor de la clase   
    this.nombre = nombre
    this.apellido = apellido
}

//crearemos un metodo para la clase persona
Persona.prototype.saludar = function(){
     return `Hola yo soy ${this.nombre} ${this.apellido}`
}

        

//Clase desarrollador
function Desarrollador(name, lastName, collegue ){

    //crearemos el super
    Persona.call(this,name,lastName)
    this.universidad = collegue
}
        //herencia
        heredeDe(Desarrollador, Persona)

Desarrollador.prototype.saludarUniversidad = function(){
    return `Hola soy ${this.nombre} y estudio en el "${this.universidad}" `
}

var desarrollador = new Desarrollador('Alejandro', 'Díaz', 'MIT')

console.log(desarrollador.saludar())



