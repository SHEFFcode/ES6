// var locations = [];

// locations.push({
// 	name: 'Philadelphia',
// 	weather: 22
// });

// locations.push({
// 	name: 'Mexico City',
// 	weather: 52
// });

// for (let location of locations) {
// 	console.log(`It's ${ location.weather } in ${ location.name }`);
// }

function averageGrade (...grades) {
	var sum = 0;
	for (let grade of grades) {
		sum += grade;
	}
	return sum / grades.length;
}

console.log(averageGrade(80, 90));