

//añgun caracer numerico
var reg1 = /\d+/
console.log(reg1.test('123'))
console.log(reg1.test('33asd'))
console.log(reg1.test('1asdfasdf'))
console.log(reg1.test('fdsa'))


//solamente caracteres numericos
var reg2 = /\d+$/
console.log(reg2.test('123'))
console.log(reg2.test('123a'))
console.log(reg2.test('feo'))


// caracteres punto flotante
var reg3 = /^[0-9]*\.[0-9]*[1-9]+$/
console.log(reg3.test('45'))
console.log(reg3.test('45.342'))


//solamente caracteres alfanumericos
var reg4 = /^[a-zA-Z1-9]/
console.log(reg4.test('45.342'))
console.log(reg4.test('23'))
console.log(reg4.test('granKorah feo'))
console.log(reg4.test('super666'))
console.log(reg4.test('*'))
console.log(reg4.test(''))