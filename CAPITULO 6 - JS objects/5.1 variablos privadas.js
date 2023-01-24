/* 
    --Las variables publicas no son soportadas en JS como en JAVA o C++
    --Para crear una variable privada se necesita una funcion que alcanse al constructor de la funcion
*/

function EjemploClase(name, size){

    //si pusieramos como this.nombrePrivado, automaticamente seria una variable publica
    var nombrePrivado = name
    var tamañoPrivado = size

    this.getNombre = function(){return nombrePrivado}
    this.setNombre = function(name){nombrePrivado = name}

    this.getTamaño = function(){return tamañoPrivado}
    this.setTamaño = function(size){tamañoPrivado = size}
}
var ejemplo = new EjemploClase('Alejandro', '100')
console.log(ejemplo)

ejemplo.setTamaño(5000)
console.log(ejemplo.getNombre())

ejemplo.setTamaño(5000)
console.log(ejemplo.getTamaño())