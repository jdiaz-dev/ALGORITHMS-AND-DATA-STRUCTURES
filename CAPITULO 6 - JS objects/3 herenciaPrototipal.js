/* 
    --En lenguajes compilados como Java no es posible la herencia prototipal
*/

function Lenguaje(language){
    this.lenguaje = language
}
Lenguaje.prototype.nombreLenguaje = function(){
    return `Utilizas ${this.lenguaje}`
}

var lenguajeProgramacion = new Lenguaje('Javascript')
console.log(lenguajeProgramacion.nombreLenguaje())
