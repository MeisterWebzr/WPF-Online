//Otto "Meister" Burroughs 1-22-2014 Conditional Industry



//Calculate your weekly or monthy pay.
//The Formula: workHours * rateOfPay = payCheck

//theses are the givens as appropriatly named variables
var rateOfPay, workHours, payCheck;  

	//validation of rateOfPay with the while function
	while ( !(rateOfPay > 0) ){ 

 		rateOfPay = prompt("ENTER YOUR HOURLY PAY", " "); //Prompting use tot enter rate of pay variable
 		console.log(rateOfPay);
    }

	//validation of rateOfPay with the while function
	while ( !(workHours > 0) ){

        //
		workHours = prompt("ENTER HOW MANY HOURS YOU WORKED", " ");
		console.log(rateOfPay);	
	}	
		


	payCheck = (rateOfPay) * (workHours); //Calculating the results using expressions

		//Alerting the user of the calculations based on their input in to the prompts
		alert("Based on your hourly wage of $" + rateOfPay + " " + " & " + workHours + " hours of work" + " " + "you made" + " " + "$" + payCheck);
		
		//assigning the calculation to a resulting variable
		if( payCheck <= 1500)
		
			{  //Alerting the user of the calculations based on their input from prompts
		 	   alert("Thats it! You made" + " " + "$" + payCheck + " " + "How can you live on that?");

			}
			//If conditional operator for below $2500
		   if ( payCheck <= 2500)
			 
			{  //Alerting user on stepping their game up based on the amount made being below or eual to $2500
			   alert("Step your game up! You only made" + " " + "$" + payCheck + " " + " You can quadrple that with a degree from Full Sail");
			}

		  else
		   {
		   	   alert("WOW! You made" + " " + "$" + payCheck);
		   }
		   

console.log(payCheck);




