let array = [1,2,3, [1,2,3 [1,2,3]]];

//matriz aplanada
console.log(array.flat());


//
let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value*2]));


//Eliminar espacios
let hello = "         hello world";

console.log(hello);
console.log(hello.trimStart());

let hello2 = "hello world         ";
console.log(hello2);
console.log(hello2.trimEnd());



//Arreglos a objetos
let entries = [
    [
        "name", "Oscar"
    ],
    [
        "age", "32"
    ],
]
console.log(entries);
console.log(Object.fromEntries(entries));


//Objeto de tipo simbolo

let mysymbl = 'My Symbol';
let symbol = Symbol(mysymbl);

console.log(symbol.description);
