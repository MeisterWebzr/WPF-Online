//Otto Burroughs 1/16/2014 Expressions_Personal





//Calculate your Quetelet Index or (BMI)

//Simple calculator that finds your Body Mass Index with 3 inputs form users
var height = prompt("Enter your height in feet");//declaring the height value
var inches = prompt("Enter your remaining height in inches");//declaring the inches value
var mass = prompt("Enter your weight");//decelaring the mass (lbs) value
var length = 12;//declaring the value of length for inches to be added
var totalHeight = height * length + inches;//assigning level one calculation to declare total height
var bmiPercentage = mass / totalHeight;//assigning level 2 calculation to set Quetelet Index or BMI
var results = Math.round(bmiPercentage * 100);//assigned round calculation to result varible to simplify
var bmiCategories = ["Normal weight (18.5 -29.0) ", " Overweight (29.9-34.9)", "Obesity (35 or greater) "];//declared the array bmicategory for array affordances


alert("Based on your input of" + " " + height + "ft" + " " + inches +"in" + " " + "with body mass of" + " " + mass + "lbs" + " " + "Your Quetelet Index is" + " " + results + "%");//alerted details of user input and simpliefied the closing outputs
alert(bmiCategories);

console.log(height); //logged height into console
console.log(inches);//logged inches into console
console.log(mass);//logged mass into console
console.log(totalHeight);//logged totalHeight into console
console.log(bmiPercentage);//logged bmiPercentage into console
console.log(results);//logged results into console
