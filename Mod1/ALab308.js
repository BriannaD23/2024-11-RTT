//adding a comment

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50

// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

//they all equal 50 together

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

console.log(n1 % 2);
console.log(n2 % 2);
console.log(n3 % 2);
console.log(n4 % 2);
//false
console.log(isTwoOdd);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

console.log(isOver25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

//--------------------------Part 1: Math Problems-------------------------//

//check if divisible by 5
const areAllDivisibleBy5 =
  n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(
  ` Accoring to the funtion these numbers are divisible by 25    ${areAllDivisibleBy5}`
);

// check if first is larger than last//
const isFirstLargerThanLast = n1 > n4;
console.log(
  `n1 is larger than n4 10 is greater than 5 ${isFirstLargerThanLast}`
);

// arithmetic chain
const arithmeticChainResult = ((n2 - n1) * n3) % n4;
console.log(`The sum of the chain is : ${arithmeticChainResult}`);

// is number over 25
const hasnumOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const hasnumUnder25 = !hasnumOver25;
console.log(`says true of the number is 25 or less ${hasnumUnder25}`);

//Part 2: Practical Math

// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

function calculateTripDetails(speed, fuelEconomy){
  const totalMiles = 1500;
  const totalFuelBudget = 175;
  const fuelPerGalon = 3;

  // How many gallons of fuel will you need for the entire trip?

  const gallonsNeeded = totalMiles / fuelEconomy;

  const fuelCost = gallonsNeeded * fuelPerGalon;

  const isBudgetGood = fuelCost <= totalFuelBudget;

  const tripTime = totalMiles/ speed;

  console.log(`At ${speed} mph`);

  console.log("At " + speed + " miles per hour:");
  console.log(`You will need ${gallonsNeeded} gallons of fuel.`);
  console.log(`The total fuel cost will be $${fuelCost}.`);
  console.log(`You are ${isBudgetGood ? "within" : "over"} your fuel budget.`);
  console.log(`The trip will take approximately ${tripTime} hours.`);
}

calculateTripDetails(55, 30);
calculateTripDetails(60, 28);
calculateTripDetails(75, 23);


