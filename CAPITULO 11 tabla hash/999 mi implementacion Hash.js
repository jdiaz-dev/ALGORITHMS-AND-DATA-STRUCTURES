
/*  mi implementacion Hash con codigos ASCII */
//sin solucion a colisiones 
class HashTable {
    constructor(size){
        this.size = size
        this.table = new Array(size)
        this.limite = 0
    }

    put(string){
        
        let indexHashed = this.hash(string)
        
        while(this.table[indexHashed] != null){
            indexHashed++
            indexHashed = indexHashed % this.size
        }

        this.table[indexHashed] = string
        this.limite++

    }
    get(string){
        let indexHashed = this.hash(string)

        while(this.table[indexHashed] != string){
            indexHashed++
            indexHashed = indexHashed % this.size
        }

        return this.table[indexHashed]
    }
    showTable(){
        for(let key = 0; key < this.table.length; key++){
            if(this.table[key] != null){
                console.log(`${key}:${this.table[key]}`)
            }
        }
    }
    hash(string){
        let number = 0

        //transformamos un  string a Array
        for(let x = 0; x < string.length; x++){
            //charCodeAt() - extrae el ASCII del caracter
            number = this.size * number + string.charCodeAt(x)
        }

        return number % this.size
    }
    
}
/* var hashTable_1 = new HashTable(19)
hashTable_1
hashTable_1.put('diaz')
hashTable_1.put('jonathan')
hashTable_1.put('alejandro')
hashTable_1.put('mollocondo')
hashTable_1.put('korah')
console.log(hashTable_1.get('diaz'))
hashTable_1.showTable()
hashTable_1 */


/*-------- SOLUCION DE COLISION CON ENCADENAMIENTO SEPARADO------- */
//No es eficiente con las colisiones
class HashTableChains extends HashTable{
    constructor(size){
        super(size)
        this.buildChain()
    }
    buildChain(){
        for(let a = 0; a < this.table.length; a++){
            this.table[a] = new Array()
        }
    }
    put(string){
        if(this.limite >= this.size) return 'The table is full'

        let indexHashed = this.hash(string), index = 0
        //tiene problemas de colision

        while(this.table[indexHashed][index] != undefined){
            indexHashed
            indexHashed++
        }
        this.table[indexHashed][index] = string
        this.table[indexHashed][index + 1] = indexHashed
        this.limite++
    }
    get(string){
        let indexHashed = this.hash(string), index = 0

        while(indexHashed < this.size && this.table[indexHashed][index] != string){
            indexHashed++
            indexHashed
        }

        //revisa si el indice no superó el tamaño del array
        if( indexHashed >= this.size ){
            return null
        }else{
            return this.table[indexHashed]
            
        }
    }
    showTable(){
        let index = 0
        for(let key = 0; key < this.table.length; key++){
            if(this.table[key][index] != null){
                console.log(this.table[key])
            }
        }
    }
}
/* var hashTable_2 = new HashTableChains(19)
hashTable_2.put('diaz')
hashTable_2.put('jonathan')
hashTable_2.put('alejandro')
hashTable_2.put('mollocondo')
hashTable_2.put('korah')
console.log(hashTable_2.get('feo'))
hashTable_2.showTable()
hashTable_2 */


/*-------- SOLUCION DE COLISION CON SONDEO LINEAL------- */
class HashTableLinearProving extends HashTableChains{
    constructor(size){
        super(size)
    }
    put(string){
        if(this.limite >= this.size) return 'The table is full'

        let indexHashed = this.hash(string), index = 0

        while(this.table[indexHashed][index] != null){
            indexHashed++
            indexHashed = indexHashed % this.size
        }
        this.table[indexHashed][index] = string
        this.table[indexHashed][index + 1] = indexHashed
        this.limite++
    }
    get(string){
        let indexHashed = this.hash(string), index = 0, contador = 0

        while( this.table[indexHashed][index] != string && contador < this.size){
            indexHashed++
            indexHashed = indexHashed % this.size

            contador++
        }

        //revisa si el indice no superó el tamaño del array
        if( contador >= this.size ){
            return null
        }else{
            return this.table[indexHashed]
            
        }
    }

}
/* var hashTable_3 = new HashTableLinearProving(7)
hashTable_3.put('diaz')
hashTable_3.put('jonathan')
hashTable_3.put('alejandro')
hashTable_3.put('mollocondo')
hashTable_3.put('korah')
hashTable_3.put('polsito')
hashTable_3.put('kabel')
console.log(hashTable_3.get('feo'))     //devolvera nulo
console.log(hashTable_3.put('kabel'))   //devolvera que esta lleno

hashTable_3.showTable()
hashTable_3 */


