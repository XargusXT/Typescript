class Persona{
    private nombre:string;

    constructor(nombre:string){
        this.nombre=nombre;
    }

    getNombre():string{
        return this.nombre;
    }

    setNombre(nombre:string){
        this.nombre=nombre;
    }

    saludar(){
        console.log('Hola')
    }
}