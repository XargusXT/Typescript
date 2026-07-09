console.log('hello world');
//para trabajar por la terminal se hace tsc y el nombre 
// del archivo.ts
//generara un archivo js que es exactamente lo mismo

//types
var myString:String='Hello world';//es la forma de asignado de tipos
//myString=22;da error pq ya al asignar un valor lo deja al tipo
//inicial que ya esta,pero al ejecutar el codigo,con el archivo js
//se pasa al tipo de valor

//para evitar estar compilando cada vez se pone -w al final para
//que se automaticen los cambios

var myNumber:number=22;
var myboolean:boolean=true;

//todas las funcionalidades de javascript estan disponibles en typescript

var myVar = 'hello';//se puede cambiar el tipo de la variable pero 
//no es una buena practica,para hacer eso sin que sea una mala practicca seria:

var myVariable:any='hello';
myVariable=false;

document.write(myVariable)

//para vlver una variable a String seria:

document.write(myNumber.toString());

//Arrays
var StringArray= ["","",""]
//StringArray=[1,2,3];
//marcara un error pq ya se establecio que guardara strings

//para que no ocurra tiene que ser con :any como antes pero con un []
//diciendo que es un array

var arrString:string[]=["i","hola"]
var NumberArray:number[]=[1,2,3,4]
var BooleanArray:boolean[]=[true,false,true]
var AnyArray:any[]=[1,true,'hola'];

//para que esa estructura utilice solo ciertos tipos de elementos y esta
//no pueda ser alterada se utiliza los tuple

//Tuple
var strNumTUple:[string,number]=["hola",22] 
/*esto lo que hace es basicamente decir que los valores se cumplen con
ese orden,OJO:los tienes que poner en el mismo orden ,sino dara errores,
por ejemplo:

strNumTUple=[3,'hola] dara error

SI PONES EN ESA TUPLA UNA LISTA DE VALORES,PERO LOS PRIMEROS CUMPLEN 
CON LAS CARACTERISTICAS DE LA TUPLA,ESTA TUPLA SOLO GUARDARA HASTA DONDE SE
CUMPLA LA PRECONDICION DE TIPADO
*/

//tipos void ,undefined,null

/*
let-manera de no perder el alcance de la variable
const-constantes para no perder el valor inicial
*/

let myvoid:void=undefined;//tipo de dato vacio
let myNull:null=null;
let myUndefined:undefined=undefined;

document.write(typeof(strNumTUple));

//funciones
//hay que especificar el tipo de valor que se pasa por parametro
function getSuma(num1:number,num2:number){
    return num1+num2;
}

//Tambien puedes poner especificamente que quieres que retorne

function getSum(num1:number,num2:number):number{
    return num1+num2;
}

//otra forma de generar funciones

let mySum= function(
    num1:number | string ,//esto es para si dice number o string
    num2:number | string):number{
        if(typeof(num1) === 'string'){
            num1=parseInt(num1)
        }
        if(typeof(num2) === 'string'){
            num2=parseInt(num2)
        }
    return num1+num2;
}

//para establecer un parametro opcional se le pone un ? detras

function getName(firstName:string,lastName?:string):String{
    if(lastName===undefined){
        return firstName;
    }
    return firstName+" "+lastName; //o `${firstName} ${lastName}`
}

document.write(getName("Lucas"));
document.write(getName("Lucas","Dalto"));

//para hacer una funcion que no retorna nada

/*
function MyVoidFunction():void{
    return ;//no retorna nada
}
*/

//tambien se puede hacer una descripcion mas especifica,
/*por ejemplo,hay un objeto llamado todo que tiene dichas
 propiedades,cada una que tiene estos tipos
 */
function showTodo(todo:{tittle:string;text:string}){
    console.log(`${todo.tittle}- ${todo.text}`)
}

showTodo({
    tittle:'Yuca',
    text:'Miercoles'
})


//Con interface seria asi 

interface ITodo{
    tittle:string;  
    text:string;
}

function showTodoConInterface(todo:ITodo){
    console.log(`${todo.tittle}- ${todo.text}`)
}
//para especificar un tipo de variable con una interfaz
let myTodo:ITodo={tittle:'Hola',text:'lorem'}

//si haces esto tambien funcionara
/*
function showTodoConInterface(todo:myTodo){
    console.log(`${todo.tittle}- ${todo.text}`)
}
 */

//CLASES EN TYPESCRIPT

class User{
    private name:string;//atributos
    public email:string;
    protected age:number;

    constructor(name:string,email:string,age:number){//constructor
        this.name=name;
        this.email=email;
        this.age=age;
    }

    getEmail():string{
        return this.email+" is the email";
    }

    getName():string{
        return this.name;
    }

    register():void{//metodos
        console.log(`${this.getName()}:${this.email} is register`);
    }

    showMeAge():number{
        return this.age;
    }

    private AgeInYears():string{
        return this.showMeAge()+' years';
    }

    payInvoce():void{
        console.log(`${this.getName()} paide invoce`)
    }


}

var Jhon=new User('Jhon','jhonFKennedi@gmail.com',45);
console.log(Jhon.register());

//HERENCIA
class Member extends User{
    private permisse:boolean;
    private id_number:number;

    constructor(id_number:number,name:string,age:number,email:string,permisse:boolean){
        super(name,email,age);
        this.id_number=id_number;
        this.permisse=permisse;
    }

    payInvoce(): void {
        super.payInvoce();
    }
}

var gordon=new Member(1,"Gordon",24,"Gordon@gmail.com",true);