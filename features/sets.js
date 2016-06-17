var chatRooms = new Set();

//add items
chatRooms.add('Runners');
chatRooms.add('Runners');
chatRooms.add('Bikers');
console.log(chatRooms.size);

//check if item exists
console.log(`Does the set have runners? ${ chatRooms.has('Runners') }`);

// //delete
// chatRooms.delete('Bikers');
// chatRooms.clear();
// console.log(chatRooms.size);

//to array
// chatRooms.add({name: 'Swimmers'});
// console.log([...chatRooms]);

// chatRooms.forEach(function (chatRoom) {
// 	console.log(`Found chatroom ${ chatRoom }`);
// });

//defind a set
var movieSet = new Set();

function addMovie (string) {
	if (movieSet.has(string)) {
		//if movie already exists, print out that it already exists
		console.log(`The movie ${ string } has already been added`);
	} else {
		//otherwise print out that a new move has been added to the set
		movieSet.add(string);
		console.log(`The movie ${ string } has been added to the database`);
	}
}

addMovie('A new hope');
addMovie('Distric 9');
addMovie('A new hope');
