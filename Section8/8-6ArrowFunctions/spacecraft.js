/* Task 1: No Parameters: Activate Hyperdrive */
// TODO: Write an arrow function named `activateHyperdrive` with no parameters that print `"Hyperdrive activated!"` to the console. Call `activateHyperdrive` to test it.
const activateHyperdrive = () => { console.log("Hyperdrive activated!") };
activateHyperdrive();

/* Task 2: Implicit Return: Scan for Lifeforms */
// TODO: Create an arrow function named `scanForLife` that implicitly returns `"No lifeforms detected"` without using curly braces. Print the result of calling `scanForLife`.
const scanForLife = () => console.log("No lifeforms detected");
scanForLife();

/* Task 3: Implicit Return with Objects: Log Coordinates */
// TODO: Write an arrow function named `currentCoordinates` that returns an object with properties `x`, `y`, and `z`, representing coordinates in space. Use implicit return. Print the returned object from `currentCoordinates`.
const currentCoordinates = (x_Coord, y_Coord, z_Coord) => ({
    x: x_Coord,
    y: y_Coord,
    z: z_Coord
});
console.log(currentCoordinates(3.14, 8675309, -512));

/* Task 4: Understanding `this`: Message from Home Base */
// TODO: Inside an object named `spacecraft`, create a method named `receiveMessage` using arrow function syntax. This method should log `"Message received: "` followed by a message it receives as a parameter. Directly call `receiveMessage` within `spacecraft` and observe. Observe and explain the behavior of `this` in this context as a comment.
const spacecraft = {
    name: "Space Exploration Vessel",
    receiveMessage : (message) => {
        console.log(`${this.name} received a message!`);
        console.log(`Message received: ${message}`);
    }
};
spacecraft.receiveMessage("All clear");
/*
 * Observations:
 * TODO: Explain here.
 * 
 * The this keyword in an arrow function does not point to the larger element it is contained within but with the Window element.
 * In a terminal it is returned as undefined.
 */
