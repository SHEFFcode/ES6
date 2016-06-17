// var myMap = new Map();

// //set
// myMap.set('name', 'Andrew');

// console.log(myMap.get('name'));

// //has
// myMap.set('age', '25');
// console.log(myMap.has('age'));

// //delete
// myMap.delete('name');

// //clear
// myMap.clear();

// //size
// console.log(myMap.size);

// var user = {
// 	name: 'Andrew'
// }

// myMap.set(user, 'Philadelphia');

// console.log(myMap.get(user));

var myMap = new Map();

myMap.set(1, 'Andrew');
myMap.set(2, 'Jen');
myMap.set(3, 'Ben');

console.log([...myMap]);
console.log(myMap.keys());
console.log(myMap.values());
