
let output = "";

// Standard function with default parameters
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

// Arrow function with default parameters
const arrowArea = (length = 5, width = 4) => length * width;

// Calculate areas
let standardResult = rectangleArea();
let arrowResult = arrowArea(10, 3);

// Display results
output += "Standard Function Area (Default 5x4): " + standardResult + "\n";
output += "Arrow Function Area (Custom 10x3): " + arrowResult + "\n";

// Demonstrate function scope
function scopeExample() {
    var functionVariable = "I am function-scoped";
    output += "\nFunction Scope: " + functionVariable + "\n";
}

scopeExample();

// Demonstrate block scope
{
    let blockVariable = "I am block-scoped";
    output += "Block Scope: " + blockVariable + "\n";
}

// Display output
console.log(output);
document.getElementById("output").textContent = output;
