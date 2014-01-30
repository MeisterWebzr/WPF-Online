/*

Otto "Meister" Burroughs //Name of Student
Functions Industrial //Name of assignment 
1/29/2014 // Date

*/
//calculate how many gallons of water needed for your household to consume the least amount requrired reccommended by doctors
//Formula: House hols stats (numberOfPeople * 16oz ) * (days) / (128) = gallonsOfWater needed




//Determining the appropriate functions with givens and variables



var total = calcGal(4, 16, 2, 128)  
var gallons

		//Settingt the function for gallon calculation
		function calcGal(numberOfPeople, oz, days, ozInGallon){
			var gallons = numberOfPeople * oz * days / ozInGallon;
			return gallons;
		}

		console.log(gallons);