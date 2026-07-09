"use strict";
console.log('hello world');
//para trabajar por la terminal se hace tsc y el nombre 
// del archivo.ts
//generara un archivo js que es exactamente lo mismo
//types
var myString = 'Hello world'; //es la forma de asignado de tipos
//myString=22;da error pq ya al asignar un valor lo deja al tipo
//inicial que ya esta,pero al ejecutar el codigo,con el archivo js
//se pasa al tipo de valor
//para evitar estar compilando cada vez se pone -w al final para
//que se automaticen los cambios
var myNumber = 22;
var myboolean = true;
//todas las funcionalidades de javascript estan disponibles en typescript
var myVar = 'hello'; //se puede cambiar el tipo de la variable pero 
//no es una buena practica,para hacer eso sin que sea una mala practicca seria:
var myVariable = 'hello';
myVariable = false;
document.write(myVariable);
//para vlver una variable a String seria:
document.write(myNumber.toString());
//Arrays
var StringArray = ["", "", ""];
//StringArray=[1,2,3];
//marcara un error pq ya se establecio que guardara strings
//para que no ocurra tiene que ser con :any como antes pero con un []
//diciendo que es un array
var arrString = ["i", "hola"];
var NumberArray = [1, 2, 3, 4];
var BooleanArray = [true, false, true];
var AnyArray = [1, true, 'hola'];
//para que esa estructura utilice solo ciertos tipos de elementos y esta
//no pueda ser alterada se utiliza los tuple
//Tuple
var strNumTUple = ["hola", 22];
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
let myvoid = undefined; //tipo de dato vacio
let myNull = null;
let myUndefined = undefined;
document.write(typeof (strNumTUple));
//funciones
//hay que especificar el tipo de valor que se pasa por parametro
function getSuma(num1, num2) {
    return num1 + num2;
}
//Tambien puedes poner especificamente que quieres que retorne
function getSum(num1, num2) {
    return num1 + num2;
}
//otra forma de generar funciones
let mySum = function (num1, //esto es para si dice number o string
num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//para establecer un parametro opcional se le pone un ? detras
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return firstName;
    }
    return firstName + " " + lastName; //o `${firstName} ${lastName}`
}
document.write(getName("Lucas"));
document.write(getName("Lucas", "Dalto"));
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
function showTodo(todo) {
    console.log(`${todo.tittle}- ${todo.text}`);
}
showTodo({
    tittle: 'Yuca',
    text: 'Miercoles'
});
function showTodoConInterface(todo) {
    console.log(`${todo.tittle}- ${todo.text}`);
}
//para especificar un tipo de variable con una interfaz
let myTodo = { tittle: 'Hola', text: 'lorem' };
//si haces esto tambien funcionara
/*
function showTodoConInterface(todo:myTodo){
    console.log(`${todo.tittle}- ${todo.text}`)
}
 */ 
