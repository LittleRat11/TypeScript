var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// *async function 
var delay = function (time) {
    return new Promise(function (resolve) { return setTimeout(function () {
        resolve("Return String");
    }, time); });
};
delay(1000);
var product = {
    id: "123",
    name: "Burger",
    price: 200,
};
var addProduct = function (newProduct) {
    var generatedId = Math.random() + "";
    return {
        id: generatedId,
        name: newProduct.name,
        price: newProduct.price,
    };
};
console.log(addProduct({ name: "Apple", price: 50 }));
var products = [
    {
        id: "1",
        name: "Product 1",
        price: 100,
        description: "Lorem",
    },
];
var updateProductById = function (id, data) {
    var index = products.findIndex(function (prod) { return prod.id === id; });
    if (index > 0) {
        products[index] = __assign(__assign({}, products[index]), data);
    }
};
updateProductById("1", { price: 200 });
updateProductById("1", { name: "Edited Product Name" });
updateProductById("1", { description: "New Desc", price: 10 });
var square = {
    width: 100,
    height: 100,
};
// This works.
var validConfig = {
    apiKey: "12345",
    debugMode: true,
};
// Error: Property 'debugMode' is missing in 
// type '{ apiKey: string; }' but required in type 'FullConfig'.
//  * const invalidConfig: FullConfig = {
//     apiKey: "12345",
//   };