/*-------- SOLUCION DE COLISION CON SONDEO CUADRATICO------- */
class HashTableCuadraticProving extends HashTableLinearProving{

    constructor(size){
        super(size)
    }
    put(string){
        if(this.limite >= this.size) return 'The table is full'

        let indexHashed = this.hash(string), index = 0, squareIndex = 1

        while(this.table[indexHashed][index] != null){
            indexHashed += Math.pow(squareIndex, 2)
            indexHashed = indexHashed % this.size

            squareIndex++
        }
        this.table[indexHashed][index] = string
        this.table[indexHashed][index + 1] = indexHashed
        this.limite++
    }
    get(string){
        let indexHashed = this.hash(string), index = 0, squareIndex = 1, contador = 0

        while( this.table[indexHashed][index] != string && contador < this.size){
            indexHashed += Math.pow(squareIndex, 2)
            indexHashed = indexHashed % this.size

            squareIndex++
            contador++
        }

        //revisa si el indice no superó el tamaño del array
        if( contador >= this.size ){
            return null
        }else{
            return this.table[indexHashed]
            
        }
    }
}
/* var hashTable_4 = new HashTableCuadraticProving(7)
hashTable_4.put('diaz')
hashTable_4.put('jonathan')
hashTable_4.put('alejandro')
hashTable_4.put('mollocondo')
hashTable_4.put('korah')
hashTable_4.put('polsito')
hashTable_4.put('kabel')
console.log(hashTable_4.get('feo'))     //devolvera nulo
console.log(hashTable_4.put('kabel'))   //devolvera que esta lleno

hashTable_4.showTable()
hashTable_4 */



/* SOLUCION A COLISION CON DOBLE HASH */
//there are problems with get() method
class HashTableWithDoubleHash extends HashTableLinearProving{

    constructor(size){
        super(size)
    }
    put(string){
        if(this.limite >= this.size) return 'The table is full'

        let indexHashed = this.hash(string), index = 0, squareIndex = 1

        while(this.table[indexHashed][index] != null){
            indexHashed += Math.pow(squareIndex, 2)
            indexHashed = indexHashed % this.size

            squareIndex++
        }
        this.table[indexHashed][index] = string
        this.table[indexHashed][index + 1] = indexHashed
        this.limite++
    }
    get(string){
        let indexHashed = this.hash(string), index = 0, squareIndex = 1, contador = 0

        while( this.table[indexHashed][index] != string && contador < this.size){
            indexHashed += Math.pow(squareIndex, 2)
            indexHashed = indexHashed % this.size

            squareIndex++
            contador++
        }

        //revisa si el indice no superó el tamaño del array
        if( contador >= this.size ){
            return null
        }else{
            return this.table[indexHashed]
            
        }
    }
    hash(string){

        let number = 0

        for(let x = 0; x < string.length; x++){
            number = this.size * number + string.charCodeAt(x)
        }

        return  this.doubleHash(number % this.size)
    }
    doubleHash(hashedString){
        
        let R = this.size - 2

        return R - hashedString % R
    }
}
var hashTable_5 = new HashTableWithDoubleHash(7)
/* hashTable_5.put('diaz')
hashTable_5.put('jonathan')
hashTable_5.put('alejandro')
hashTable_5.put('mollocondo')
hashTable_5.put('korah')
hashTable_5.put('polsito')
hashTable_5.put('kabel')
console.log(hashTable_5.get('feo'))     //devolvera nulo
console.log(hashTable_5.put('lordgelsin'))   //devolvera que esta lleno

hashTable_5.showTable()
hashTable_5
 */

hashTable_5.put('Balanar')
hashTable_5.put('Yurnero')
hashTable_5.put('Slardar')
hashTable_5.put('Phanton')
hashTable_5.put('Monkey')
hashTable_5.put('Legión')
hashTable_5.put('Slark')
// console.log(hashTable_5.get('Slark'))     //devolvera nulo

hashTable_5.showTable()
hashTable_5