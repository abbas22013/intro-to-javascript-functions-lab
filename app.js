/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

/*const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  function maxOfTwoNumbers(numA, numB){
   let larger
if (numA> numB){
    larger = numA
} else if (numB >numA){
    larger = numB
} else if (numA === numB){
    larger = numA
}
   return larger 
  
  //console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  console.log( maxOfTwoNumbers(3, 9));*/


  const maxOfTwoNumbers = (numA, numB) => {
    if (numA >= numB) {
        return numA;
    } else {
        return numB;
    }
};

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age){
  if (age >= 18){
    console.log('Adult');
  }
  else {
    console.log('Minor');
  }
}
console.log('Exercise 2 Result:', isAdult(21));
isAdult(21)

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char) {
  // Convert the character to lowercase for case-insensitive comparison
  const lowerChar = char.toLowerCase();
  // Check if the character is one of the vowels
  return ['a', 'e', 'i', 'o', 'u'].includes(lowerChar);
}

// Test the function
console.log('Exercise 3 Result:', isCharAVowel("a")); // should return true
console.log('Exercise 3 Result:', isCharAVowel("b")); // should return false
console.log('Exercise 3 Result:', isCharAVowel("E")); // should return true
console.log('Exercise 3 Result:', isCharAVowel("y")); // should return false
console.log('Exercise 3 Result:', isCharAVowel("I")); // should return true


console.log('Exercise 3 Result:', isCharAVowel("a"));



/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
  return `${name}@${domain}`;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "gmail.com"));



/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
function greetUser(name, timeOfDay) {
  return `Good ${timeOfDay}, ${name}!`;
}

// Test the function
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}

// Testing the function
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8)); // Should return 10
console.log('Exercise 6 Result:', maxOfThree(17, 4, 9)); // Should return 17


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
function calculateTip(billAmount, tipPercentage) {
  // Calculate the tip amount
  const tipAmount = (billAmount * tipPercentage) / 100;
  return tipAmount;
}

// Testing the function
console.log('Exercise 7 Result:', calculateTip(50, 20)); // Should return 10


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temperature, scale) {
  if (scale === 'C') {
      // Convert Celsius to Fahrenheit
      return (temperature * 9/5) + 32;
  } else if (scale === 'F') {
      // Convert Fahrenheit to Celsius
      return (temperature - 32) * 5/9;
  } else {
      throw new Error("Invalid scale. Use 'C' for Celsius or 'F' for Fahrenheit.");
  }
}

// Testing the function
console.log('Exercise 8 Result:', convertTemperature(32, "C")); // Should return 89.6
console.log('Exercise 8 Result:', convertTemperature(32, "F")); // Should return 0


console.log('Exercise 8 Result:', convertTemperature(32, "C"));




/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
function basicCalculator(num1, num2, operation) {
  switch (operation) {
      case 'add':
          return num1 + num2;
      case 'subtract':
          return num1 - num2;
      case 'multiply':
          return num1 * num2;
      case 'divide':
          if (num2 === 0) {
              return 'Error: Division by zero';
          }
          return num1 / num2;
      default:
          return 'Error: Invalid operation';
  }
}

// Test the function
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract")); // Should return 5
console.log('Add:', basicCalculator(10, 5, "add")); // Should return 15
console.log('Multiply:', basicCalculator(10, 5, "multiply")); // Should return 50
console.log('Divide:', basicCalculator(10, 5, "divide")); // Should return 2
console.log('Divide by zero:', basicCalculator(10, 0, "divide")); // Should return an error message
console.log('Invalid operation:', basicCalculator(10, 5, "modulus")); // Should return an error message



console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));



/*
Exercise 10: calculateGrade()

Define a function called calculateGrade. 
It should take a numerical score and return the corresponding letter 
grade (A, B, C, D, F). 

For example, 90 and above yields an 'A', 80-89 is a 'B', 
and 70-79 is a 'C', 60-69 is a 'D' and anything lower than a 60 is an 'F'.

Example: calculateGrade(100) should return A.

Complete the exercise in the space below:
*/
function calculateGrade(score) {
  if (score >= 90) {
      return 'A';
  } else if (score >= 80) {
      return 'B';
  } else if (score >= 70) {
      return 'C';
  } else if (score >= 60) {
      return 'D';
  } else {
      return 'F';
  }
}

console.log('Exercise 10 Result:', calculateGrade(85)); // Should output: B



/*
Exercise 11: createUsername()

Define a function called createUsername. 
It should take a first name and a last name and return a username. 

The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre13'.

Complete the exercise in the space below:
*/
function createUsername(firstName, lastName) {
  // Get the first three letters of the first name
  const firstPart = firstName.slice(0, 3);
  // Get the first three letters of the last name
  const lastPart = lastName.slice(0, 3);
  // Calculate the total character count of both names
  const totalCount = firstName.length + lastName.length;
  // Combine parts to create the username
  return `${firstPart}${lastPart}${totalCount}`;
}

// Test the function
console.log('Exercise 11 Result:', createUsername("Samantha", "Green")); // Should return 'SamGre13'

/*
Exercise 12: numArgs()

Challenge yourself with numArgs. 
This function should return the count of arguments passed to it when called.

Complete the exercise in the space below:
*/

function numArgs(...args) {
  return args.length;
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));













