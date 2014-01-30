/*

Otto Burroughs | WDDBS Student - WPF sec01 | 1/28/2014
Screecast- Functions Follow along commit notes

*/



/* Functions | What a function's function? */



/* Sequential - Exepresions */




/* Conditional - If statements, ternaries */


/* Repetitive */


//////////////////////////* Reusable *//////////////////////////

/* DRY - Don't Repeat yourself */

/* 

Referencing to another library of code that you might use many times. You can also make changes in one place then all edits
will be made over linked locations. Functions help organizations | BLOCKS OF CODE THAT RUN PROCESSES FOR YOU

*/

/* 

     Different types of functions 

		1. Functions - a.k.a. "Normal Functions"
		2. Procedures
		3. Anonymous Functions

*/


/*
function functionName(){

	//code the function runs

}
*/

/*

function outptMsg(){
	//print message to world
	console.log("Hello World, this is functions in javascript");
}
*/

/*
var width = 5; //Scoped to the larger document or whatever outside of the function definition

function calcArea(){

	//function definition
	var width = 20; //width is scoped to the function definition of calcArea 
	var height = 30;
	var area = width * height;
	//console.log(area);
} 



calcArea(); //Invocation of function | Functions call
console.log(calcArea);

*/

/////////////////////* Variable scope | Variables will always prefer to use the var nested within its own function */




/* 

///////////////////Arguments and Parameters | Getting stuff into a function 




funcName(argument1, argument2);

 function funcName(paramter1, parameter2){
 	//code the function runs depednings on which parameter is invocated or called
 	
 }

*/


/////////////////////////// Functions - Parameters and Arguments , elements going into a function

/*
			calcArea(30, 20); //invocation of parameters or calling into wharehouse

			function calcArea(w, h){ //w = 30 h = 20 the actual storage containe
				var area = w * h;
				console.log(area);
			}

*/




////////////////////////////Storage container | parameters


			function dogYears(age){

				var dogYears = age * 7;
				console.log("Sparky is" + " " + dogYears + " " + "years old")
			}


			dogYears(4); //passing the value 4 to age //arguments
			dogYears(5); //passing the value 5 to age




/////////////////////////// Returning Values | getting values back from warehouse or function



			var total = calcArea(30, 20);

			//This is a function
			function calcArea(w, h){ //w = 30 h = 20 the actual storage containe
				var area = w * h;
				return area; //function spitting information out
				
			}

			//This is a procedure
			function calcArea(width, height){ //w = 30 h = 20 the actual storage containe
				var area = width * height;
				console.log(area); //no return staying in warehouse databes or fuction
				
			}


			console.log(total);




////////////////////////////// Anonymous Function | Also called closeures
// have to define function then invocake results after like setting variable

			
			//Anonymous Functions
			var calcArea = function(width, height){
				//code to run
				var area = width * height;
				return area;
			}

			var a = calcArea(20, 30);

			
			alert("Answer" + " " + " = " + " " + a);

			








