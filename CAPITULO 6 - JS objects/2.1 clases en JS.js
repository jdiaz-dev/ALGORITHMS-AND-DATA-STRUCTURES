

function Ejemplo(name){
    this.nombre = name
    this.decirNombre = function(){ return this.nombre}
}
var ejemplo1 = new Ejemplo('Korah')
console.log(ejemplo1.decirNombre())