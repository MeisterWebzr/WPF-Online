//Otto "Meister" Burroughs 1-22-2014 Conditional Personal


//Calculate your hours of work on projects per day
//Formula: workhours / amount of projects = timePerProject


var workHours, amountOfProjects, timePerProject;


	//Validating the amount of projects with the (while) function
	while (! (amountOfProjects > 0) ){
		
		//1st user prompt to enter amount of projects that need to be worked on
		amountOfProjects = prompt("Enter the amount of projects you need to work on today", " ");
	    console.log(amountOfProjects);
	}

    //Validating the amount of work hours user can work daily
    while (! (workHours > 0 ) ){

    	//2nd user prompt to enter amount of hours that user can work in a day
    	workHours = prompt("Enter the amount of hours you can work today", " ");
    	console.log(workHours);
    }


    //Calculating the results of the above prompts using expressions
    timePerProject = (workHours) / (amountOfProjects);
    


    	//Alert the user of the data input into the system
    	alert("You have" + " " + amountOfProjects + " "+ "projects" + " " + " & " + " " + "can work" + " " + timePerProject + " " + "hours on each of them");


    	//This line we will assign the above calcualtion to a conditional operator
    	if (amountOfProjects >= 1 && amountOfProjects <= 4)
    	
    	{	//alerting user that falls within the conditional statement of average work for a designer
            alert("Thats an average work load for a Web Designer & Developer")
    	}//Else if comaparison for amount of project  between 5 and 9
    	else if ( (amountOfProjects >= 5 && amountOfProjects <= 9) || (amountOfProjects >= 10 && amountOfProjects <= 19) )
    	{	//alert message to user asking question about the workload
    		alert("WoW! how do you work on so many projects by yourself? Hire some students! from Full Sail");
    	}
    	else //Else statement for amount of project  between 5 and 9
    	{	//Alert message for the insane condition statment of projects
    		alert("Thats an INSANE number of projects!");
    	}

//printing to console results of time per project that was calculated
 console.log(timePerProject);