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
    while(! (workHours > 0 ) ){

    	//2nd user prompt to enter amount of hours that user can work in a day
    	workHours = prompt("Enter the amount of hours you can work today", " ");
    	console.log(workHours);
    }

    