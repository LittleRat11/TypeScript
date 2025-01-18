// * typeof 
// * Typescript infers 'username' as string
var username = "JohnDoe";
var newUsername = "Bob";
// *Error  Type 'number' is not assignable to type string
// const userName : Username = 123;
// *Real world Example
var appConfig = {
    appName: "MyApp",
    version: "1.0.0",
    debugMode: true,
};
var user = {
    name: "Walker",
    age: "20",
};
var myScores = {
    Myanmar: 87,
    English: 70,
};
var noNo = {
    1: 100,
    "200.1": 3,
};
var teams = {
    manu: 1,
    chelsea: 2,
    liverpool: 3,
};
var langConfig = {
    mm: {
        color: "red",
        fontSize: 14,
    },
    en: {
        color: "blue",
        fontSize: 16,
    },
};
console.log(langConfig);
