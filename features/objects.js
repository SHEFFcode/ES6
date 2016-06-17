var age = 25;
function printHello () {
	console.log('hello');
}
var person = {
	name: 'Andrew',
	age,
	printHello,
	['hello' + (3 + 5)]: 'I am here',
	printAge () {
		console.log(this.age);
	}
};

person.printAge();

