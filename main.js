// !<------STRINGS METHOD-------->
let myString = "My name is Hassan";
let myString2 = "I am from FSD";
console.log(myString.length);
console.log(myString.concat(" ", myString2));
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.includes("name"));
console.log(myString2.indexOf("a"));
console.log(myString2.replace("FSD", "LHR"));
let myString3 = "               This is my third string       ";
console.log(myString3.trim());

let myString4 = "My name is Hassan gulzar";
let myString5 = myString4.split("");
console.log(myString5.reverse());
console.log(myString5.join(""));

//                        <-------------------------------------------->

//! <------NUMBERS-------->

// Write a js program to calculate the power of a number.
let num1 = 11;
let num2 = 21;

// Write a js program to find the sum of two numbers.
console.log(num1 + num2);

// Write a js program to find the difference between two numbers.
console.log(num1 - num2);

// Write a js program to find the product of two numbers.
console.log(num1 * num2);

// Write a js program to find the quotient and remainder of two numbers.
console.log(Math.round(num1 / num2));

// Write a js program to round a number to the nearest integer.
console.log(Math.random());

// Write a js program to generate a random number between 0 and 1.
console.log(Math.min(num1, num2));

// Write a js program to find the maximum and minimum of two numbers.
console.log(Math.max(num1, num2));

// Write a js program to calculate the square root of a number.
console.log(Math.sqrt(num1));

// Write a js program to calculate the absolute value of a number.
console.log(Math.abs(num2));

//                        <-------------------------------------------->

// !<------DATE METHODS-------->

let date = new Date();
// Write a js program to get the current date and time.
console.log(date);

// Write a js program to get the current year.
console.log(date.getFullYear());

// Write a js program to get the current month.
console.log(date.getMonth() + 1);

// Write a js program to get the current day of the week.
console.log(date.getDay() + 1);

// Write a js program to add a specific number of days to a date.
let addDays = 5;
console.log(date.getDate() + addDays);

// Write a js program to subtract a specific number of days from a date.
let subtractDays = 2;
console.log(date.getDate() - subtractDays);

// Write a js program to get the time in milliseconds.
console.log(date.getTime());

// Write a js program to get the hours, minutes, and seconds from a date object.
console.log(date.getHours(), date.getMinutes(), date.getSeconds());

// Write a js program to create a new date object with a specific year, month, and day.
let myNewdate = new Date(2044, 2, 11);
console.log(myNewdate);

// Write a js program to compare two dates.
let date1 = new Date(2023, 3, 11);
let date2 = new Date(2023, 3, 11);
if (date1 > date2) {
  console.log("Date 1 is bigger than Date 2");
} else if (date1 < date2) {
  console.log("date 1 is smaller than date 2");
} else {
  console.log("both are equal");
}

//                        <-------------------------------------------->

//! <------MATH METHODS-------->
// Write a js program to find the absolute value of a number.
console.log(Math.abs(-10));

// Write a js program to find the highest value in a list of numbers.
console.log(Math.max(10, 33, 51, 2));

// Write a js program to find the lowest value in a list of numbers.
console.log(Math.min(33, 245, 3, 634, 4));

// Write a js program to round a number up to the nearest integer.
console.log(Math.ceil(4.4265464));

// Write a js program to round a number down to the nearest integer.
console.log(Math.floor(3.3452435));

// Write a js program to calculate the exponential value of a number.
console.log(Math.exp(1));

// Write a js program to calculate the natural logarithm of a number.
console.log(Math.log(2));

// Write a js program to calculate the sine of an angle in radians.
console.log(Math.sin(Math.PI / 4));

// Write a js program to calculate the cosine of an angle in radians.
console.log(Math.cos(Math.PI / 4));

// Write a js program to calculate the square root of a number.
console.log(Math.sqrt(25));

//                        <-------------------------------------------->

//! <------For loop-------->
// Write a program that uses a for loop to print the numbers from 1 to 10.
for (let i = 0; i < 11; i++) {
  console.log(i);
}

// Write a program that uses a for loop to print the elements of an array.
let myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Write a program that uses a for loop to calculate the factorial of a number.
// let number = Number(prompt("Factorial"));
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//   console.log((factorial *= i));
// }

// Write a program that uses a for loop to generate a multiplication table for a given number.
// let multiplicationTable = Number(
//   prompt("Enter a number to get a multiplication table")
// );
// for (let i = 0; i < 11; i++) {
//   console.log(multiplicationTable * i);
// }

// Write a program that uses a for loop to find the sum of all even numbers from 1 to 100.
// for (let i = 1; i <= 3; i++) {
//   if (i % 2 == 0) {
//     console.log(i + i);
//   }
// }