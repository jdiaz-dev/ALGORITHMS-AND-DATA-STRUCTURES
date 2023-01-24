
/* añadir una propiedad a un objeto vacio */

let objeto = {}

//existe dos formas de añadir propiedades a un objeto
objeto.nombre = 'Jonathan'
objeto['apellido'] = 'Díaz'
objeto['universidad'] = 'UNAJ'
objeto['edad'] = 23

objeto

//se puede acceder a una propiedad de la misma forma
var verPropiedad = objeto['nombre']
verPropiedad