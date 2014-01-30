/*

		Otto "Meister" Burroughs //Name of Student
		Functions Wacky //Name of assignment 
		1/30/2014 11:30 am // Date and time finished

*/

/*
		Calculate your DreamVisionary Rating. This is the ability to see your dreams and create new ones.
*/

//Formula: (hours slept per day * days slept) / (times falling * dreams remember) = DreamVisionairy Rating

	alert("Calculate your DreamVisionary Rating. This is the ability to see your dreams and create new ones. Go ahead an click OK and well gather some infrormatiin");

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

	while(!(falling > 0) ){

	   //Prompting user for how many days they sleep
	   prompt("How many hours do you sleep per day?", " ");
	   console.log(falling);


	}