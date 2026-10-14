
let billAmount = Number(prompt("Enter your bill amount:"));
let tipPercentage = Number(prompt("Enter tip percentage:"));

// Calculate tip
let tip = billAmount * tipPercentage / 100;

// Calculate total using assignment operator
let totalAmount = billAmount;
totalAmount += tip;

// Display output in console
console.log("Subtotal: $" + billAmount);
console.log("Tip Percentage: " + tipPercentage + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + totalAmount);

// Display output on webpage
document.getElementById("output").innerHTML =
    "<p>Subtotal: $" + billAmount + "</p>" +
    "<p>Tip Percentage: " + tipPercentage + "%</p>" +
    "<p>Calculated Tip: $" + tip + "</p>" +
    "<p>Total Amount to Pay: $" + totalAmount + "</p>";
