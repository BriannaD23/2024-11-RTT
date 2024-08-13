function sayHello(name){
    console.log(`Hello ${name}`)
}


sayHello(`Class of 2024-35-RTT`)
sayHello(`Megan The Stallion`)



//addition
const add = (a,b) => a+b ;
    console.log(add(4,5));


//multiply
const multiply = (a,b) => a*b;
console.log(multiply(4,5));

//are both even
function areBothEven(n1,n2){
    console.log(!(n1%2) && !(n2% 2))
}
areBothEven(22,10)
areBothEven(5,10)

//Practice Activity 1: Write a Function Declaration

function computeArea(width, height) {
    return width * height;
    
}

let width = 35;
let height = 65;
let area = computeArea(width,height)

console.log(`The are of the rectangle with a width of ${width} and a height of ${height} is ${area} `)


let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');

//Practice Activity
const planetHasWater = (planet) => {
     console.log(planet.toLowerCase() === 'earth'? 'true' : 'false')
}

planetHasWater('Earth'); 
planetHasWater('earth');
planetHasWater('Mars');
planetHasWater('MARS');


function getDevObject(name) {
    let skills = [];
    for (let i = 1; i < arguments.length; i++) {
      skills.push(arguments[i]);
    }
    return {
      devName: name,
      jobSkills: skills
    };
}


function getDevObject(name, ...skills) {
    return {
      devName: name,
      jobSkills: skills
    };
}
console.log(maria)



const myPerson = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

//Deep Copies

function copyPerson(oldPerson) {
    const newPerson = {
        name: {},
        age: null,
        location: {}
    };

    newPerson.name.first = oldPerson.name.first;
    newPerson.name.last = oldPerson.name.last;
    newPerson.age = oldPerson.age;
    newPerson.location.city = oldPerson.location.city;
    newPerson.location.state = oldPerson.location.state;
    newPerson.location.zip = oldPerson.location.zip;

    return newPerson;
}

const myPersonCopy = copyPerson(myPerson);