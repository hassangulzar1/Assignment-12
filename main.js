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

//   !                     <-------------------------------------------->

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

// !                       <-------------------------------------------->

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

//!                        <-------------------------------------------->

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

// !                       <-------------------------------------------->

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
let evenNumber = 100;
let sum = 0;
for (let i = 0; i <= evenNumber; i++) {
  if (i % 2 == 0) {
    console.log((sum += i));
  }
}

//    !                    <-------------------------------------------->

//! <------While loop-------->
// Write a program that asks the user to enter a number and then prints out all the odd numbers up to that number.
// let askNumber = Number(prompt("Enter a number..."));
// let i = 0;
// while (i <= askNumber) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
//   i++;
// }

// Write a program that asks the user to enter a number and then prints out the multiplication table for that number, up to 10.
// let askFortable = Number(
//   prompt("Enter a number to get the multiplication table")
// );
// let i = 1;
// while (i <= 10) {
//   console.log(askFortable * i);
//   i++;
// }

// Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number.
// let randomNumber = Math.floor(Math.random() * 100);
// let guessNumber;
// while (randomNumber != guessNumber) {
//   guessNumber = Number(prompt("Guess number between 1 to 100"));
//   if (randomNumber == guessNumber) {
//     alert(`congradulation Number is ${randomNumber}`);
//     break;
//   } else if (randomNumber > guessNumber) {
//     alert(`the number is larger then ${guessNumber}`);
//   } else if (randomNumber < guessNumber) {
//     alert(`The number is Smaller then ${guessNumber}`);
//   } else {
//     alert("invalid number");
//   }
// }

// Write a program that asks the user to enter a word and then prints out the word in reverse order.
// let word = prompt("Enter a word");
// let i = 0;
// while (i < 1) {
//   alert(word.split("").reverse().join(""));
//   i++;
// }

// Write a program that asks the user to enter a series of numbers and then finds the sum and average of those numbers.
// let number = Number(prompt("Enter how many numbers you want to add"));
// let sum1 = 0;
// let n = 1;
// while (n <= number) {
//   let num1 = Number(prompt("enter the number"));
//   sum1 += num1;
//   n++;
// }
// alert(`You add ${number} numbers Your all Numbers average is  ${sum1}`);

// !                       <-------------------------------------------->

//! <------do While loop-------->
// Write a program that asks the user to enter a password. Keep asking the user to enter a password until they enter the correct password.
// let password;
// let attempt = 3;
// do {
//   password = prompt("Enter your password");
//   if (password == "password") {
//     alert("congradulation Your entered correct password");
//   } else {
//     alert(`Invalid password your attempt left ${attempt}`);
//   }
//   if (attempt == 0) break;
//   attempt--;
// } while (password != "password");

// Write a program that asks the user to enter a number and then prints out all the numbers from that number down to 1.
// let askNumber = Number(prompt("Enter a number to print down to 1"));
// let i = askNumber;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);

// Write a program that generates a random number between 1 and 100 and asks the user to guess it. The program should keep asking the user for guesses until they get the number. At the end of the loop, the program should ask the user if they want to play again.
// let randomNumber = Math.floor(Math.random() * 100);
// let guessNumber;
// do {
//   guessNumber = Number(prompt("Guess number between 1 to 100"));
//   if (randomNumber == guessNumber) {
//     alert(`congradulation Number is ${randomNumber}`);
//     confirm("do you want to play again?");
//   } else if (randomNumber > guessNumber) {
//     alert(`the number is larger then ${guessNumber}`);
//   } else if (randomNumber < guessNumber) {
//     alert(`The number is Smaller then ${guessNumber}`);
//   } else {
//     alert("invalid number");
//   }
// } while (randomNumber != guessNumber);

// Write a program that asks the user to enter a series of numbers and then finds the largest number. The program should keep asking the user for numbers until they enter a negative number.
// let numbersArray = [];
// let number;
// let maximumNumber;
// let i = 1;
//
// do {
//   number = parseInt(prompt("Enter a series of numbers"));
//   numbersArray.push(number);
//   if (number < 0) break;
//   for (let e = 0; e < numbersArray.length; e++) {
//     maximumNumber = Math.max(...numbersArray);
//   }
// } while (i > 0);
// alert("Higest number is " + maximumNumber);

// Write a program that asks the user to enter a series of words and then prints out the words in reverse order. The program should keep asking the user for words until they enter the word "stop".
