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


//Async , Await

//Promesa
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (false)
            ? setTimeout(() => resolve("Hello world"), 3000)
            : reject(new Error('Test Error'));
    })
};

//Async
const helloAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async () =>{
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error)
    }
}

anotherFunction();

