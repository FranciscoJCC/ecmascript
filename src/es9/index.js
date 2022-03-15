//Operador de reposo
const obj = {
    name : 'Oscar',
    age: '32',
    country: 'MX',
}

let { country , ...all } = obj;
console.log(country, all);


//Unir elementos de objetos a un nuevo objeto
const obj2 = {
    name : 'Oscar',
    age : 32,
}

//Anidar
const obj3 = {
    ...obj2,
    country : 'MX',
}

console.log(obj3);



//promise finally
const helloWorld = () => {
    return new Promise((resolve,reject)=>{
        (true)
            ? setTimeout(() => resolve('Hello world'),3000)
            : reject(new Error('Test error'))
    });
};

helloWorld().then(response => console.log(response))
            .catch(error => console.log(error))
            .finally(() => console.log("Ha Finalizado"));


//Mejoras de lo anterior

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
