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
		
		//Printing to console
		console.log(sleepHours);
	}


	//Validating the amount of hours sleep per day
	while (! (daysSlept > 0) ){

		//Prompting user for how many days they sleep 
		daysSlept = prompt("How many days do you sleep per month?", " ");
		
		//Printing to console
		console.log(daysSlept);

	}
	//Validating the amount of hours sleep per day
	while(! (falling > 0) ){

	   //Prompting user for how many days they sleep
	   falling = prompt("How many dreams do you have where your falling from the sky?", " ");
	   
	   //Printing to console
	   console.log(falling);

	}

	//Validating the amount of hours sleep per day
	while(! (dreamMem > 0) ){

	   //Prompting user for how many dreams the remember
	   dreamMem = prompt("How many dreams do you remember?", " ");
	   
	   //Printing to console
	   console.log(dreamMem);

	}


//Setting variable for Dream Vision return
var dreamVision = calcDV(daysSlept, sleepHours, falling, dreamMem);


		//Setup of function
		function calcDV (daysSlept, sleepHours, falling, dreamMem){
			
			//setting variable for dream power calulations
			var dreamPower = (daysSlept * sleepHours) / (falling * dreamMem);
			
			//spitting out the info thats will be called
			return  Math.round (dreamPower * 100);
		}
//Printing to console
console.log(dreamVision);


			//Setting if statment for conditional
			if (dreamVision > 0 && dreamVision <= 10) {
			
			//Alerting user of 1st conditional variable statement
			alert("Your Dream Visionairy Rating is" + " " + dreamVision);
			
			//Printing to console
			console.log(dreamVision);
			}

			//Setting if statement for conditional
			if (dreamVision > 10 && dreamVision < 50) {

				//alerting user of 2nd conditional statemenr variable
				alert("Your Dream Visionairy Rating is" + " " + dreamVision);
				
				//Printing to console
				console.log(dreamVision);

			//else if conditional statement for all other conditonal varibables not covered
			}else{

				//alert user of 3rd conditional statement for all other variables outside of the conditional statemenets above
				alert("Your Dream Visionairy Rating is" + " " + dreamVision + "thats off the radar your definitly are a dreamer");
				
				//Printing to console
				console.log(dreamVision);
			};





