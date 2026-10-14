
let result = "";

// 1. For loop: Multiplication table of 5
result += "-- Multiplication Table of 5 --\n";

for (let i = 1; i <= 5; i++) {
    result += `5 x ${i} = ${5 * i}\n`;
}

// 2. While loop with break
result += "\n-- First number > 10 divisible by 6 --\n";

let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        result += "Found: " + num + "\n";
        break;
    }
    num++;
}

// 3. Do...while loop with continue
result += "\n-- Do...while loop with continue --\n";

let count = 0;

do {
    count++;

    if (count === 2 || count === 4) {
        continue;
    }

    result += count + "\n";

} while (count < 5);

// Display output in console
console.log(result);

// Display output on webpage
document.getElementById("output").textContent = result;
