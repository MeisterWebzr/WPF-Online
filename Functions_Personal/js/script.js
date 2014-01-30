/*

Otto "Meister" Burroughs //Name of Student
Functions Industrial //Name of assignment 
1/29/2014 7:14pm // Date and time finished

*/

//Calculate your profit per project or per job.
//Formulas: Profit = Income - Expenses



//Determining the appropriate functions with givens and variables based on the parameters entered
var profit, income, expenses;

		//validating for null or zero input with ( while ) loop.
		while(! (income > 0) ){

			//setting parameter input for income
			income = prompt("How much did you make this month?", " ");

			//Printing input results form prompt to log
			console.log(income);
		}

		//validating for null or zero input with  ( while ) loop.
		while(! (expenses > 0 ) ){

			//setting prompt input for expenses parameters
			expenses = prompt("Enter your total expenses this month", " ")
			console.log(expenses);
		}

		//setting the function for calculating profit
		function calcProfit (income, expenses){

			
			
		}