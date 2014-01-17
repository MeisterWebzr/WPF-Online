//Otto Burroughs 1/16/2014 Expressions_Personal


//Expressions_Wacky

//This calculator will help you calculate a loan for 

//The Formula: c = ((p * r) * Math.pow((1 + r), n)) / ( Math.pow((1+4), n) - 1)
//@param p float Amount borrowed
//@param r interest, as a percentage
//@param n term in years
function calculateMortgage( ){//setting function for mortgage calculator
	var monthlyPayments = null;//Declaring variable monthly payment


	//converting this percentage to a decimal
	r = percentToDecimal(r);

	
	//convert years to months
	n = yearsToMonths(n);//parameters set for n = conversion of years to months
	
	//convert data with formula for obtaining monthly payment
	return ((p * r) * Math.pow((1 + r), n)) / ( Math.pow((1 + 4), n) - 1);
	

	

	return monthlyPayments;
 

} 
 

 function percentToDecimal(percent){

	return (percent/12) / 100;


 }

 function yearsToMonths(year){

 	return year * 12;
 }


 console.log(p)
 console.log(r)
 console.log(n)
 