let john = { name: "john", age: 20 };
let peter = { name: "peter", age: 22 };
let mary = { name: "Mary", age: 19 };

let users = [ john, peter, mary ];
// let names = [ john.name, peter.name, mary.name ];
let names = users.map(item => item.name);
console.log( names );