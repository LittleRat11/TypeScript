// *function void type
function print(message) {
    console.log(message);
}
var helloMessage = print("Hello");
// *hello message is void type.
function getName(callback) {
    var defaultName = "Default Name";
    callback(defaultName);
}
getName(function (name) {
    console.log(name);
});
function add(a, b) {
    return a + b;
}
console.log(add("hello ", "world"));
console.log(add(1, 2));
var admin = {
    name: "LR",
    age: 23,
    role: "Admin",
};
var user = {
    name: "Ko Moe",
    age: 45,
    role: "User",
};
console.log(admin);
console.log(user);
var manager = {
    id: "manager",
    name: "Manager",
};
console.log(manager);
var userInterface = {
    id: "123",
    name: "Alice",
};
var userWithMethod = {
    id: "134",
    name: "Bob",
    greeting: function () {
        return "Hello ,My name is ".concat(this.name);
    },
};
console.log(userWithMethod.greeting());
