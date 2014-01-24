/*
       Otto "Meister" Burroughs //Name of student
         Conditional Wacky //name of assignment
				1-23-2014 //date
*/

/*
 Calculate the Geekazoidness. I know your wondering how but, 
 if your reading this, most likely. Here's where we put it to the test. 
 Whats your Geekazoid rating! Simple input your information and see 
 how much of geek you really are. 

*/
//Formula: length * width * height = volumeofHead

	 alert( "Calculate your Geekazoidness. I know your wondering how but, if your reading this, most likely you're a geek. Here's where we put it to the test by calculating your Geekazoid rating! Simple input your information and see how much of geek you really are. Click OK to continue!" );

// setting the given variables
var length, width, height, volumeOfHead;

	//validating the input of users length
	while (! (length > 0 ) ){

		//1st prompt for user to input their length of head
		length = prompt("Enter the amount of days you've been associated with Full Sail University", " ");
		console.log(length);

	}
	//validating the input of users length
	while (! (width > 0 ) ){

		//1st prompt for user to input their length of head
		width = prompt("How many all nighters have you pulled?", " ");
		console.log(width);

	}
	//validating the input of height of your head
	while (! (height > 0) ) {

		height = prompt("How many times has somewone called you a geek?", " ");
		console.log(height);
	}

	//Calculating the results of user inputs from above prompts
	volumeOfHead = (length) * (width) * (height);
	console.log(volumeOfHead);

	if (volumeOfHead >=1 && volumeOfHead <= 240000)  {

		alert("Your rating is" + " " + volumeOfHead + " " + "geekazoids, I'm light years ahead of you! Bow down to the Geekazoid Master");
	}
	else		
	{
		alert(" Wow, I thought I was a Geekazoid Master but wth your rating of" + " " + volumeOfHead + " " + "geekazoids it's clear that your the new Geekazoid Master congradulations!");
	}




	