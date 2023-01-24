
//practicando tabla hash con sonda lineal

function TablaHash(tamaño){
    this.tamaño = tamaño
    this.claves = this.inicializarArray(tamaño)
    this.valores = this.inicializarArray(tamaño)
    this.limite = 0
}
TablaHash.prototype.put = function(clave, valor){
    if(this.limite >= this.size) throw 'La tabla hash esta lleno'

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
    if(!Number.isInteger(clave)) throw 'Solo se permite valores enteros'
    return clave % this.tamaño
}
TablaHash.prototype.inicializarArray = function(tamaño){
    let array = []
    for(let x = 0; x < tamaño; x++){
        array.push(null)
    }
    return array
}

var miTablaHash = new TablaHash(13)
miTablaHash.put(7, "hi");
miTablaHash.put(20, "hello");
miTablaHash.put(33, "sunny");
miTablaHash.put(46, "weather");
miTablaHash.put(59, "wow");
miTablaHash.put(72, "fourty");
miTablaHash.put(85, "happy");
miTablaHash.put(98, "sad");

miTablaHash.put(30,'feo')
miTablaHash.put(1000,'animal')
miTablaHash.put(3000,'korah')
console.log(miTablaHash.get(3000))
miTablaHash