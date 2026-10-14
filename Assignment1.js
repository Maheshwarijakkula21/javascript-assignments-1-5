
var name = "Alice";
let age = 25;
const isEmployed = true;
const skills = ["HTML", "CSS", "JavaScript"];

console.log("Name: " + name + " (Type: " + typeof name + ")");
console.log("Age: " + age + " (Type: " + typeof age + ")");
console.log("Is Employed: " + isEmployed + " (Type: " + typeof isEmployed + ")");
console.log("Skills: " + JSON.stringify(skills) + " (Type: " + typeof skills + ")");

document.getElementById("output").innerHTML =
    "<p>Name: " + name + " (Type: " + typeof name + ")</p>" +
    "<p>Age: " + age + " (Type: " + typeof age + ")</p>" +
    "<p>Is Employed: " + isEmployed + " (Type: " + typeof isEmployed + ")</p>" +
    "<p>Skills: " + JSON.stringify(skills) + " (Type: " + typeof skills + ")</p>";
