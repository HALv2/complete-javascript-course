/**********
 * Basic operators
 */
var yer, yearJohn, yearMark
 now = 2018;
ageJhon = 28;
ageMark = 33;

 // Math operators
 yearJohn = now - ageJhon;
 yearMark = now - ageMark;

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJhon < ageMark;
console.log(JohnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJhon);
console.log(typeof 'Mark is older than Jhon');
var x;
console.log(typeof x);

/**
* Operator precedence
*/

var now = 2018;
var yearJhon = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJhon >= fullAge;
console.log(isFullAge);

//Groupijng
var ageJhon = now - yearJhon;
var ageMark = 35;
var average = (ageJhon + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 + 6; // 8 * 4 - 6 // 32 - 7 // 26
console.log(x, y);

// More opeartors
//  x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);

/********
* CODING Challenge 1
* 
*/

/*
Mark and Jhon are trying to compare their BMI, which is calculated using the formula:
MBI = mass / height^2 = mass / (height * height).

1. Store Mark's and Jhon's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variables containing information about ehather Mark has a higher BMI than Jhon 
4. Print a string to the console containing the variable from step 3.
*/

var massMark = 78;
var heightMark = 1.69;

var massJhon = 92;
var heightJhon = 1.95;

var BMIMark = massMark / (heightMark^2);
var BMIJhon = massJhon / (heightJhon^2);

var markHigherBMI = BMIMark > BMIJhon;
console.log('Is Mark\'s BMI higher than Jhon\'s? ' + markHigherBMI);

/*****
* If / else statementes
*/

var fristName = 'Jhon';
var civilStatus = 'single';

if ()