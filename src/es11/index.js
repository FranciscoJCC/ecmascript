//dinamic import
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");

    module.hello();
});

//Números grandes
const bigNumber = 9003303930493049n;
const anotheBigNumber = BigInt(9003303930493049);

console.log(bigNumber);
console.log(anotheBigNumber);


//Promesas,

const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve"));
const promise3 = new Promise((resolve,reject) => resolve("resolve1"));


Promise.allSettled([promise1,promise2,promise3]).then(response => console.log(response));


//Global this
console.log(window);
console.log(globalThis);


//Elementos nulos
const foo = null ?? 'default string';
console.log(foo);


//optional chaining
const user = {};

console.log(user?.profile?.email);

if(user?.profile?.email){
    console.log("email");
}else{
    console.log("fail");
}