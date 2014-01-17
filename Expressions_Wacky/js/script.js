//Otto Burroughs 1/16/2014 Expressions_Personal


//Expressions_Wacky

//This calculator will help you calculate a loan for 

//The Formula: c = ((p * r) * Math.pow((1 + r), n)) / ( Math.pow((1+4), n) - 1)
//@param p float Amount borrowed
//@param r interesst, as a percentage
//@param n term in years
function calculateMortgage( ){
	var monthlyPayments = null;


	//converting this percentage to a decimal
	r = percentToDecimal(r);

	
	//convert years to months
	n = yearsToMonths(n);
	

	return monthlyPayments;
 

}
 

 function percentToDecimal(percent){

	return (percent/12) / 100;


 }

 function yearsToMonths(year){

 	return year * 12
 }