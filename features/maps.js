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

// var myMap = new Map();

// myMap.set(1, 'Andrew');
// myMap.set(2, 'Jen');
// myMap.set(3, 'Ben');

// console.log([...myMap]);
// console.log(myMap.keys());
// console.log(myMap.values());

var location = { name: 'Philadelphia '};
var secondLocation = { name: 'Oslo'};
var weatherMap = new Map();

function setWeather (location, temp) {
	weatherMap.set(location, temp);
}

function printWeather (location) {
	//if there is weather, print nice message
	if (weatherMap.has(location)) {
		console.log(weatherMap.get(location));
	} else {
		//if no weather, give an error message
		console.log('no weather location found');
	}
	
}

setWeather(location, 22);
printWeather(location);
printWeather(secondLocation);
