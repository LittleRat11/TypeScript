// *Object optional properties
let person : {
    name: string;
    status?: "active"| "inactive";
} ;
person = {
    name: "MKT",
    status: "active",
};
person.status = "inactive";
console.log(person);

// *array
let factorials: Array<number> = [];
factorials = [1, 3, 5, 7, 11];
const primeNo : number[] =[];
primeNo.push(2, 3, 5, 7, 11);
console.log(primeNo);

// *nested array
const nested: string[][] =[
    ["Hello","_"],
    ["new","world"],
    ["Lorem..."],
];

const newNested: Array<string[]> =[
    ["Hello","_"],
    ["new","world"],
    ["Lorem..."],
];
const vegetables:string[] = ["Apple", "orange"];

// *type keyword aliases 
type Person = {
    name: string;
    age: number;
    gender: "male" | "female";
}

const people: Person = {
    name: "MKT",
    age: 23,
    gender: "male",
};
console.log(people.age);
console.log(people.name);

// *turple (key,value);
type ColorTuple =[number,number,number];
const red: ColorTuple = [255,0,0];

const colorList: ColorTuple[] =[
    [255,0,0],
    [0,255,0],
    [0,0,255],
];
console.log(colorList);

// *tuple list from object
type userTuple =[string,string];
const user ={name: "LR", location: "JPN"};
const userInfo: userTuple[] = [];

Object.keys(user).forEach((key) => {
    type keys = keyof typeof user;
    const userKey = key as keys;
    userInfo.push([key, user[userKey]]);
});
console.log(userInfo);

// *function 
// Auto Recognized - Return Type
function sumFn(a: number, b: number) {
  return a + b;
}
console.log(sumFn(1, 2));

// Defined Return Type
function sumFnTwo(a: number, b: number): number {
  return a + b;
}
console.log(sumFnTwo(1, 2));

// Auto Recognized - Assigned Type
const addFn = (a: number, b: number) => {
  return a + b;
};
console.log(addFn(1, 2));

// Defined Return Type
type SumType = (a: number, b: number) => number;
const addFnTwo: SumType = (a: number, b: number) => {
  return a + b;
};

console.log(addFnTwo(1, 2));