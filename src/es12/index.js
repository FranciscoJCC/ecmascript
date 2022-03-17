//replace all

const string = "Javascript es maravilloso, con Javascript puedo crear el futuro de la web";

//El primer elemento
const replacedString = string.replace("Javascript", "Python");
console.log(replacedString);

//Todos los elementos encontrados
const replacedString2 = string.replaceAll("Javascript","Python");
console.log(replacedString2);


//Metodos privados

class Message{
    //Metodo privado con # al inicio
    #show(val){
        console.log(val);
    }

    /* get #add(val){
        //code
    } */
}

const message = new Message();

message.show("Hola");


//Promise any

//Devuelve la primer promesa que se cumpla s
const promise1 = new Promise((resolve,reject) => reject("1"));
const promise2 = new Promise((resolve,reject) => resolve("2"));
const promise3 = new Promise((resolve,reject) => resolve("3"));

Promise.any([promise1,promise2,promise3]).then(response => console.log(response));


//
class anyClass{
    
    constructor(element){
        this.ref = new WeakRef(element);
    }



}


//Operadores 

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);

console.log(isTrue ||= isFalse);

let isTrue2 = undefined;
let isFalse2 = false;

console.log(isTrue2 ??= isFalse2);