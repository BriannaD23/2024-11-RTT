let movies = ['Shark Tales', 'Shrek', 'Incredibles']
let firstMovie = movies[0];

console.log(firstMovie)
console.log(movies.length)

let cars = 'Cars';
movies[0] = cars;

movies.length = 3;
console.log(movies)

// movies.length = 50;
// console.log(movies); 


// Array Iteration
for (let i = 0; i < movies.length; i++) {
	console.log(movies[i]);
}


let movieString = movies.join(" and ");

console.log(movieString + " all walk into a bar..."); // Batman and The Count of Monte Cristo and Shrek all walk into a bar...


//slice

let movies = ['Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];

let middleMovies = movies.slice(1,3);


// nested

let numArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(numArray[1][1])//outputs 5
console.log(numArray[1][2]) // outputs 6

//sort

let numArr = [4, 8, 1, 0, -14, 22, 77, 1388, 20];
let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

numArr.sort(); // [-14, 0, 1, 1388, 20, 22, 4, 77, 8]
movies.sort(); // ['Alien', 'Batman', 'Caddyshack', 'Interstellar', 'Scarface', 'Shrek', 'Spaceballs', 'The Count of Monte Cristo']


// indexOf() and lastIndexOf() - Search an Array

let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo'];

let batmanIndex = movies.indexOf('Batman'); // 2

// map
// filter
// reduce
// find
// every



//Object Syntax



const vehicle = {
	color: "blue",
	hp: 4000,
	year: 1989,
	"active registration": true
}

console.log(vehicle["active registration"]); // true