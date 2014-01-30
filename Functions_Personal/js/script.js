/*

Otto "Meister" Burroughs //Name of Student
Functions Personal //Name of assignment 
1/30/2014 10:10 am // Date and time finished

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

//Setting variable for totalProfit return for function		
var totalProfit = calcProfit(income, expenses);


		//setting the function for calculating profit
		function calcProfit (income, expenses){

			//calculation of proft based on income and expenses
			var mula = (income - expenses);
			return mula;

		}

	//Printing to console total profit results
	console.log(totalProfit);




	if(totalProfit < 0){

		//alerting user of conditional statement for total profit less than 1 dollar
		alert("You didnt profit anything, have a look at your marketing plan and review your expenses for ways to cut overhead. You won make it too much longer without makring a profit." )

	}

