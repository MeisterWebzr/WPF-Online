



//Calculate your weekly or monthy pay.
//The Formula: workHours * rateOfPay = payCheck


var rateOfPay, workHours, payCheck; 

	if ( !(rateOfPay > 0) ){

 		rateOfPay = Number(prompt("ENTER YOUR HOURLY PAY", " ")); //Prompting use tot enter rate of pay variable

    }

	if ( !(workHours > 0) ){

	rateOfPay = Number(prompt("ENTER HOW MANY HOURS YOU WORKED", " "));
	
	}	
		


	payCheck = (rateOfPay) * (workHours);


		alert("Based on your hourly wage of" + rateOfPay + " " + " & " + workHours + "of work" + " " + "you made" + " " + payCheck);

		if( payCheck >= 6000)
		
			{
		 		alert("WOW, you get paid" + payCheck + " " + " Click the ok button see your stats");
			}

		if( payCheck <= 5999 || payCheck >= 2999)
			{

				alert(" ")
			}


console.log(payCheck);
console.log(rateOfPay, workHours);
alert(payCheck);




