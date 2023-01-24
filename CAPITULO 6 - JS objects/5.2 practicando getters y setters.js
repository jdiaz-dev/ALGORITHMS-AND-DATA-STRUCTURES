
/* 
    --guetter y setter permiten establecer una variable para tener una variable privada
    --Con guetter y setter la variable solamente estaria disponible para el alcance del constructor
    --Guetter y setter no puede ser establecido fuera del constructor
*/

class Programacion{
    constructor(language, framework){
        this.lenguaje = language
        this.marco = framework
    }
    get tecnologiaFacebook(){
        return this.marcoFacebook
    }
    set deFacebook(framework){
        this.marcoFacebook = framework
    }
    queTecnologiaUso(){
        return `Uilizas ${this.lenguaje} con ${this.marco}`
    }
    queTecnologiUsaFacebook(){
        return `La tecnologia que utiliza Facebook es: ${this.marcoFacebook}`
    }
    static deQueVaEsteObjeto(){
        return 'Este objeto va de lenguajes de programacion'
    }
}
var programacion = new Programacion('Javascript', 'Angular')
programacion

//usamos setter para establecer "marcoFacebook", este solo estara al alcance del objeto "Programacion", no se podra utilizar en una herencia
programacion.deFacebook = 'React'
var tecnologiaDeFacebook = programacion.tecnologiaFacebook
tecnologiaDeFacebook



console.log(programacion.queTecnologiUsaFacebook())

class Vue extends Programacion{
    constructor(language, framework, frameworkFacebook){
        super(language, framework, frameworkFacebook)
    }

}
//No se puede construir a la variable "marcoFacebook: React" a pesar de hacer herencia
//CONCLUSION: con setter se puede establecer variables privadas
var vueJs = new Vue('Javascript', 'Angular','React')
vueJs