/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.
let destination = "Ancient Egypt";
console.log(destination);

/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.
destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.
const travelDate = "2024-03-15";

travelDate = "1942-12-07";
/*
 * Observations:
 * TODO: Explain here.
 * 
 * Variables declared using the 'const' keyword are intended to be immutable. So in this case I declared travelDate as a String literal and when I tried to change the variable to a different
 * String literal I got an error (TypeError) stating that I cannot reassign a constant variable.
 */

/* Task 4: Experiment with Variable Hoisting */
// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
console.log(timeMachineModel);

var timeMachineModel = "T-800";
/*
 * Observations:
 * TODO: Explain here.
 * 
 * When I tried to print the variable 'timeMachineModel' it had not been declared nor defined yet, so in the console it returned 'undefined'.
 */
