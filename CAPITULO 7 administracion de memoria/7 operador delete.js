
/* 
    --El operador "delete" elimina valores indeseados de la propiedad de un objeto
    --El oparador "delete" solo funciona en objetos
*/

var persona = {
    nombre:'Jonathan',
    apellido:'Díaz',
    edad:'23'

}
console.log(persona.nombre)
delete persona.nombre
console.log(persona)