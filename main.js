// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.

var divideByTwo = function (number){
	
	console.log(number/2);
};

console.log("");
console.log("Question 1");
divideByTwo(12000);


// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.

var greeting = function (name1, name2){

	console.log("Hello " + name1 + " and " + name2 + "!");	
	
};

console.log("");
console.log("Question 2");
greeting('Phil', 'Josh');

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.


var totalPrice = function (ppu){
	
	console.log("The total cost this month is " + (ppu * 6) + " dollars");
};

console.log("");
console.log("Question 3");
totalPrice(10);

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      
var team1 = [];
var team2 = [];

var chooseTeams = function (teammates){


for (i = 0; i < teammates.length; i+=2){
	
	team1[i] = teammates[i];
	console.log(team1);
}

for (i = 1; i < teammates.length; i+=2){
	
	team2[i] = teammates[i];
	console.log(team2);
}
};

var team = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"];

console.log("");
console.log("Question 4");
chooseTeams(team);
      
     

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

var quarter = function (number){
	
	console.log("A quarter of " + number + " is " + number/4);
};

console.log("");
console.log("Question 5");
quarter(100);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

var area = function (lengthy, widthy){
	
	console.log("the area of the rectangle is " + lengthy * widthy);
};

var perimeter = function (length, width){
	
	console.log("the perimeter of the rectangle is " + (2*length + 2*width));
};

console.log("");
console.log("Question 6");

var inputLength = 6;
var inputWidth = 8;

area(inputLength, inputWidth);
perimeter(inputLength, inputWidth);


// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

console.log("");
console.log("Question 7");


var sleepings = function (hours){
	if (hours > 8){
		console.log("YAAY ENOUGH SLEEP!");
	}
	else {
		console.log("SLEEP MORE :(");
	}
};

sleepings(4);


// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer. 
//          Note: Strings can be treated as arrays too.

console.log("");
console.log("Question 8");


var addNums = function (numberInputted){
	
	var threeDig = prompt("Please enter a 3 digit number!");
	var digone = Math.floor((threeDig/100));
	var digtwo = Math.floor(((threeDig - digone*100)/10));
	var digthree = (threeDig - digone*100 - digtwo*10);
	console.log(digone);
	console.log(digtwo);
	console.log(digthree);
	console.log(digone + digtwo + digthree);
};

addNums();

// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.

var piggyCounter = function (quarters, dimes, nickels, pennies){
	var qVal = quarters*.25;
	var dVal = dimes*.1;
	var nVal = nickels*.05;
	var pVal = pennies*.01;
	var totalVal = qVal + dVal + nVal + pVal;
	console.log("Congrats! You've saved up $" + totalVal.toFixed(2));
};

console.log("");
console.log("Question 9");
piggyCounter(2,2,3,4);

// 10. Develop a function that determines a person's age by prompting them for their birth year.

console.log("");
console.log("Question 10");

var bday = prompt ("Whens your day?");
//console.log(bday.getFullYear());

console.log(new Date());


// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

console.log("");
console.log("Question 11");

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.

var arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"];
       
var checkArray = function (array1){
	
	for (i=0; i < array1.length; i++){
		if (isNaN(array1[i]) == 1){
			console.log(array1[i] + " is not a number");
		} else {
			console.log(array1[i] + " is a number");
		}
	}
};

console.log("");
console.log("Question 12");
checkArray(arrayOfAllTheThings);

// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.


// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

// Extra Challenge: 
// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.
