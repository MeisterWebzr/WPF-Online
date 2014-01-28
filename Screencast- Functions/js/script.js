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


/* Varianble scope | Variables will always prefer to use the var nested within its own function */







