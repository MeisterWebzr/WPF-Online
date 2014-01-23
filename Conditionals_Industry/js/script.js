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
	while ( !(workHours > 0) )

		workHours = prompt("ENTER HOW MANY HOURS YOU WORKED", " ");
		console.log(rateOfPay);	
	}	
		


	payCheck = (rateOfPay) * (workHours); //Calculating the results using expressions


		alert("Based on your hourly wage of $" + rateOfPay + " " + " & " + workHours + " hours of work" + " " + "you made" + " " + payCheck);

		if( payCheck >= 6000)
		
			{
		 		alert("WOW, you made" + "$" + payCheck);

			}

		if( payCheck <= 5999)
			
			{
				alert(" Step your game up! How can you live of those crumbs?");
			}


console.log(payCheck);




