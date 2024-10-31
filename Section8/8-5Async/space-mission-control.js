// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`).
let oneTimeTasks = [];
let monitoringTaskId;

// Task 2: Add One-Time Task Function
function addOneTimeTask (func, delay)
{
	// TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters.
	//This function should add an object containing both parameters into the `oneTimeTasks` array.
	oneTimeTasks.push({function: func, delayTime: delay});
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks ()
{
	// TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
	for (const oneTimeTask of oneTimeTasks) {
		setTimeout(oneTimeTask.function, oneTimeTask.delayTime);
	}
}

// Task 4: Start Monitoring Function
function startMonitoring ()
{
	// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring.
	//This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.
	console.log("Starting continuous monitoring...");
	monitoringTaskId = setInterval(
		function() {
			console.log("Monitoring launch conditions..")
			//Conditions
			let launchPadTemp = Math.random() * 75 + 10;
			let powerLevels = (Math.random() * 10) > 1 ? "Stable and Ready" : "Critically low";
			let commLevels = (Math.random() * 100) > 30 ? "Fully operational" : "Temporary loss of comms";
			let o2Levels = (Math.random() * 100) > 25 ? "Oxygen levels stable" : "Oxygen levels low";
			console.log(`Launchpad temp: ${launchPadTemp.toFixed(2)} F | Power status: ${powerLevels} | Comms: ${commLevels} | Oxygen levels: ${o2Levels}`);
		}, 3000
	);
}

// Task 5: Stop Monitoring Function
function stopMonitoring ()
{
	// TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
	clearInterval(monitoringTaskId);
	console.log("Continuous monitoring stopped..")
}

// Task 6: Start Countdown Function
function startCountdown (duration)
{
	// TODO: Create a function named `startCountdown` that takes a duration parameter.
	//Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.
	let timeUntilLaunch = duration;
	console.log(`Countdown initiated: ${timeUntilLaunch} seconds`);

	let countdownTimerId = setInterval(
		function() {
			timeUntilLaunch--;
			console.log(`T-minus ${timeUntilLaunch} seconds`);

			if(timeUntilLaunch <= 0) {
				clearInterval(countdownTimerId);
				console.log("Liftoff! The rocket is launching..");
			}
		}, 1000
	);
}

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission ()
{
	// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown.
	//Make sure to adjust the delays appropriately to simulate a real mission timeline.
	startMonitoring();
	addOneTimeTask(function() {console.log("Pre-launch system checks..");}, 4000);
	addOneTimeTask(stopMonitoring, 20000);
	addOneTimeTask(function() {startCountdown(10);},22000);

	runOneTimeTasks();
}

scheduleMission(); // Starts the mission.
