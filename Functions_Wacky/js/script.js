/*

		Otto "Meister" Burroughs //Name of Student
		Functions Wacky //Name of assignment 
		1/30/2014 11:30 am // Date and time finished

*/

/*
		Calculate your DreamVisionary Rating. This is the ability to see your dreams and create new ones.
*/

//Formula: (hours slept per day * days slept) / (times falling * dreams remember) = DreamVisionairy Rating

/*
	//first alert to user for the definition of the calculator
	alert("Calculate your DreamVisionary Rating. This is the ability to control your dreams. Go ahead an click OK and well gather some information");
*/
	//setting given variables
	var sleepHours, daysSlept, falling, dreamMem;


	//Validating the amount of hours sleep per day
	while (! (sleepHours > 0) ){

		//Prompting user for how many hours they sleep per day
		sleepHours = prompt("How many hours do you sleep per day?", " ");
		console.log(sleepHours);
	}


	//Validating the amount of hours sleep per day
	while (! (daysSlept > 0) ){

		//Prompting user for how many days they sleep 
		daysSlept = prompt("How many days do you sleep per month?", " ");
		console.log(daysSlept);

	}
	//Validating the amount of hours sleep per day
	while(! (falling > 0) ){

	   //Prompting user for how many days they sleep
	   falling = prompt("How many dreams do you have where your falling from the sky?", " ");
	   console.log(falling);

	}

	//Validating the amount of hours sleep per day
	while(! (dreamMem > 0) ){

	   //Prompting user for how many dreams the remember
	   dreamMem = prompt("How many dreams do you remember?", " ");
	   console.log(dreamMem);

	}


//Setting variable for Dream Vision return
var dreamVision = calcDV(daysSlept, sleepHours, falling, dreamMem);


		//Setup of function
		function calcDV (daysSlept, sleepHours, falling, dreamMem){

			var dreamPower = (daysSlept * sleepHours) / (falling * dreamMem);
			return  Math.round (dreamPower * 100);
		}

console.log(dreamVision);



			if (dreamVision > 0 && dreamVision <= 10) {
			
			alert("Your Dream Visionairy Rating is" + " " + dreamVision);

			}

			if (dreamVision > 10 && dreamVision < 50) {

				alert("Your Dream Visionairy Rating is" + " " + dreamVision);
			}else{

				alert("Your Dream Visionairy Rating is" + " " + dreamVision + "thats off the radar your definitly are a dreamer");
			}





