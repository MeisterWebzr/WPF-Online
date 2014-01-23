



//Calculate your weekly or monthy pay.
//The Formula: workHours * rateOfPay = payCheck


var rateOfPay, workHours, payCheck; 

	while ( !(rateOfPay > 0) ){

 		rateOfPay = prompt("ENTER YOUR HOURLY PAY", " "); //Prompting use tot enter rate of pay variable
 		console.log(rateOfPay);
    }

	while ( !(workHours > 0) ){

		workHours = prompt("ENTER HOW MANY HOURS YOU WORKED", " ");
		console.log(rateOfPay);	
	}	
		


	payCheck = (rateOfPay) * (workHours);


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




