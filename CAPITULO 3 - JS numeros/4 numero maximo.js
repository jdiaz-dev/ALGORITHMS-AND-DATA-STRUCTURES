//esto regresara true porque no puede OBTENER otro mas largo
console.log(Number.MAX_SAFE_INTEGER + 1 == Number.MAX_SAFE_INTEGER + 2)   

//esto no punciona para los numeros decimales
console.log(Number.MAX_SAFE_INTEGER + 1.111 == Number.MAX_SAFE_INTEGER + 2.022)


//Number.MAX_VALUE - devueleve el maximo numero punto flotante posible
console.log(Number.MAX_VALUE) //el mas largo
console.log(Number.MAX_SAFE_INTEGER) //es mas corto que el mas largo


//devuelve true porque es el MAXIMO valor que hay 
console.log(Number.MAX_VALUE + 1.111 == Number.MAX_VALUE + 10.0002)

//devolvera true porque es el MAXIMO valor que hay
console.log(Number.MAX_VALUE + 1.2223 == Number.MAX_VALUE +3.666)



