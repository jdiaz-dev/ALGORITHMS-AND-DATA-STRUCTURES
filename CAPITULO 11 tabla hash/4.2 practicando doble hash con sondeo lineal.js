
//pracicando el doble hash en un sondeo lineal

function TablaHash(tamaño){
    this.tamaño = tamaño
    this.claves = this.inicializarArray(tamaño)
    this.valores = this.inicializarArray(tamaño)
    this.limite = 0
}

TablaHash.prototype.put= function(clave, valor){
    if(this.limite >= this.tamaño)  throw 'La tabla hash esta llena'

    let indexHasheado = this.hash(clave)

    while(this.claves[indexHasheado] != null){
        indexHasheado++
        indexHasheado = indexHasheado % this.tamaño
    }

    this.claves[indexHasheado] = clave
    this.valores[indexHasheado] = valor
    this.limite++
}
TablaHash.prototype.get = function(clave){
    let indexHasheado = this.hash(clave)

    while(this.claves[indexHasheado] != clave){
        indexHasheado++
        indexHasheado = indexHasheado % this.tamaño
    }

    return this.valores[indexHasheado]
}
TablaHash.prototype.hash = function(clave){
    if(!Number.isInteger(clave)) throw 'Solo deben ser numeros enteros'
    return this.segundoHash(clave % this.tamaño)
}
TablaHash.prototype.segundoHash = function(indexHasheado){
    let R = this.tamaño - 2     //R debe de ser primo
    return R - indexHasheado % R
}
TablaHash.prototype.inicializarArray = function(tamaño){
    let array = []
    for(let x = 0; x < tamaño; x++){
        array.push(null)
    }
    return array
}

var dobleHash_sondeoLineal = new TablaHash(13)
dobleHash_sondeoLineal.put(7, "hi");
dobleHash_sondeoLineal.put(20, "hello");
dobleHash_sondeoLineal.put(33, "sunny");
dobleHash_sondeoLineal.put(46, "weather");
dobleHash_sondeoLineal.put(59, "wow");
dobleHash_sondeoLineal.put(72, "fourty");
dobleHash_sondeoLineal.put(85, "happy");
dobleHash_sondeoLineal.put(98, "sad");

console.log(dobleHash_sondeoLineal.get(59))
dobleHash_sondeoLineal