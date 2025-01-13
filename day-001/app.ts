let firstName: string = "John";
console.log(firstName);

function sayHello():void {
    console.log(23);
}
sayHello();

// *typescript array
let numbers:number[] = [1,2,3];
console.log(numbers);
// *string[] or Array<string>
let fruits:string[] = ["apple", "orange", "banana"];
fruits.push("grape");
console.log(fruits);

// *Typescript tuple
const user:[number, string] = [1, "John"];

user.push(2, "Doe");
console.log(user);

// *variable annotation
let myName: string ="MKT";
console.log("My name is ",myName);
let age:number = 23;
console.log("Age is ",age);
let isStudent:boolean = false;
console.log("Is student ",isStudent);

// *Type inference
let address = "Ygn";
console.log(address);

let x =10;
let y =20;
const add = (a:number,  b:number) => {return a + b} ;
console.log(add(x,y));
