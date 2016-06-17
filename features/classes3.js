class Person {
	constructor (name) {
		this.name = typeof name === 'string' ? (name) : 'Anonymous';
	}
	set name (val) {
		this._name = Person.capitalizeWord(val);
	}
	get name () {
		return this._name;
	}
	printGreeting () {
		console.log(`Hi I am ${ this.name }`)
	}
	static capitalizeWord (word) {
		return word[0].toUpperCase() + word.slice(1)
	}
}

class Employee extends Person {
	constructor (name, job = 'unemployed') {
		super(name);
		this.job = job;
	}
	printGreeting () {
		console.log(`Hi I am ${ this.name } and I am a ${ this.job }`);
	}
	callSuperMethod () {
		super.printGreeting();
	}
}

var person1 = new Employee('Andrew', 'Developer');
console.log(person1.name);

var person2 = new Person();
console.log(person2.name);

person1.printGreeting();
person1.callSuperMethod();
person2.printGreeting();

console.log(Person.capitalizeWord('mike'));