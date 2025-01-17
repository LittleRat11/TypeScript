// *Interface extend version
// *Extending a single interface
 interface Person {
    name: string;
    age: number;
 }

 interface Employee extends Person {
    role: string;  //*add new property
 }

 const employee: Employee ={
    name: "Alice",
    age: 25,
    role: "Developer", 
 }

//  *Extending multiple interfaces
interface Contact {
    email: string;
    phone: string;
}

interface Manager extends Person, Contact {
    department: string;
}

const manager:Manager = {
    name: "Bob",
    age: 30,
    email: "bob@gamil.com",
    phone: "093-423-434",
    department: "Engineering",

};

// *Real word example
interface BaseResponse {
    status: number;
    message: string;
}

interface SuccessResponse extends BaseResponse {
    data: object;
}

interface ErrorResponse extends BaseResponse {
    errorCode: string;
}

const success:SuccessResponse = {
    status: 200,
    message: "Request success",
    data: {
        id: 1,
        name: "John",
        age: 26,
    },
};

const error: ErrorResponse = {
    status: 401,
    message: "Not Found",
    errorCode: "Resource not found",
}

// *Interface as the function
// *Ex-1 Return type void
interface PrintFn {
    (str: string) :void;
}

const print: PrintFn = (log) => {
    console.log(log);
};
print("Hello");

// *Ex-2 return type number
interface Sum {
    (a: number, b: number): number;
}

const add: Sum = (a, b) => a + b;
console.log(add(1,2));

// *Ex-3 Fetch data function - API call (Return type: Promise<string>)
interface FetchData {
    (url: string): Promise<string>;
}

const fetchData: FetchData =  (url) => {
    // *Simulating an API call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        },1000);
    })
}
fetchData("https://api.example.com/data").then((data) => {
    console.log(data);
})

// *Ex-4 String Formatter -Capitalize a String
interface StringFormatter {
    (input: string) : string;
}

const capitalize : StringFormatter = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}
console.log(capitalize("hello world"));


// *When should use interface VS Type
// Intersection over Interface

// - Interface Extends

interface InterUser {
    id: string;
    name: string;
  }
  
  interface InterUser2 {
    id: number;
    address: string;
  }
  
  // We can have error IUser for 'id' identical
  interface IUser extends InterUser, InterUser2 {}
  
  const iUser: IUser = {
    id: "",
    name: "",
    address: "",
  };
  
  // - Type Intersection
  
  type TypeUser = {
    id: string;
    name: string;
  };
  
  type TypeUser2 = {
    id: number;
    address: string;
  };
  
  // We don't get warning here
  type TUser = TypeUser & TypeUser2;
  
  const tUser: TUser = {
    id: "", // <- we got error here
    name: "",
    address: "",
  };
  
  //* We can't use 'interface' to define an union type directly.
  //* Error: interface AorB = A | B
  // we can only use 'type' for union
  // eg: type AorB = A | B

//   *Typescript ReadOnly
type People= {
    readonly id:number;
    name: string;
}

const people : People ={ 
    id: 1,
    name: "LR",
}

people.name = "RL";
// *We can't update id because readonly
// *people.id = 2


type NumberArray = readonly number[];

const nums : NumberArray = [1,2,3];
// *We can't update nums
// *nums.push(4);

// *Keyof
type User = {
    id: number;
    name: string;
    age: number;
};

type UserKeys = keyof User;
// *The keys of User => "id" | "name" | "age"



// * the keys could be "name" | "age"
type Keys = keyof {
    name: string;
    age: number;
};

