//Otto Burroughs 1/16/2014 Expressions_Industry



//Industry web work calculator



var pages = prompt("Enter the amount of html pages your website needs");//declare variable for html pages
var images = prompt("Enter the amount of images you need uploaded or edited");//declaring images to be added or edited on website
var links = prompt("How many links do you need?");//declaring variable to links to be added to website
var pricePages = pages * 150.00;//assigning value of price per html page
var priceImages = images * 40.00;//assigning value to price per images
var priceLinks = links * 5.00;//decelared value for price per links
var estimateTotal = (priceLinks + priceImages + pricePages);//assigned the estimator calculations for total package details
var packageDetails = estimateTotal;



alert("Your package includes" + " " + pages + "html pages" + " " + images + " " + "images" + " " + links + "links" + " " + " your estimate is" + " " + estimateTotal);//assigned concatenate string of variables for package details




console.log(packageDetails)//calling out the print log for package details | here is where all the detials of clients input will be logged
console.log(estimateTotal);//calling out the print log for estimator total | here is where the estimate of all items will be logged



