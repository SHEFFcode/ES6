// var array = ['first', 'second', 'third'];
// var [a, b, c] = array;

// console.log(a, b, c);

var todo = {
	description: 'Watch new ES6 section',
	completed: false
}

// var {description: message, completed} = todo;

// console.log(message);

function getTodoStatus ({completed}) {
	if (typeof completed === 'boolean') {
		return [`Todo is ${ completed ? '' : 'not' } completed`];
	} else {
		return [undefined, {error: 'Todo error. Not valid'}]
	}
}

var [response, err] = getTodoStatus(todo);
if (err) {
	console.log(err.error)
} else {
	console.log(response);
}