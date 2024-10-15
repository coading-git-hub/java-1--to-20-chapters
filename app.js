             ////CHAPTER 1 (ALERT)////

/////////1. Write a script to greet your website visitor using JS alertbox.

// alert("Welcome to our website! We hope you have a great experience.");  

////////////2. Write a script to display following message on your webpage:

// alert("Error! Please enter a valid password.");

/////////////3. Write a script to display following message on your web
/////////page: (Hint : Use line break)////////////

// alert("Welcome to JS land... \n Happy coading!");

/////////4. Write a script to display following messages in sequence:////

// alert("Welcome to JS lannd..");
// alert("Happy coading!\nprevent this page from creating additional dialogs");

//////////5. Generate the following message through browser’s developer console:

// console.log("Hello! I can run JS through my web browser's console.");

//////////////CHAPTER 2 (VARIABLE FOR STRING)////////

// 1. Declare a variable called username.
// 2. Declare a variable called myName & assign to it a string 
// that represents your Full Name.

// var username
// var myName = "KIRAN AHMED";

///3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// var message ="Hello World";
// alert(message);

////4. Write a script to save student’s bio data in JS variables and show the data in alert boxes

// var stdData ="kiran";
// alert(stdData)
// stdData="20 years";
// alert(stdData);
// stdData = "Citified Mobile Application Development";
// alert(stdData);

/////5. Write a script to display the following alert using one JS variable:

// var variable = "pizza\npizz\npiz\npi\np";
// alert(variable);

/////6. Declare a variable called email and assign to it a string that 
// represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use 
// string concatenation)

// var email = "example@example.com";
// alert("My email address is" + " " + email);

///7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box

// var book = "A smart way to learn JavaScript.";
// alert("I am trying to learn from the Book" + " "+ book);

///8. Write a script to display this in browser through JS

// document.write("Yah! I can write HTML contant through Java Script.");

// 9. Store following string in a variable and show in alert and 
// browser through JS
// alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");

/////////CHAPTER3 (VARIABLES FOR NUMBERS)////

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// var age = 30;
// alert("I am" +" "+ age+ " "+"years old" )

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// var num = 14;
// alert("You have visited this site" + " "+ num + " "+ "time.");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
//  var birthYear = 1990;
//  document.write("My birthday year is"+ " " + birthYear +"</br> data type of my declard variable is Number");

 ////4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var visName = "John Doe";
// var proTital = "T-shirt";
// var quentity = 5;
// document.write(visName + " " + "ordered" + " " + quentity + " "+proTital + " " + "on XYZ Clothing store." )


////chapter 4 (VARIABLE NAMES: LEGAL & ILLEGAL)

// 1. Declare 3 variables in one statement.
// 2. Declare 5 legal & 5 illegal variable names.
// 3. Display this in your browser
// a) A heading starting “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS ________

// / 1. Declare 3 variables in one statement
        var var1, var2, var3;

        // 2. Declare 5 legal and 5 illegal variable names
        // Legal variable names
        // var $name;
        // var _age;
        // var myVar;
        // var myVariable1;
        // var first_name;

        // Illegal variable names (Uncomment to see errors)
        // var 1stVar;   // Starts with a number
        // var my-variable;  // Contains hyphen
        // var var!;  // Contains special character
        // var true;  // JS reserved keyword
        // var my var;  // Contains space

        // 3. Display rules in the browser
        
            // document.write("<h1>Rules for naming JS variables</h1>");
            // document.write("Variable names can only contain letters, numbers, dollar signs ($), and underscores (_). For example: <strong>$my_1stVariable</strong>.<br>");
            // document.write("Variables must begin with a letter, dollar sign ($), or underscore (_). For example: <strong>$name</strong>, <strong>_name</strong>, or <strong>name</strong>.<br>");
            // document.write("Variable names are case <strong>sensitive</strong>.<br>");
            // document.write("Variable names should not be JS <strong>keywords</strong>.");
        

            ///CAPTER 5 (MATH EXPRESSIONS)

