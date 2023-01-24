
let objeto = {
    nombre:'Jonathan',
    apellido:'Díaz'
}

//Object.create() - crea un objeto nuevo, utilizando un prototipo existente como el prototipo del objeto del nuevo objeto creado
let otroObjeto = Object.create(objeto)
otroObjeto
console.log(otroObjeto.nombre)