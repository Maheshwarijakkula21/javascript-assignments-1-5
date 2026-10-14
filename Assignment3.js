
let score = Number(prompt("Enter your test score:"));

// Using if...else to evaluate the score
if (score < 0 || score > 100 || Number.isNaN(score)) {
    console.log("Please enter a valid score between 0 and 100.");
    document.getElementById("output").innerHTML =
        "Please enter a valid score between 0 and 100.";
} else {
    let grade;

    // Using switch statement to determine the grade
    switch (true) {
        case (score >= 90):
            grade = "A";
            break;
        case (score >= 80):
            grade = "B";
            break;
        case (score >= 70):
            grade = "C";
            break;
        case (score >= 60):
            grade = "D";
            break;
        default:
            grade = "F";
    }

    // Using if...else to evaluate the score
    if (score >= 40) {
        console.log("You have passed the test.");
    } else {
        console.log("You have failed the test.");
    }

    // Using ternary operator
    let status = score >= 40 ? "Passed" : "Failed";

    // Display output in console
    console.log("Score: " + score);
    console.log("Grade: " + grade);
    console.log("Status: " + status);

    // Display output on webpage
    document.getElementById("output").innerHTML =
        "<p>Score: " + score + "</p>" +
        "<p>Grade: " + grade + "</p>" +
        "<p>Status: " + status + "</p>";
}