//  1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
// var num1 = 3;
// var num2 = 5;
// var total = num1 + num2;
// document.write("Sum of" + " "+ num1 + " "+ "and" + " "+ num2 + " "+ "is" + " "+ total+"</br>");


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
//subtract
// var num1 = 3;
// var num2 = 5;
// var sub = num1 - num2;
// document.write("subtract of" + " "+ num1 + " "+ "and" + " "+ num2 + " "+ "is" + " "+ sub+"</br>");

//multiplication//
// var num1 = 3;
// var num2 = 5;
// var total = num1 * num2;
// document.write("Multiply of" + " "+ num1 + " "+ "and" + " "+ num2 + " "+ "is" + " "+ total+"</br>");

//division//
// var num1 = 3;
// var num2 = 5;
// var total = num1 / num2;
// document.write("Divived of" + " "+ num1 + " "+ "and" + " "+ num2 + " "+ "is" + " "+ total+"</br>");

//modulus//
// var num1 = 3;
// var num2 = 5;
// var total = num1 % num2;
// document.write("Modulus of" + " "+ num1 + " "+ "and" + " "+ num2 + " "+ "is" + " "+ total+"</br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.
// a b
// var value 
// document.write("Value after variable declaration is:" + value + "</br>");
// c d
// var num = 5;
// document.write("Initial value:" + num + "</br>");
// e f
// var num1 = 5;
// var num2 = 1;
// var total = num1 + num2;
// document.write("Value after increment is:" + total + "</br>");
// g h
// var num3 = 7;
// var add = total + num3;
// document.write("Value after addition is:" + add + "</br>");
// i j
// var num4 =1;
// var sub = add - num4 ;
// document.write("Value after decrement is:" + sub + "</br>");
// k l
// var num5 = 3;
// var mod = sub % num5;
// document.write("The remainder is :" + mod );

// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output

// var cot = 600;

// var totalCost = cot * 5;
// document.write("Total cost of 5 tickets to a movie is" +" "+ totalCost+"PKR")

// 5. Write a script to display multiplication table of any 
// number in your browser
 
// document.write("<div> <h1>TABLE OF 4</h1></div>")
// for( var i = 1 ; i <= 10 ; i++){
//     document.write("4 x " + i + "= " + (4 * i) + "</br>");
// }
//6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// a. Store a Celsius temperature into a variable
// var celsius = 30; 

// b. Convert Celsius to Fahrenheit
// var fahrenheitFromCelsius = (celsius * 9/5) + 32;

// Output the result
// document.write(celsius + "C is " + fahrenheitFromCelsius + "F</br>");

// c. Now store a Fahrenheit temperature into a variable
// var fahrenheit = 86; 

// d. Convert Fahrenheit to Celsius
// var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;

// Output the result
// document.write(fahrenheit + "F is " + celsiusFromFahrenheit + "C");



// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var poi1 = 650;
// var poi2 = 100;
// var qoi1 = 3;
// var qoi2 = 7;
// var shipCharg = 100;
// var total =( poi1 * qoi1) + (poi2 * qoi2)+ shipCharg;
// document.write("<div><h1>SOPPING CART</h1></div>")
// document.write("price of item 1 is"+poi1+"</br>"+ "Quantity of items is" +qoi1 +"</br>"+"price of item 2 is" + poi2 + "</br>" + "Quantity of item 2 is"+qoi2 + "</br>" +"Shipping Charges" + shipCharg  +"</br>"+"Total cost of order is"+ total)

//8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser.

// document.write("<h1> MARKS SHEET</h1>")
// / Store total marks and marks obtained in variables
        // var totalMarks = 500; 
        // var marksObtained = 420; 

        // Compute the percentage
        // var percentage = (marksObtained / totalMarks) * 100;

        // Display the result in the browser
        // document.write("Total marks :" + totalMarks +"</br>"+ " Marks obtain :" + marksObtained  + "</br>"+" The percentage is: " + percentage + "%");

