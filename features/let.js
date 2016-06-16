for (var i = 0; i < 3; i++) {
	console.log('for loop i = ' + i);
}

function getCallback () {
	let name = 'Jeremy';
	return function () {
		console.log(`Hello ${name}`);
	}
}

getCallback()();