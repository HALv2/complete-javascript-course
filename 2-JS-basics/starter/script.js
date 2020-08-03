/**********
 * Basic operators
 */
// var yer, yearJohn, yearMark
//  now = 2018;
// ageJhon = 28;
// ageMark = 33;

//  // Math operators
//  yearJohn = now - ageJhon;
//  yearMark = now - ageMark;

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// //Logical operators
// var johnOlder = ageJhon < ageMark;
// console.log(JohnOlder);

// //typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJhon);
// console.log(typeof 'Mark is older than Jhon');
// var x;
// console.log(typeof x);

// /**
// * Operator precedence
// */

// var now = 2018;
// var yearJhon = 1989;
// var fullAge = 18;

//Multiple operators
// var isFullAge = now - yearJhon >= fullAge;
// console.log(isFullAge);

//Groupijng
// var ageJhon = now - yearJhon;
// var ageMark = 35;
// var average = (ageJhon + ageMark) / 2;
// console.log(average);

//Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 + 6; // 8 * 4 - 6 // 32 - 7 // 26
// console.log(x, y);

// More opeartors
//  x = x * 2;
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

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

// var massMark = 78;
// var heightMark = 1.69;

// var massJhon = 92;
// var heightJhon = 1.95;

// var BMIMark = massMark / (heightMark^2);
// var BMIJhon = massJhon / (heightJhon^2);

// var markHigherBMI = BMIMark > BMIJhon;
// console.log('Is Mark\'s BMI higher than Jhon\'s? ' + markHigherBMI);

/*****
* If / else statementes
*/

// var fristName = 'Jhon';
// var civilStatus = 'married';

// if (civilStatus === 'married'){
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + 'will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried){
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + 'will hopefully marry soon :)');
// }

// var massMark = 78;
// var heightMark = 1.69;

// var massJhon = 92;
// var heightJhon = 1.95;

// var BMIMark = massMark / (heightMark^2);
// var BMIJhon = massJhon / (heightJhon^2);

// if (BMIMark > BMIJhon) {
//   console.log('Mark\' BMI is higher than Jhon\'s.');
// } else {
//   console.log('Jhon\' BMI is higher than Mark\'s.');
// }

/**
/* Boolean logic
*/

// var firstName = 'Jhon';
// var age = 16;

// if (age < 13) {
//   console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) { //Between 13 and 20  === age >= 13 AND age < 20
//   console.log(firstName + ' is a teenager.');
// } else if (age > 20 && age < 30) {
//   consle.log(firstName + ' is a young man.');
// } else {
//   console.log(firstName + ' is a man.');
// }

/**
*  The Ternaary Operator and Switch statements
*/

var firstName = 'Jhon';
var age = 16;

//Ternary opeartor
age >= 18 ? console.log(firstName + 'drinks beer.'):console.log(fristName + 'drinks juice.');

var drink = age >= 18 ? 'beer':'juice';
console.log(drink);

// if (age >= 18){
//   var drink = 'beer';
// }else{
//   var drink = 'juice'
// }

// Switch statement
var job = 'instructor';
switch(job){
  case 'teacher':
    console.log(firstName + 'teachers kids how to code.');
    break;
  case 'instrucor':
    console.log(firstName + ' .');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Lisbon.');
    break;
  case 'designer':
    console.log(firstName + 'designs beautiful websites.');
    break;
  default:
    console.log(firstName + 'does something else.');
}

age = 22;
switch (true) {
  case age < 13:
    console.log(firstName + 'is a boy.');
    break;
  case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
  case age > 20 && age < 30:
    consle.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}

/***
*Truthy and falssy values and equality operators 
*/

//falsy values : undefined, null, 0, '', NaN
//truthy vlues: Not falsy vlues

var height;

height = 23;

if(height || height === 0){
  console.log('Variable is defined');
} else{
  console.log('Variable has NOT been defined');
}

//Equality operators
if (height === '23') {
  console.log('The == operator does type coercion!');
}

/**
* CODING CHALLENGE 2
*/

/**
*Jhon and Mike both play basketball in different teams. In the latest 3 games, Jhon's team scored89,
*120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console.
Also include the average score in the output.
3. Then chagne the scores to show different winners.
Don't forgert to take into account there might be a draw
4. EXTra: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log 
the average winner to the console. HINT: you will need the && operator to take the decision. If you can"t
solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

*/

var scoreJhon = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97, 134, 105) / 3;

console.log(soreJhon, scoreMike, scoreMary);

if (scoreJhon > scoreMike && scoreJhon > scoreMary){
  console.log('Jhon\'s team wins with' + scoreJhon + ' points');
} else if (scoreMike > scoreJhon && scoreMike > scoreMary) {
  console.log('Mike\'s team wins with' + scorMike + ' points');
} else if (scoreMike > scoreJhon && scoreMary){
  console.log('Mike\'s team wins with' + scoreMary + ' points');
} else {
  console.log('There is a draw');
}

// if (scoreJhon > scoreMike) {
//   console.log('Jhon\'s team wins with ' + scoreJhon + ' points');
// } else if (scoreMike > scoreJhon) {
//   console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else {
//   console.log('There is a draw');
// }

/****
* Function
*
*/

function calculateAge(birthYear){
  return 2018 - birthYear;
}

var ageJhon = calculateAge(1990);
consle.log(ageJhon);