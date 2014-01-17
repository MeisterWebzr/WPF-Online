//Otto Burroughs 1/16/2014 Expressions_Personal


//Expressions_Wacky

//This calculator will help you calculate a loan for 

//The Formula: c = (r * p) /  (1 - (Math.pow((1 + r), (-n))));
//@param p float Amount borrowed
//@param r interest, as a percentage
//@param n term in years
function calculateMortgage( ){//setting function for mortgage calculator
	


	//converting this percentage to a decimal
	r = percentToDecimal(r);

	
	//convert years to months
	n = yearsToMonths(n);//parameters set for n = conversion of years to months
	
	
	
		//convert data with formula for obtaining monthly payments
		var pmt = (r * p) /  (1 - (Math.pow((1 + r), (-n))));

		return parseFloat(pmt.toFixed(2));//getting rid of the to digit on payments with parseFloat


		 console.log("R", p);//call out log for para p
		 console.log("R", r);//call out log for para r 
		 console.log("R", n);//call out log for para n	

	return monthlyPayments;//returning to varibale monthly
 

} 
 

 function percentToDecimal(percent){ //function setup for converting percent of intrest  rate to decimal

	return (percent/12) / 100; //assigning calculation for conversion of input


 }

 function yearsToMonths(year){ //functiomn setup for converting yeard to months

 	return year * 12;//assigning calculation for years to months
 }

var btn = document.getElementById("btnCalculate");//linking btn from html to code with getElementById
btn.onClick = function( ){
	var cost = document.GetElementById("inCost"); //declaring variables for cost
	var downPayment = document.GetElementById("inDown");//declaring variable for down payment
}	var interest = document.GetElementById("inAPR");//decalring variable for intrest

	
	var amountBorrowed = cost - downPayment; //declaring varibales for amount borrowed
	

	var pmt = calculateMortgage(amountBorrowed, interest, term);




 
 