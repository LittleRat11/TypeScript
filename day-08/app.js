var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var user = {
    name: "LR",
};
var player = {
    name: "Player One",
};
var orderList = {
    orderId1: { name: "Item 1", price: 10 },
    orderId2: { name: "Item 2", price: 20 },
};
var todo = Object.freeze({
    title: "Learn TypeScript",
    description: "Understand utility types"
});
// The following lines would cause errors in TypeScript
// todo.title = "Learn JavaScript";
// todo.description = "Understand basic concepts";
// And would also have no effect at runtime
//   *TS AS Type Casting
// *1.Example "as" Casting
var value = "hello";
var stringValue = value; // Assert 'value' as a string
console.log(stringValue.toUpperCase());
var fetchUser = function () { return __awaiter(_this, void 0, void 0, function () {
    var res, parsedData, userData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://example-backend.com/api/v1/user")];
            case 1:
                res = _a.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                parsedData = _a.sent();
                userData = parsedData;
                return [2 /*return*/, userData];
        }
    });
}); };
(function () { return __awaiter(_this, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchUser()];
            case 1:
                user = _a.sent();
                console.log("User: ".concat(user.name, ", ID: ").concat(user.id));
                return [2 /*return*/];
        }
    });
}); })();
var getUserName = function (user) {
    return user.name;
};
var normalUser = {
    id: "1",
    "name": "Bob",
    role: "user",
    createdAt: new Date(),
};
// Can't use toDateString method of Date type
// because createdAt could be 'string' type
// normalUser.createdAt.toDateString();
var user2 = {
    id: "2",
    name: "Alice",
    role: "admin",
    createdAt: new Date(),
};
console.log(getUserName(user2));
// createdAt type is sure 'Date' type with satisfies 
user2.createdAt.toDateString();
// *differenct scope narrowing
// Conditional Narrowing with "If" statement
var convertNumber = function (value) {
    if (typeof value === "string") {
        console.log(value);
        console.log(value.toUpperCase());
    }
    else {
        // *value type will be number in this scope
        console.log(value);
        console.log(value.toFixed(2));
    }
    // *value tyhpe will be "string" or "number" in this scopte
    console.log("String or Number", value);
};
// *Narrowing with "Instance of"
var getUser = function () {
    try {
        // show login to fetch user data
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof");
    };
    return Dog;
}(Animal));
function handleAnimal(animal) {
    if (animal instanceof Dog) {
        // typescript knows that 'animal' is a 'Dog' at this point
        animal.bark();
    }
    else {
        console.log("Animal name: ".concat(animal.name));
    }
}
function handlePet(pet) {
    if ('swim' in pet) {
        // typescript knows that 'pet' is a 'Fish' at this point
        pet.swim();
    }
    else {
        // typescript knows that 'pet' is a 'Bird' at this point
        pet.fly();
    }
}
var users = [
    { id: "1", name: "Alice" },
    { id: "2", name: "Bob" },
    { id: "3", name: "Charlie" },
];
var findUserByName = function (search) {
    var searchName = search.name;
    if (searchName) {
        return users.filter(function (user) {
            return user.name.includes(searchName);
        });
    }
    ;
    return users;
};
console.log(findUserByName({}));
console.log(findUserByName({ name: "Charlie" }));
