// *Record<Keys, Type>
// to create an object type with a specific set of keys and values of a certain type.
type UserType = {
    [index: string] : string;
};

const user: UserType = {
    name: "LR",
};

type PlayerType = Record<string, string>;

const player: PlayerType = {
    name: "Player One",
};

type Item = {
    name: string;
    price: number;
};

type OrderList = Record<string, Item>;

const orderList: OrderList = {
    orderId1: {name: "Item 1", price: 10},
    orderId2: {name: "Item 2", price: 20},
}

// *Read only and Object Freeze
interface Todo {
    title: string;
    description: string;
  }
  
  const todo: Readonly<Todo> = Object.freeze({
    title: "Learn TypeScript",
    description: "Understand utility types"
  });
  
  // The following lines would cause errors in TypeScript
  // todo.title = "Learn JavaScript";
  // todo.description = "Understand basic concepts";
  
  // And would also have no effect at runtime

//   *TS AS Type Casting

// *1.Example "as" Casting
const value: unknown = "hello";
const stringValue= value as string; // Assert 'value' as a string
console.log(stringValue.toUpperCase());

// 2.Example: Type Assertion with Fetch API
 type User = {
    id: string;
    name: string;

 };
  const fetchUser = async () : Promise<User> => {
        const res = await fetch("https://example-backend.com/api/v1/user");
        // *the res from res.json()  is typed as 'any
        const parsedData = await res.json();

        //Assert that the parsed data conforms to the 'User' Type
        const userData = parsedData as User;
        return userData;
  };

  (async () => {
    const user = await fetchUser();
    console.log(`User: ${user.name}, ID: ${user.id}`);
  })();
  
// *satifies 
// *satisfies operator in TypeScript is used to ensure that an object meets a specific type requirement without necessarily narrowing the type of the assignment

type User1 = {
    id: string;
    name: string;
    role: "admin" | "user";
    createdAt : Date | string;
};

const getUserName = (user: User1) => {
    return user.name;
}

const normalUser: User1 = {
    id: "1",
    "name": "Bob",
    role: "user",
    createdAt: new Date(),
};
// Can't use toDateString method of Date type
// because createdAt could be 'string' type
// normalUser.createdAt.toDateString();


const user2 = {
    id: "2",
    name: "Alice",
    role: "admin",
    createdAt: new Date(),
} satisfies User1;

console.log(getUserName(user2));
// createdAt type is sure 'Date' type with satisfies 
user2.createdAt.toDateString();


// *differenct scope narrowing
// Conditional Narrowing with "If" statement
const convertNumber = (value: string | number) => {
    if(typeof value === "string"){
        console.log(value);
        console.log(value.toUpperCase());
    }else{
        // *value type will be number in this scope
        console.log(value);
        console.log(value.toFixed(2));
    }
    // *value tyhpe will be "string" or "number" in this scopte
    console.log("String or Number",value);
}


// *Narrowing with "Instanceof"

const getUser = () => {
    try {
        // show login to fetch user data
    }catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof");
    }
}
function handleAnimal(animal: Animal) {
    if(animal instanceof Dog) {
        // typescript knows that 'animal' is a 'Dog' at this point
        animal.bark();
    }else {
        console.log(`Animal name: ${animal.name}`);
    }
}

// *narrowing 'in' operator
type Fish = {swim: () => void};
type Bird = {fly :() => void};

function handlePet(pet: Fish | Bird) {
    if ('swim' in pet) {
        // typescript knows that 'pet' is a 'Fish' at this point
        pet.swim();
    }else {
        // typescript knows that 'pet' is a 'Bird' at this point
        pet.fly();
    }
}

type User3 = {id: string; name: string};
const users: User3[] = [
    {id: "1", name: "Alice"},
    {id: "2", name: "Bob"},
    {id: "3", name: "Charlie"}, 
]

const findUserByName = (search: {name ?: string}) => {
    const searchName = search.name;
    if(searchName) {
        return users.filter((user) => {
            return user.name.includes(searchName);
        });
    };
    return users;
}

console.log(findUserByName({}));
console.log(findUserByName({name: "Charlie"}));