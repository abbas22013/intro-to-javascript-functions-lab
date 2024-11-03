/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
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
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  