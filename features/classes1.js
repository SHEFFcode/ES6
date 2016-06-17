// class Person {
// 	constructor (name) {
// 		this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
// 	}
// 	printGreeting () {
// 		console.log(`Hi I am ${ this.name }`)
// 	}
// 	static capitalizeWord (word) {
// 		return word[0].toUpperCase() + word.slice(1)
// 	}
// }

// var person1 = new Person('Andrew');
// console.log(person1.name);

// var person2 = new Person();
// console.log(person2.name);

// person1.printGreeting();
// person2.printGreeting();

// console.log(Person.capitalizeWord('mike'));

//create bank account class
class BankAccount {
	//allow constructor function to take balance, default to 0 if not known
	constructor (balance) {
		this.balance = typeof balance === 'number' ? balance : 0;
	}
	//deposit
	deposit (amount) {
		this.balance += amount;
	}
	//withdraw
	withdraw (amount) {
		this.balance -= amount;
	}
	//printbalance
	printBalance () {
		console.log(this.balance);
	}
}

var account = new BankAccount ();
account.deposit(100);
account.withdraw(50);
account.printBalance();







