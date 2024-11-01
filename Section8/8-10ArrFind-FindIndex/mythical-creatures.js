const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const waterType = mythicalCreatures.find(function(creature) {
	return creature.type === "Water";
});

console.log(waterType);

const locateGriffin = mythicalCreatures.findIndex(function(creature) {
	return creature.name === "Griffin";
});

console.log(locateGriffin);

const findEFCreature = mythicalCreatures.find(function(creature) {
	return creature.lastSeen === "Enchanted Forest";
})

console.log(findEFCreature);
