var people = ['Andrew', 'Vikram', 'John', 'Audra'];

// people.forEach(function (person) {
// 	console.log(person);
// });

// people.forEach((person) => console.log(person));

// people.forEach((person) => {
// 	console.log('Welcome');
// 	console.log(person);
// });

// var add = (a, b) => a + b; //implicit return
// console.log(add(2, 2));

var person = {
	name: 'Andrew',
	likes: ['Movies', 'Programming', 'Running'],
	generateGreeter: function () {
		return () => {
			console.log(this.name);
		}
	},
	printLikes: function () {
		return () => {
			this.likes.forEach((like) => {
				console.log(`${ this.name } likes ${ like }`);
			});
		}
	}
}

person.generateGreeter()();

person.printLikes()();