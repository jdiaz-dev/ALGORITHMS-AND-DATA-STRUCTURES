
function persona(nombre){
    return apellido => `${nombre} ${apellido} `
}
let jona = persona('Jonathan')
jona
let resultado = jona('Díaz')
resultado