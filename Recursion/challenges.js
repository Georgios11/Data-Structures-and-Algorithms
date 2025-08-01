/**
 * Challenge: Reverse String Recursion
Instructions
Write a function called reverseString that takes in a string and returns the reversed version of the string. Be sure to use recursion in your solution.
 */
function reverseString(str) {
  if (str === '') {
    return '';
  }

  console.log(
    `reverseStr("${str}") calls reverseStr("${str.substring(
      0,
      str.length - 1
    )}") + "${str[str.length - 1]}"`
  );
  let result =
    str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
  console.log(`reverseStr (${str}) returns ${result}`);
  return result;
  /**
 * same as 
return    str[str.length - 1] + reverseString(str.substring(0, str.length - 1));

*/
}
const reverseStr2 = str =>
  str === ''
    ? ''
    : str[str.length - 1] + reverseStr2(str.substring(0, str.length - 1));
// console.log(reverseStr2('PAOK'));

/**
 * Explanation
The reverseString function uses recursion to reverse the string.

If the input string is empty (str === ''), return an empty string (''). Otherwise, it calls itself with the substring starting from the second character (str.substr(1)) and concatenates the first character of the original string at the end (str[0]).
For example, if the input is 'hello', the function first calls itself with 'ello' and concatenates 'h' at the end. Then it calls itself with 'llo' and concatenates 'e' at the end. This process continues until the input becomes an empty string, and then the function starts concatenating the characters in reverse order, resulting in the reversed string 'olleh'.

It is important to have that base case of an empty string, otherwise the function will continue to call itself with substrings of the original string until it runs out of memory and crashes.

More Explanation
Let's break it down a little more...

When we call reverseString('hello'), it executes reverseString('ello') + 'h'.
Now, reverseString('ello') calls reverseString('llo') + 'e'.
Continuing, reverseString('llo') calls reverseString('lo') + 'l'.
In the next call, reverseString('lo') calls reverseString('o') + 'l'.
Finally, reverseString('o') returns 'o'.
Now, we can start "unwinding" the recursion and concatenating the characters to form the reversed string:

'o' + 'l' gives 'ol'.
'ol' + 'l' gives 'oll'.
'oll' + 'e' gives 'olle'.
'olle' + 'h' gives 'olleh'.
So, the function concatenates the characters in reverse order as it "unwinds" the recursion, effectively reversing the original string.
 */

//---------------

/**
 * Challenge: Fibonacci Sequence Using Recursion
We looked at a very simple example of recursion in the last lesson. Now I want to look at a very popular example that is often used with recursion: the Fibonacci sequence. This could very well be a question you get asked in an interview, so it's important to understand how it works. You can also use loops to solve this problem, but recursion is a more elegant solution. Later we will also look at using a binary tree to solve this problem.

What is the Fibonacci sequence?
The Fibonacci sequence is a series of numbers where the sequence starts with 0 and 1, and then each number is the sum of the previous two numbers. So the sequence would look like this:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

F(n) = F(n-1) + F(n-2) is the formula for the Fibonacci sequence.

F(n) is the number in the sequence.
F(n-1) is the number before it.
F(n-2) is the number before that.
So if we wanted to find the 5th number in the sequence, we would do this:

F(5) = F(4) + F(3) F(4) = F(3) + F(2) F(3) = F(2) + F(1) F(2) = F(1) + F(0) F(1) = 1 F(0) = 0

So we can see that F(2) = 1 + 0 = 1, F(3) = 1 + 1 = 2, F(4) = 2 + 1 = 3, and F(5) = 3 + 2 = 5. So the 5th number in the sequence is 5.

Instructions
Write a function called fibonacci that takes in a number and returns the number at that index of the Fibonacci sequence.
 */
function fibonacci(n) {
  console.log(`calculating fibonacci(${n})`);
  if (n < 2) return n;

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  return result;
}
const fibonacci2 = n => (n < 2 ? n : fibonacci2(n - 1) + fibonacci2(n - 2));
// console.log(fibonacci(4));

//---------

// Factorial
/**
 * The factorial of a number/integer is the product of that number and all of the numbers below it. It is denoted as 5! (factorial of 5).
 * Instructions
Write a function called factorial that takes in a number and returns the factorial of that number.
 */
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
const factorial2 = n => (n === 0 || n === 1 ? 1 : n * factorial2(n - 1));
// console.log(factorial2(5));

//---------

//Power
/**
 * 

Instructions
Write a function called power that takes in a base and an exponent and returns the result of raising the base to the power of the exponent. Use recursion to solve this problem.

 */
function power(base, exponent) {
  if (exponent === 0) return 1;
  if (base === 1) return 1;
  const result = base * power(base, exponent - 1);
  return result;
}
// console.log(power(1, 3));

/**
 * Explanation
The base case of the recursion is when the exponent is 0. In this case, we return 1 because any number raised to the power of 0 is 1.
For any other value of exponent, we break down the problem into smaller parts. To raise the base to the power of exponent, we can start by multiplying the base by the result of the function called with the same base and the exponent decremented by 1. This recursive step forms the essence of the algorithm, as it continually reduces the problem until it reaches the base case.
 */

//-----------

/**
 * Challenge: Array Sum Using Recursion
Description
Let's practice using recursion by creating a function that calculates the sum of an array of numbers. Write a function called arraySum that takes in an array of numbers and returns their sum using recursion.

Instructions
Write a function called arraySum that takes in an array of numbers and returns their sum using recursion.
 */
const arr = [1, 2, 3, 4];
function sum(arr) {
  if (arr.length === 1) return arr[0];

  return arr[arr.length - 1] + sum(arr.slice(0, -1));
}

// console.log(sum(arr));
// console.log(arr.slice(-1));

//-------

/**
 * Challenge: Number Range Using Recursion
Instructions
Write a function called numberRange that takes in a startNum and an endNum and returns an array of numbers from startNum to endNum, inclusive. Be sure to use recursion in your solution.

Function Signature
 */
function numberRange(start, end) {
  if (start === end) return [start];

  const numbers = numberRange(start, end - 1);
  numbers.push(end);
  return numbers;
}
// console.log(numberRange(3, 9));

/**
 * Challenge: Flatten Array
Instructions
Write a function called flattenArray that takes in an array containing nested arrays of integers and returns a new array with all the integers from the nested arrays flattened into a single level.

Function Signature
 */
function flattenArray(arr) {
  if (!Array.isArray(arr)) return [arr];
  let flattened = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      flattened.push(...flattenArray(el));
    } else {
      flattened.push(el);
    }
  }
  return flattened;
}
let arr1 = [1, 2, [3, 4, [5, 6], 7], 8];
console.log(flattenArray(arr1));
console.log(flattenArray(3));