//9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)
// var usd = 10;
// var sr = 25;
// var pakTousd = 104.80;
// var pakTosr = 28;
// var totalPkr = (pakTousd * usd) + (pakTosr * sr);
// document.write("Total curruncy in PKR :" + totalPkr)

// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var total = 2 + 5 * 10 / 2;
// document.write("total is :"+total);

// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
// document.write("<h1> AGE CALCULATOR </h1></br>")
// var currentYear = 2024;
// var birthYear = 1980;
// var age1 = currentYear - birthYear;
// var age2 = age1 -1;
// document.write("Current year : " + currentYear + "</br>" + "Birth Year :" + birthYear + "</br>" + "Your age is :" + age1+" " + "or"+" " + age2)


///////////////CHAPTER 11 - 13 ///////////

// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).
// Take input from the user
// let input = prompt("Enter a character:");

// Get the ASCII code of the input character
// let asciiCode = input.charCodeAt(0);

// Check if input is a number
// if (asciiCode >= 48 && asciiCode <= 57) {
//     document.write(input + " is a number.");
// }
// Check if input is an uppercase letter (ASCII codes for A-Z are 65-90)
// else if (asciiCode >= 65 && asciiCode <= 90) {
//     document.write(input + " is an uppercase letter.");
// }
// Check if input is a lowercase letter (ASCII codes for a-z are 97-122)
// else if (asciiCode >= 97 && asciiCode <= 122) {
//         document.write(input + " is a lowercase letter.");
// }
// If none of the above conditions are met
// else {
//         document.write(input + " is neither a number nor a letter.");
// }

///////////////////////////////////////////////////////////////////////////
//2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var num1 = +prompt("Enter the first number")
// var num2 = +prompt("Enter the second number")
// if( num1 > num2){
//         document.write(num1 + " "+"is a larger")
// }else if(num2 > num1 ){
//         document.write(num2 + " "+ "is a larger")
// }else(document.write("both numbers are equal"))
////////////////////////////////////////////////////////////////////////////////
// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

// var input = +prompt("Enter the number");
// if( input > 0){
//         document.write(input +" "+ "is a positive number")
// }else if( input < 0 ){
//         document.write(input +" "+ "is a negative number")
// }else(document.write("its a zero"));
//////////////////////////////////////////////////////////////////////////////////////
// 4. Write a program that takes a character (i.e. string of 
//         length 1) and returns true if it is a vowel, false otherwise
//     var char = prompt("Enter the character") .toLowerCase()
// var vowel = ["a","e","i","o","u"]
// if(vowel.includes(char)){
//         document.write("True! its a vowel")
// }else(document.write("False! its not a vowel"))
/////////////////////////////////////////////////////////////////////////////////////
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise

// var passWord = 123456;
// var usrPassword = +prompt("Enter your password")
// if (!usrPassword) {
//         document.write("Please enter your password.")}
//  else if ( usrPassword === passWord){
//         document.write("Correct! The password you  entered matches the original password")
// }else{document.write("Incorrect password")}

//////////////////////////////////////////////////////////////////////////////

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
// var  greeting;
// var hours =  +prompt("Enter the hour")
// var hour = 13;
// if (hours < 18) {
// document.write(greeting = "Good day");}
// else{
// document.write(greeting = "Good evening")
// }

/////////////////////////////////////////////////////////////////////////////

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements

// var time = +prompt(" Enter time in 24-hour format (e.g., 1900):");
 // Convert the input into an integer
// time = parseInt(time);

// Check if the input is a valid time
// if (isNaN(time) || time < 0 || time > 2359 || time % 100 >= 60) {
//     document.write("Invalid time format. Please enter a valid time.");
// } else if (time >= 0 && time < 1200) {
//         document.write ("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//         document.write("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//         document.write("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//         document.write("Good night!");
// } else {
//         document.write("Invalid time input.");
// }

///////////////////////////////////////////////////////////////////////////////

////////////Assignment # 14-16 JAVASCRIP ////////////////////////////////

