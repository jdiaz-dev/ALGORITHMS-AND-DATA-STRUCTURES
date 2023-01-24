
var palabra = 'Red Dragon ugly'

console.log(palabra.indexOf('Dragon'))
console.log(palabra.indexOf('Dragon',4))    //el segundo parameto es opcional
                                            //e indica desde que posicion comenzara la busqueda

console.log(palabra.indexOf("feo",2))   //si retorna -1, significa que no ha sido encontrado







const existeElString = (valorString, busqueda) => {
    return  valorString.indexOf(busqueda) !== -1
}
console.log(existeElString('terrorista','a'))
console.log(existeElString('terrorista','c'))