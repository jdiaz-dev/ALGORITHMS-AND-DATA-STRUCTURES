/* 
    --Las variables de una clase son las propiedades de un objeto en JS
    --Esto significa que las propiedades del objeto puede ser accedido desde otros alcances
*/



function Lenguaje(language, framework){
    this.lenguaje = language
    this.frameworkDeLenguaje = framework
}

var lenguajeProgramacion = new Lenguaje('Javascript', 'Angular')
lenguajeProgramacion.lenguaje = 'PHP'   //podemos modificar la variable "lenguaje" de la clase 'Lenguaje'

console.log(lenguajeProgramacion.lenguaje )