// 1. Declare an empty array using JS literal notation to store
// student names in future.
// 2. Declare an empty array using JS object notation to store
// student names in future.
// 3. Declare and initialize a strings array.
// 4. Declare and initialize a numbers array.
// 5. Declare and initialize a boolean array.
// 6. Declare and initialize a mixed array.
// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 

// var strArr = ["Amna"," Ana", "Ambreen","Arifa"];
// var numArr =[1,2,3,4,5];
// var boolArr =[ "true", "false","yes","no"]
// var mixArr =["Kiran", 40 , "true"];
// document.write("<h1> QUALIFICATIONS </h1></br>")
// var eduQualification =["SSC", "HSC" , "BSC","BS","BCOM","MS","M. Phil","PHD"]
// for(var i =0 ; i <= eduQualification.length ; i ++){
// document.write(eduQualification[i] + "</br>")};

/////////////////////////////////////////////////////////

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student,

//  var stdName =["AHMED","ALI","HAIDER"];
//  var score =[320 ,230 , 480];
//  var total = 500;
//  for( var i = 0 ; i < stdName.length; i++){
//       for( var j =i ; j< score.length; j++){
//         if (i === j){
//         document.write("Score of " +" " + stdName[i] +" "  + "is" + " " + score[j]+ " " +  "Percentage is :" + " " +(score[j] / total) * 100 + "%" + "</br>"  )}
//  }}

 /////////////////////////////////////////////////////////////

//  9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["RED" , "YELLOW ","GREEN","BLUE"]
// var stColor = prompt("What color you want to add to the biggining?")
// colors.unshift(stColor.toUpperCase());
// document.write(colors);
// var endColor = prompt("what color you wants to add to the end ?");
// colors.push(endColor.toUpperCase())
// document.write(colors);

//////////////add two colors in bigginig////////
// colors.unshift("ORANGE","GRAY");
// document.write(colors)

/////////delete last color//////////
// colors.pop()
// document.write(colors)

////////add with prompt in index ///////
// var indexColor = parseInt(prompt("which index you wants to add a color"));
// var addColor = prompt("Enter color name to add");
// colors.splice(indexColor, 0 , addColor.toUpperCase())
// document.write(colors)

///////////////////////remove index color & colors/////////

// var delIndex = parseInt(prompt("At which index do you want to delete colors?"))
// var delCount = parseInt(prompt("how many colors do you want to delete")) 
// colors.splice(delIndex,delCount)
// document.write(colors);

//////////////////////////////////////////////////////////////////

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

// var stdScore = [120 ,455,502,745,340]
// stdScore.sort()
// document.write(stdScore)

/////////////////////////////////////////////////////////////////

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array

// var cities = ["KARACHI", "LAHRE","PESHAWAR","QUETA","ISLAMABAD"]
// var selesctedCities = cities.slice(3)
// document.write(selesctedCities)

//////////////////////////////////////////////////////////////////

// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This"," ", "is"," ", "my"," ", "cat"];
// var joinArr = arr.join("");
// document.write(joinArr);

/////////////////////////////////////////////////////////////////////////

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)
//////////////store values one by one ///////////
// var array = []
// array.push("keyboard");
// array.push("mouse")
// array.push("printer")
// array.push("monitor")
/////////access the values in the order //////////////////
// document.write("<h1> Devices </h1></br>")
// document.write(array.shift() + "</br>")
// document.write(array.shift() + "</br>")
// document.write(array.shift() + "</br>")
// document.write(array.shift() + "</br>")

///////////////////////////////////////////////////////////////////////////////////

//14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First Out)

// var array = []
// array.push("keyboard");
// array.push("mouse")
// array.push("printer")
// array.push("monitor")

////////////// access the values in reverse order. (Last In-First Out)

// document.write("<h1> Devices </h1></br>")
// document.write(array.pop(4) + "</br>")
// document.write(array.pop(3) + "</br>")
// document.write(array.pop(2) + "</br>")
// document.write(array.pop(1) + "</br>")

