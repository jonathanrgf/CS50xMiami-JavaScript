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
		'female': ["Kianna", "Amanda", "Kayleigh", "Avery", "Azaria", "Nydia"],
		'male': ["Jonathan", "Christopher", "Kenneth", "Saulo", "Alan"],
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
   alert("Hello world");   
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
   alert("Hello world");   
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
   alert("Hello world");   
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
   alert("Hello world");   
});