// *function void type
function  print(message: string) {
    console.log(message);
}
const helloMessage = print("Hello");

// *hello message is void type.

function getName(callback:(name:string)=> void ) {
    const defaultName = "Default Name";
    callback(defaultName);
}
getName((name) => {
    console.log(name);
});

// *function overloading
function add(a:string, b:string):string;
function add(a: number, b: number):number;
function add(a: any, b: any) {
    return a + b;
}

console.log(add("hello ","world"));
console.log(add(1,2));

// *Intersection

type People = {
    name: string;
    age: number;
}

type Role = {
    role: "Admin" | "User";
}

// *intersection type
type Admin = People & Role;

type User = People & Role;
const admin: Admin ={
    name: "LR",
    age: 23,
    role: "Admin",
};

const user: User = {
    name: "Ko Moe",
    age: 45,
    role: "User",
};
console.log(admin);
console.log(user);

//*intersection-incompatible
type BasedUser = {
    id: string;
};
type Person = {
    id: number;
    name: string;
}

type Manager = BasedUser & Person;
const manager: Manager= {
    id:  "manager",
    name: "Manager",
}

console.log(manager);

// *interface

interface UserInterface {
    id: string;
    name: string;
    age?: number;
}

const userInterface: UserInterface = {
    id: "123",
    name: "Alice",
}

// *using interface adding method
interface UserWithMethods {
    id: string;
    name: string;
    greeting(): string;
}

const userWithMethod : UserWithMethods = {
    id: "134",
    name: "Bob",
    greeting() {
        return  `Hello ,My name is ${this.name}`;
    },
};
console.log(userWithMethod);
console.log(userWithMethod.greeting());