//////////////////////////////////////////////////////////////////////////////////////////

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method

// var phones =["Apple","Samsung","Motorola","Nokia","Sony & Haier"]
// Start creating the dropdown menu
// document.write("<select>");

// for (let i = 0; i < phones.length; i++) {
//    document.write("<option value ='" + phones[i] +"'>" + phones[i] +"</option>")
// }
// document.write("</select>");

////////////////////////////////////Assignment # 17-20 ///////////////////////////////////////

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var emptyArray =[[]]

// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

// var multiArray =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

///////////////////////////////////////////////////////////////////////////////

// 3. Write a program to print numeric counting from 1 to 10.

// for( var i = 1 ; i<=10 ; i++){
        // document.write(i+ "</br>")
// }
/////////////////////////////////////////////////////////////////////////////////////

// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.
// var start = +prompt("Enter start number")
// var endNum = +prompt("Enter a ending number ")
// var tableOf = +prompt("Enter  table")

// for(var i = start ; i <= endNum ; i++){
        
// document.write(tableOf + "x" + i + "=" + tableOf * i +"</br>" )
//  }

/////////////////////////////////////////////////////////////////////////////

//  5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// var fruits =["apple", "banana", "mango", "orange", "strawberry"]
// for(var i = 0 ; i<=fruits.length-1 ; i++){
//         document.write("Element at index"+" " + i+" " +" " +"is"+" " + fruits[i]+" " + "</br>")
// }

//////////////////////////////////////////////////////////////////////////////////////////////

// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
 ////////////counting//////////
//  document.write("Counting :</br>")
// for(var i = 1 ; i <= 10 ; i++){
//         document.write( i + " ")
// }
// document.write("</br>")
/////////////reverse counting////////////
// document.write("Reverse counting :</br>")
// for( var i = 10 ; i >= 1 ; i--){
//         document.write( i +" ")
// }
// document.write("</br>")
/////////////////////Even numbers //////////////
//  document.write("Even numbers :</br>")
//  for( var i = 0 ; i <= 20 ; i++ ){
//         if(i % 2 === 0){
//                 document.write(i +" ")}
//  }document.write("</br>")
 ////////////////////odd numbers /////////////

//  document.write("Odd numbers :</br>")
//  for( var i = 0 ; i <= 20 ; i++ ){
//         if(i % 2 !== 0){
//                 document.write(i +" ")}
//  }document.write("</br>")

 ///////////Series //////////////////
//  document.write("Series :</br>")
// for(var i = 2; i <= 20 ; i+= 2){
//         document.write( i +"k,")
// }document.write("</br>")

//////////////////////////////////////////////////////////
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example
//   var A = ["cake", "apple pie”", "cookie", "chips", "patties"];
//   var userItem = prompt("Welcome to ABC bakery. What do you want to order sir/ ma'am ")
//    var flag = "No"
//   for( var i =0 ; i<=userItem.length-1 ; i++){
       
//        if( userItem === A[i]){
//         flag = "Yes";
//         alert(userItem +" " + "is available in index" +" " + [i]+ " " +"in our bakery")
//        break;
// }
//   }
//   if(flag === "No"){
//   alert("Sorry "+" " + userItem +" " +" is not available")
// }
   
  /////////////////////////////////////////////////////////////////////////////

//   8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]
// var A = [24, 53, 78, 91, 12]
// var largest = Math.max(...A)
// document.write("The largest number is :" + largest);

///////////////////////////////////////////////////////////////////////////
// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

// var A = [24, 53, 78, 91, 12]
// var smallest = Math.min(...A)
// document.write("The smallest number is :" + smallest);

/////////////////////////////////////////////////////////////////////////////////

// 10. Write a program to print multiples of 5 ranging 1 to 
// 100

for( var i = 5 ; i<=100 ; i+=5){
        document.write(i + ",")
}

//////////////////////////////// END CHAPTER 1 TO 20 //////////////////////////////////////