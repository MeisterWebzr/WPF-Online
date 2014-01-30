/*

Otto "Meister" Burroughs //Name of Student
Functions Industrial //Name of assignment 
1/29/2014 // Date

*/
//calculate how many gallons of water needed for your household to consume the least amount requrired reccommended by doctors
//Formula: House hols stats (numberOfPeople * 16oz ) * (days) / (128) = gallonsOfWater needed




//Determining the appropriate functions with givens and variables



var total = calcGal(numberOfPeople, oz, days, ouncesPerGallon); 



		//Settingt the function for gallon calculation
		function calcGal(numberOfPeople, oz, days, ouncesPerGallon){
			var gallons = (numberOfPeople * oz * days) / (ouncesPerGallon);
			return gallons;
			
		}

	console.log(total);

		if (total <= 1){

			alert("You will need to order" + " " + total + " " + "gal");

		}

		