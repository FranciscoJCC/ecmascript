const data = {
    frontend : 'Oscar',
    backend : 'Isabel',
    design : 'Ana',
}

const entries = Object.entries(data);

console.log(entries)
console.log(entries.length);


//Object values (objeto a arreglo)

const data2 = {
    frontend : 'Oscar',
    backend : 'Isabel',
    design : 'Ana',
}

const values = Object.values(data2);

console.log(values);
console.log(values.length);


//Padding 

const string = 'Hello';

console.log(string.padStart(8,'hi '));
console.log(string.padEnd(12,'---'));
console.log('food'.padEnd(12,' ------'));


