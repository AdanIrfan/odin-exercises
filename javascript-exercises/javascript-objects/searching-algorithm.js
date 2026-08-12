let head = {
    glasses: 5
};

let table = {
    pen: 4,
    __proto__: head
};

let bed = {
    sheet: 2,
    pillow: 1,
    __proto__: table
};

let pocket = {
    money: 2000,
    __proto__: bed
};

// Can also be created after object creation
// pocket.__proto__= bed;
// bed.__proto__= table;
// object.getprototypeof(table,head);


console.log(pocket.glasses);

// Searching speed would be same for prototype and direct property search from a object as modern engines remember where to find them