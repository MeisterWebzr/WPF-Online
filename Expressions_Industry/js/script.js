//Otto Burroughs 1/16/2014 Expressions_Industry



//Industry web work calculator

//Web design, web work, graphic design or photography calculator to give estimats for clients that require multimedia work

	var pages = prompt("Enter the amount of html pages your website needs");//declare given variable for html pages
	var images = prompt("Enter the amount of images you need uploaded or edited");//declaring given images to be added or edited on website
	var links = prompt("How many links do you need?");//declaring given variable to links to be added to website
	var pricePages = pages * 150.00;//assigning value of price per html page
	var priceImages = images * 40.00;//assigning value to price per images
	var priceLinks = links * 5.00;//decelared value for price per links
	var estimateTotal = (priceLinks + priceImages + pricePages);//assigned the estimator calculations for total package details 
	var packageDetails = estimateTotal;//Assigning total amount for loggin affordances

alert("Your package includes" + " " + pages + "html pages" + " " + images + " " + "images" + " " + links + "links" + " " + "Your work Estimate is" + " " + "$" + estimateTotal);//assigned concatenate string of variables for package details

alert("Can you afford this? Click OK if you can or can't");
alert("Good! Thanks to Full Sail I'm a Developer");

console.log(packageDetails)//calling out the print log for package details | here is where all the detials of clients input will be logged
console.log(estimateTotal);//calling out the print log for estimator total | here is where the estimate of all items will be logged



