/*
       Otto "Meister" Burroughs //Name of student
         Conditional Wacky //name of assignment
				1-23-2014 //date
*/

/*
 Calculate the volume of your head. I know your wondering how but 
 being that your reading this, most likely, your a geek and geeks are
 squares. Didn't you know that! So input your information and see 
 how much of geek you really are. 

*/
//Formula: length * width * height = volumeofHead



// setting the given variables
var length, width, height, volumeofHead;

	//validating the input of users length
	while (! (length > 0 ) ){

		//1st prompt for user to input their length of head
		length = prompt("Enter the length of your head", " ");
		console.log(length);

	}
	//validating the input of users length
	while (! (width > 0 ) ){

		//1st prompt for user to input their length of head
		width = prompt("Enter the width of your head", " ");
		console.log(width);

	}
	//validating the input of height of your head
	while (! (height > 0) ) {

		height = prompt("Enter the height of your head");
		console.log(height);
	}

	//Calculating the results of user inputs from above prompts
	volumeofHead = (length) * (width) * (height);
	console.log(volumeofHead);

	alert("Congrats your head is" + " " + volumeofHead + " " + "geekazoids");





	