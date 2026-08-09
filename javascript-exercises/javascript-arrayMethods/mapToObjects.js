let john = { name: "John", surname: "Smith", id: 1 };
let peter = { name: "Peter", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "key", id: 3 };

let user = [ john, peter , mary ];

let usersMapped = user.map( item =>({fullname: `${item.name} ${item.surname}`, id: item.id }));
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullname);