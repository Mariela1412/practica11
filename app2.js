class Persona {
    constructor(nombre,apellido){
        this._nombre = nombre 
        this._apellido = apellido

    }

    get nombreCompleto(){
            return `${this._nombre} ${this._apellido}`
    }

    set nombreCompleto(nombreCompleto){
        [this._nombre,this._apellido] = nombreCompleto.split(" ")
    }
}

const persona = new Persona ("Mariela","Segovia")
persona.nombreCompleto = "Mariela Segovia"

console.log(`Nombre completo: ${persona.nombreCompleto}`)