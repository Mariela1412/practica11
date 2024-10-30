class Persona {
    constructor(nombre,apellido){
        this._nombre = nombre 
        this._apellido = apellido


        
    }
    get nombreCompleto(){
            return `${this._nombre} ${this._apellido}`
    }

   
}

const persona = new Persona ("Mariela","Segovia")
console.log(`Nombre completo: ${persona.nombreCompleto}`)