var person = {
	name: 'Jeremy',
	age: '27'
};

function greet (person = {name: 'Anonymous', age: '27'}) {
	console.log(`Hello ${ person.name }. You are ${ person.age } years old.`);
}

greet();
greet({name: 'Mike', age: '36'});