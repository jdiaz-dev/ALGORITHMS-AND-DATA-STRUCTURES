
//practicando tabla hash con sonda cuadratica

function TablaHash(tamaño){
    this.tamaño = tamaño
    this.claves = this.inicializarArray(tamaño)
    this.valores = this.inicializarArray(tamaño)
    this.limite = 0
}
TablaHash.prototype.put = function(clave, valor){
    
    if(this.limite >= this.tamaño)  throw 'La tabla hash esta llena'

    let indexHasheado = this.hash(clave),
        indexCuadratico = 1

    while(this.claves[indexHasheado] != null){
        indexHasheado += Math.pow(indexCuadratico, 2)
        indexHasheado = indexHasheado % this.tamaño
        
        indexCuadratico++
    }
    
    this.claves[indexHasheado] = clave
    this.valores[indexHasheado] = valor
    this.limite++
}

TablaHash.prototype.get = function(clave){

    let indexHasheado = this.hash(clave),
        indexCuadratico = 1
    
    while(this.claves[indexHasheado] != clave){
        indexHasheado += Math.pow(indexCuadratico, 2)
        indexHasheado = indexHasheado % this.tamaño

        indexCuadratico++
    }

    return this.valores[indexHasheado]
}
TablaHash.prototype.hash = function(clave){
    
    //revisamos que clave sea entero
    if( !Number.isInteger(clave) ) throw 'Solo esta permitido numeros enteros'
    return clave % this.tamaño
}

TablaHash.prototype.inicializarArray = function(tamaño){
    let array = []

    for(let x = 0; x < tamaño; x++){
        array.push(null)
    }
    return array
}

var tablaHash_CountingCuadratic = new TablaHash(13)
tablaHash_CountingCuadratic.put(7, "hi");
tablaHash_CountingCuadratic.put(20, "hello");
tablaHash_CountingCuadratic.put(33, "sunny");
tablaHash_CountingCuadratic.put(46, "weather");
tablaHash_CountingCuadratic.put(59, "wow");
tablaHash_CountingCuadratic.put(72, "fourty");
tablaHash_CountingCuadratic.put(85, "happy");
tablaHash_CountingCuadratic.put(98, "sad");

tablaHash_CountingCuadratic

