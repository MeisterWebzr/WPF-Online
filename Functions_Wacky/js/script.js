/*

		Otto "Meister" Burroughs //Name of Student
		Functions Wacky //Name of assignment 
		1/30/2014 11:30 am // Date and time finished

*/

/*
		Calculate your DreamVisionary Rating. This is the ability to see your dreams and create new ones.
*/

//Formula: (hours slept per day * days slept) / (times falling * dreams remember) = DreamVisionairy Rating

	//firs alert to user for the definition of the calculator
	alert("Calculate your DreamVisionary Rating. This is the ability to see your dreams and create new ones. Go ahead an click OK and well gather some infrormatiin");

	//setting given variables
	var sleepHours, daysSlept, falling, dreamMem;


	//Validating the amount of hours sleep per day
	while (! (sleepHours > 0) ){

		//Prompting user for how many hours they sleep per day
		prompt("How many hours do you sleep per day?", " ");
		console.log(sleepHours);
	}


	//Validating the amount of hours sleep per day
	while (! (daysSlept > 0) ){

		//Prompting user for how many days they sleep 
		prompt("How many days do you sleep per month?", " ");
		console.log(daysSlept);

	}

	while(! (falling > 0) ){

	   //Prompting user for how many days they sleep
	   prompt("How many hours do you sleep per day?", " ");
	   console.log(falling);

	}


	while(! (dreamMem > 0) ){

	   //Prompting user for how many dreams the remember
	   prompt("How many dreams do you remember?", " ");
	   console.log(dreamMem);

	}


//Setting variable for Dream Vision return
var dreamVision = calcDV(daysSlept, sleepHours, falling, dreamMem);


		//Setup of function
		function calcDV (daysSlept, sleepHours, falling, dreamMem){

			var dreamPower = (daysSlept * sleepHours) / (falling + dreamMem);
			return dreamPower;
		}

console.log(dreamVision);






