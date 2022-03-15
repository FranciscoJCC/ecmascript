//JS
function newFunction(name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';

    console.log(name, age, country);
}

//es6
function newFunction2(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name,age,country);
}

newFunction2();
newFunction2('Ricardo','23','ARG');



//JS
let hello = "Hello";
let world = "World";

let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Template literal es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);



//String multilinea JS
let lorem = "lorem  impusn sdfij sdofsdf dsfosidhfsd sodfjsdofi sdofisjdf \n"
            + "lorem okpojo ijsodifjso djsdofisjdf osdjf oifjwofij sdij oji";

//es6
let lorem2 = `lorem opdok poksdpkos okdpfoskd fpokdpf sodkfs dpofksdpofk s
            sdofjsodfjios dfjsodifjsodij jodjsidofj 
            `;

console.log(lorem);
console.log(lorem2);


//JS
let person ={
    'name': 'Oscar',
    'age' : '43',
    'country': 'MX',
}

console.log(person.name, person.age);


//es6
let {name, age } = person;
console.log(name, age);


//operador de propagación

//es6

let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria','Yesica','Camila'];

//Une los arrays
let education = ['David', ...team1, ...team2];
console.log(education);

//**********let solo esta en el scope , dentro de su funcion, var es global**************

const a = 'b';
a = 'a'; //No es posible asignar valores a constantes
console.log(a);

/**
 * Arrow Functions, 
 * Promesas y 
 * Parámetros en objetos
 */

let name_person = 'David';
let age_person = '36';

//es5
obj = {name_person : name_person, age_person: age_person};
//es6
obj2 = { name_person, age_person};

console.log(obj2);

//Arrow functions
const names = [
    {
        name: 'Oscar',
        age: '32',
    },
    {
        name: 'Yesica',
        age: '27',
    }
];

let lisfOfnames = names.map(function(item){
    console.log(item.name);
});

let lisfOfnames2 = names.map(item => console.log(item.name));

const lisfOfnames3 = (name, age) =>{
    //code here
}

const lisfOfnames4 = name =>{
    //code here
}

//recibe un numero, lo multiplica y retorna
const square = num => num * num;


//promesas, asincronismo
const hellowPromise = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("Todo OK")
        }else{
            reject("UPS, error");
        }
    });
}

hellowPromise()
    .then(response => console.log(response))
    .then(() => console.log("Hola"))  //se pueden agregar varios then
    .catch(error => console.log(error));


/**
 * 
 * CLASES
 */

class calculator{

    //Constructor
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

//Creamos un objeto
const calc = new calculator();

//Llamamos la función
console.log(calc.sumar(2,2));

//MODULOS

import { hello } from "./module";

console.log(hello());


//GENERATORS, fibonachi
function* helloWorld(){
    if(true) yield 'Hello,';
    if(true) yield 'World';
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value); //primer valor
console.log(generatorHello.next().value); //segundo valor
console.log(generatorHello.next().value); //tercer valor


//Revision 7 de emascrip

//





