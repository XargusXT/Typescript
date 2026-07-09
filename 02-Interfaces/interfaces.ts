//las interfaces son modelos basicos de un objeto

interface Persona{
    nombre:string;
    edad:number;
}

//interfaces con propiedades opcionales:
interface Producto{
    nombre:string;
    precio:number;
    descripcion?:string;
}

//interfaces con funciones:

interface comprador{
    (a:number,b:number):boolean;
}

//interfaces para clases:

interface Persona{
    nombre:string;
    edad:number;
    saludar():void;
}