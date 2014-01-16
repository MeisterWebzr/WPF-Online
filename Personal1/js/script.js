//Otto Burroughs 1/16/2014 Expressions_Personal





//Calculate your Quetelet Index or (BMI)


var height = prompt("Enter your height in feet");//declaring the height value
var inches = prompt("Enter your remaining height in inches");//declaring the inches value
var mass = prompt("Enter your weight");//decelaring the mass (lbs) value
var totalHeight = height * 12 + inches;//setting
var bmiPercentage = mass / totalHeight;
var results = bmiPercentage;


alert("Your Quetelet Index is" + " " + results + "%" );


console.log(height);
console.log(inches);
console.log(mass);
console.log(totalHeight);
console.log(bmiPercentage);
console.log(results);
