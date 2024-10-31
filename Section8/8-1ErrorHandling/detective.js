function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

var vDays = 0;
const totalMissions = 20;
const opSuccessVacationDays = 13;
const opFailedVacationDays = 1;
const opAttendanceVacationDays = 3;
for(let i = 0; i < totalMissions; i++){
	try{
		console.log("- - - - - - - - - - -\nOperation number " + (i + 1) + ". Let's go!");
		mysteryOperation();
		vDays += (opSuccessVacationDays + opAttendanceVacationDays);
		console.log("Woohoo! I just accrued " + (opSuccessVacationDays + opAttendanceVacationDays) + " vacation days!");
	} catch {
		vDays += (opFailedVacationDays + opAttendanceVacationDays);
		console.log("Ah man, operation failed. At least I still accrued " + (opFailedVacationDays + opAttendanceVacationDays) + " vacation days.");
	}
	console.log("- - - - - - - - - - -");
}
console.log("Oh man, after 20 missions I deserve " + vDays + " vacation days.");