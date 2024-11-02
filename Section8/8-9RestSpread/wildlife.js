/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
console.log("task 1");
function animalSightings(...animals) {
	const sightingArr = Array.from(animals);
	sightingArr.forEach(animal => console.log(`${animal} spotted!`));
	//console.log(...animals);
}
animalSightings('bear','moose','armadillo','bison');

/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
console.log("\ntask 2");
const protectedHabitats = [...forestHabitats, ...savannahHabitats];
console.log(protectedHabitats);

/* Task 3: Update Conservation Status */
const rhinoStatus = {
	population: 500,
	status: "Endangered"
};
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
console.log("\ntask 3");
const newRhinoStatus = {...rhinoStatus, population: 600};
console.log(newRhinoStatus);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
	name: "Leo",
	age: 5,
	species: "Lion"
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
console.log("\ntask 4");
const lionProfileCopy = {...lionProfile};
console.log(lionProfileCopy === lionProfile ? 'The copy and the original are the same' : 'The copy and the original are not the same');
const lionProfileExtra = {...lionProfile, genetics: 'XY'};
console.log(lionProfileExtra);

/*
 * Observations:
 * TODO: Explain here.
 * 
 * Nested properties of an object or an array will be the same reference as the original when using the Spread operator in JS. So in the instance of one nested property being changed in the copy the original will also observe this change. However, in this case (Task 4) there are no nested properties between the original and the copy.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
	waterQuality: "Good",
	foodSupply: {
		herbivores: "Abundant",
		carnivores: "Sufficient"
	}
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
console.log("\ntask 5");
const ecosystemHealthCopy = {...ecosystemHealth};
ecosystemHealth.foodSupply.herbivores = 'Overpopulated';
ecosystemHealth.foodSupply.carnivores = 'Dwindling';
console.log(ecosystemHealth);
console.log(ecosystemHealthCopy);

/*
 * Observations:
 * TODO: Explain here.
 * 
 * Explained in Task 4. The nested information within the copy is to the same reference of the original. After changing nested information in the copy you can observe the same change to the original.
 */
