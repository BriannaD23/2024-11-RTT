// Part 1: Thinking Functionally


// Take an array of numbers and return the sum.

function sumArray(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log(sumArray(4,5,6))

// Take an array of numbers and return the average.

function averageNum(num1, num2, num3,num4, num5){
    return (num1+num2 + num3+ num4 + num5)/ 5;
}
console.log(averageNum(3,4,6,8,9))

// Take an array of strings and return the longest string.

function findLongestStr(strings){
    return strings.reduce((longest,current)=> current.length > longest.length ? current : longest)
    
}

const arrayOfStrings = ['table', 'chair', 'television','lamp', 'bookshelf' ]
console.log(findLongestStr(arrayOfStrings))

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 

function strsNums(strings, num){
    return strings.filter(str => str.length > num )
}

const number =5
console.log(strsNums(arrayOfStrings, number))

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printEveryNumber(current, n){
    if(current >= n){
        return;
    }
    console.log(current);
    printEveryNumber(current+1 ,n);
}

printEveryNumber(1,5)

// Part 2: Thinking Methodically

