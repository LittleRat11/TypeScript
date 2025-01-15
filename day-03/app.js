// *Object optional properties
var person;
person = {
    name: "MKT",
    status: "active",
};
person.status = "inactive";
console.log(person);
// *array
var factorials = [];
factorials = [1, 3, 5, 7, 11];
var primeNo = [];
primeNo.push(2, 3, 5, 7, 11);
console.log(primeNo);
// *nested array
var nested = [
    ["Hello", "_"],
    ["new", "world"],
    ["Lorem..."],
];
var newNested = [
    ["Hello", "_"],
    ["new", "world"],
    ["Lorem..."],
];
var vegetables = ["Apple", "orange"];
var people = {
    name: "MKT",
    age: 23,
    gender: "male",
};
console.log(people.age);
console.log(people.name);
var red = [255, 0, 0];
var colorList = [
    [255, 0, 0],
    [0, 255, 0],
    [0, 0, 255],
];
console.log(colorList);
var user = { name: "LR", location: "JPN" };
var userInfo = [];
Object.keys(user).forEach(function (key) {
    var userKey = key;
    userInfo.push([key, user[userKey]]);
});
console.log(userInfo);
// *function 
// Auto Recognized - Return Type
function sumFn(a, b) {
    return a + b;
}
console.log(sumFn(1, 2));
// Defined Return Type
function sumFnTwo(a, b) {
    return a + b;
}
console.log(sumFnTwo(1, 2));
// Auto Recognized - Assigned Type
var addFn = function (a, b) {
    return a + b;
};
console.log(addFn(1, 2));
var addFnTwo = function (a, b) {
    return a + b;
};
console.log(addFnTwo(1, 2));
