// * typeof 

// * Typescript infers 'username' as string
let username = "JohnDoe";
// *Using "typeof" to create a type based on 'username'
type Username = typeof username;  //*So username type is string
const newUsername: Username = "Bob";
// *Error  Type 'number' is not assignable to type string
// const userName : Username = 123;

// *Real world Example

const appConfig = {
    appName: "MyApp",
    version: "1.0.0",
    debugMode: true,
};

type AppConfig = typeof appConfig;

// *Now AppConfigType is equivalent to
//type AppConfigType = {
//    appName: string;
//    version: string;
//    debugMode: boolean;
//}     


// *Index type
// *Type Indexing

type StringObj = {
    [index: string]: string;
};
const user: StringObj = {
    name : "Walker",
    age: "20",
}

type Scores = {
    [subject: string]: number;
};

const myScores: Scores ={
    Myanmar: 87,
    English: 70,
};

type noObj = {
    [index: number]: number;
};

const noNo: noObj = {
    1 : 100,
    "200.1": 3,
};

// *predefined keys by default with index
//*Predefined keys
type PremierLeagueScore = {
    manu: number;
    chelsea: number;
    liverpool: number;
    [team: string]: number;
}

const teams: PremierLeagueScore = {
    manu: 1,
    chelsea: 2,
    liverpool: 3,
};

// *Union Keys in index
type Language = "mm" | "en";

type LangConfig = {
    // *[Lang in Language]: This part is a mapped type
    [Lang in Language] : {
        color: string;
        fontSize: number;
    };
};

const langConfig: LangConfig = {
    mm :{
        color: "red",
        fontSize: 14,
    },
    en :{
        color: "blue",
        fontSize: 16,
    },
};

console.log(langConfig);

// *Generic

// *Generic is like templates for types. They allow to create 
// a component or function that can work with any data type while maintaining type safety.
// *generic function

function identity<T>(value: T): T {
    return value;
}

// *usage

const num = identity<number>(5); //* T is number
const str = identity<string>("Hello"); //T is string

// *Generic interface
interface Box<T> {
    content: T;
}

// *usage
const numBox: Box<number> = {content: 5}; //*T is number 
const strBox: Box<string> = {content: "TypeScript"}; //T is string

//Example API response
interface ApiResponse<T> {
    status: number;
    data: T;
}

const userResponse: ApiResponse<{id: string; name: string}> = {
    status: 200,
    data: {id: "123", name: "John"},
}
