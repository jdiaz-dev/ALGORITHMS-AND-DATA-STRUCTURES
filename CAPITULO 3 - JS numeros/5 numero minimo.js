
//devuelve el entero mas pequeño
console.log(Number.MIN_SAFE_INTEGER)

//devolvera true porque no puede OBTENER otro numero mas corto
console.log(Number.MIN_SAFE_INTEGER - 1 == Number.MIN_SAFE_INTEGER - 2 )

//no funciona para los decimales
console.log(Number.MIN_SAFE_INTEGER - 1.234 == Number.MIN_SAFE_INTEGER - 2.0023 )


//MIN_VALUE regresa el numero punto flotante mas pequeño posible, este no es un numero negativo, quiere decir que MIN_VALUE es un numero mas grande que MIN_SAFE_INTEGER
console.log(Number.MIN_VALUE)

//MIN_VALUE  tambien es un numero punto flotante cercado a cero
console.log(Number.MIN_VALUE - 1 == -1) //es como escribier 0 -1 = -1
