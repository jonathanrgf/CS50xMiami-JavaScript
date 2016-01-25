/*
0. The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?
- Store the following into variables:
  number of children, partner's name, geographic location, job title.
- Output your fortune to the screen like so:
  "You will be a X in Y, and married to Z with N kids."
*/
document.getElementById("teller").addEventListener("click", function(){

	// Prompt user for name and store it on name variable
	var name = prompt("Please enter your name");
	// Promt user for gender until they put male or female
	var gender;
	do {
		gender = prompt("Hi " + name + ". Please tell me your gender 'female' or 'male'");
	} while (!((gender == "female") || (gender == "male")));


	

	// create associative array of random female and male names
	var fortune = {
		'female': ["Kianna", "Jennifer", "Samantha", "Amanda", "Kayleigh", "Avery", "Azaria", "Nydia", "Rima", "Lily", "Jessica", "Karen"],
		'male': ["Jonathan", "Christopher", "Kenneth", "Saulo", "Alan", "Daniel", "Julian", "Krysttian", "Juan", "Edian", "Jorgue", "Tomas", "Vanesa", ""],
		'location': ["Canada", "Australia", "United States of America", "Sweden", "Mexico", "England", "Norway", "Germany", "Japan", "China", "New Zealand"],
		'job': ["Software Developer", "Network Admin.", "Computer Engineering", "Doctor of Veterinary Medicine", "Recreation attendant Supervisor", "Pediatric Registered Nurse", "Director of Civil Defence", "Switchbox Assembler", "Grill Cook", "Airline Pilot Flight Instructor", "Internet Application Developer", "Geological Sample Tester", "Building Architect"]
	}

	// assing number of female names to variable
	var femaleSize = fortune['female'].length -1
	// assing number of males names to variable
	var maleSize = fortune['male'].length -1
	// assing number of males locations to variable
	var locationSize = fortune['location'].length -1
	// assing number of males names to variable
	var jobSize = fortune['job'].length -1

	// declare variable for parner
	var partner;

	// assign parner name based on user input 'female' or 'male'
	if(gender == "male") {
		partner = fortune['female'][Math.floor(Math.random() * (femaleSize - 0 + 1)) + 0];
	}
	else if (gender == "female") {
		partner = fortune['male'][Math.floor(Math.random() * (maleSize - 0 + 1)) + 0];
	}

	// assing variable for random job
	var job = fortune['job'][Math.floor(Math.random() * (jobSize - 0 + 1)) + 0];
	// assign variable for location
	var location = fortune['location'][Math.floor(Math.random() * (locationSize - 0 + 1)) + 0];
	// assign a random number between 0 and 10 to number of children
	var childrenNumber = Math.floor(Math.random() * 10) + 1;

	// save fortune into a variable
	yourFortune = "Zoltar Speaks.\n" + name + " you will be a " + job + " in " + location + ", and married to " + partner + " with " + childrenNumber + " kids.";

	// Display fortune to user and console log it
	alert(yourFortune);
	console.log(yourFortune);
});



/*
1. The Age Calculator
Forgot how old someone is? Calculate it!
- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/
document.getElementById("age").addEventListener("click", function(){
   // store current year
   var currentYear = new Date().getFullYear();
   // prompt user for the birth year
   var birthYear = prompt("Please enter your birth year");

   // calculate their age
   var age = currentYear - birthYear;

   // store string to display user
   var userAge = "You are " + (age - 1) + " or " + age + " years old.";

   // log user age and display it.
   console.log(userAge);
   alert(userAge);
});

/*
2. The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/
document.getElementById("lifetime").addEventListener("click", function(){
   // store name of snack they want to calculate
	var snack = prompt("Please Enter the name of the snack you want to calculate the life time supply");

   // store current users age into a variable
   var age = prompt("Please enter you age");

   // store users max age expectancy into a variable
   var maxAge = prompt("How old do you think you will be when you die?");

   // store a user estimation of a snack ammount per day
   var dailyAmount = prompt("How many " + snack + " do you consume daily.");

   // calculate the number of days and assing it to var
   var diffDays = (maxAge - age) * 365;
   // calculate number of snacks needed
   var totalSnack = diffDays * dailyAmount;
   // store message to user
   var lifeSupply = "You will need " + totalSnack + " " + snack + " for a lifetime suppply.";
   // log message and display it to user
   console.log(lifeSupply);
   alert(lifeSupply);
});

/*
3. The Geometrizer
Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm
- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/
document.getElementById("geometrizer").addEventListener("click", function(){
   // prompt user for radius of a circle
   var radius = prompt("Enter radius of a Circle");

   // calculate and store circumference on variable
   var circumference = 2 * Math.PI * radius;

   // calculate and store the area on a variable
   var area = Math.PI * Math.pow(radius, 2);

   // store strings to allert
   var message1 = "The circumference of circle is " + circumference + ".";
   var message2 = "The area of circle is " + area + ".";

   // log messages and alert user
   console.log(message1 + "\n" + message2);
   alert(message1 + "\n" + message2);


});

/*
4. The Temperature Converter
It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/
document.getElementById("temperature").addEventListener("click", function(){
   
   // promt user F to C or C to F

   var cf = confirm("Do you want to convert celsius to farenheit?");
   if (cf == false) {
		var fc = confirm("Do you want to convert farenheit to celsius?");
	}
	if (cf == true) {
		// prompt user for temp
		var temp = prompt("Please enter temperature in Celsius");
		// calculate temp in farenheit
		var convertedTemp = ((temp * 9) / 5) + 32
		// store message to display to user on variable
		var message = temp + " Celsius is " + convertedTemp + " Farenheit"
		// display convertion to user
		alert(message);
		console.log(message);
	}
	if (fc == true) {
		// prompt user for temp
		var temp = prompt("Please enter temperature in Celsius");
		// calculate temp in farenheit
		var convertedTemp = ((temp - 32) * 5) / 9;
		// store message to display to user on variable
		var message = temp + " Farenheit is " + convertedTemp + " Celsius"
		// display convertion to user
		alert(message);
		console.log(message);
	}
	if ((fc == false && cf == false)){
		alert("Why did you Select the Temperature Converter application!!!!!!!!???");
		console.log("Why did you Select the Temperature Converter application!!!!!!!!???");
	}
});