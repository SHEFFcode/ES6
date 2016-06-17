// function add (a, b) {
// 	return a + b;
// }

// var numbers = [4, 22];

// console.log(add(...numbers));

// var groupA = [33, 99];
// var groupB = [11];

// var unified = [0, ...groupA, 3, ...groupB, 100];

// unified.push(...[55, 33]);

// console.log(unified);

// function greetUsers (group, ...names) {
// 	names.forEach(function (name) {
// 		console.log(`Hello ${ name } you are part of the ${ group } group.`);
// 	});
// }

// greetUsers('developers', 'Andrew', 'Mike', 'Jen');

function adder (...numbers) {
	var sum = 0;
	numbers.forEach(function (number) {
		sum += number;
	});
	return sum;
}

console.log(adder(5, 6, 7, 8));