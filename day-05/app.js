var employee = {
    name: "Alice",
    age: 25,
    role: "Developer",
};
var manager = {
    name: "Bob",
    age: 30,
    email: "bob@gamil.com",
    phone: "093-423-434",
    department: "Engineering",
};
var success = {
    status: 200,
    message: "Request success",
    data: {
        id: 1,
        name: "John",
        age: 26,
    },
};
var error = {
    status: 401,
    message: "Not Found",
    errorCode: "Resource not found",
};
var print = function (log) {
    console.log(log);
};
print("Hello");
