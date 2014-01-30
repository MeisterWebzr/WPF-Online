/*

Otto "Meister" Burroughs //Name of Student
Functions Personal //Name of assignment 
1/30/2014 10:11 am // Date and time finished

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

	//if statement for condiontal operation of total profit
	if(totalProfit < 0){

		//alerting user of conditional statement for total profit less than 1 dollar
		alert("Your negative" + " " + "$" + totalProfit + " " + "Have a look at your marketing plan and review your expenses for ways to cut overhead. You won't make it too much longer without making a profit." )
		console.log(totalProfit);
	
	}//if statement for condiontal operation of total profit
	if (totalProfit >= 1 && totalProfit <= 1000) {
		
		//alert for user to be notified of profit between 1 and 1000 dollars
		alert("Your profited" + "$" + totalProfit + " " + "not bad, but, you an do better than that. Try charging a bit more or cutting some overhead costs.")
		//printing to console the total
		console.log(totalProfit);
	}
	
	//if statement for condiontal operation of total profit
	if (expenses > income) {
		
		//alert for user to be notified of profit between 1 and 1000 dollars
		alert("Your expenses were" + " " + "$" + expenses + " " + "I suggest you eliminte your tedious expenses and cut overhead so you can turn a profit.")
		//printing to console the total
		console.log(expenses);
	
	//Else conditoinal statement for all other conditions not set above
	}else{

		//alert user for all ther conditions with this else conditionals statement
		alert("You profited" + " " + income + " " );
		//printing to console the total
		console.log(income);
	}

