// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the numb

for(let nums= 1; nums <= 100; nums++){
    
    if(nums % 3 === 0 && nums % 5 === 0 ){
        console.log('Fizz Buzz');
    }else if(nums % 3 === 0){
        console.log('Fizz');
    }else if(nums % 5 === 0){
        console.log('Buzz');
    }else{
        console.log(nums)
    };
}


// Part 2: Prime Time


let n = 12;
let current = n + 1;

while (true) {
    let isPrime = true;

    for (let i = 2; i < current; i++) {
        if (current % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(current);
        break;
    }

    current++;
}




// Part 3: Feeling Loopy

function parseCSV(csvString){
    let rows = csvString.split('\n');

    rows.forEach(row =>{
        let cells = row.split(',');
        //this splits our rows into cells

        console.log(cells.join(', '))
    });


}

const csv1 = `ID,Name,Occupation,Age,\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master, 58\n98,Bill,Doctor's Assistant,26`

parseCSV(csv1);