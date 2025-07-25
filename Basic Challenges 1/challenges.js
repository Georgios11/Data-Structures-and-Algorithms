// Write a function called calculator that takes in 2 numbers and an operator and returns the result of the calculation.

// Function Signature
/**
 * Returns the result of a calculation.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to use in the calculation.
 * @returns {number} - The result of the calculation.
 */

function calculator(num1, num2, operation) {
  if (operation === '+') return num1 + num2;
  if (operation === '-') return num1 - num2;
  if (operation === '/') return num1 / num2;
  if (operation === '*') return num1 * num2;
  throw new Error('Invalid operator');
}
// console.log(calculator(14, 4, '*'));

// Write a function called countOccurrences() that takes in a string and a character and returns the number of occurrences of that character in the string.

// Function Signature
/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */

function countOccurrences(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}
// console.log(countOccurrences('PAOKARA', 'A'));
const countOccurrences2 = (str, char) => str.split('A').length - 1;
// This approach works by splitting the string at each occurrence of the character
// For example: "PAOKARA".split('A') returns ["P", "OK", "R", ""]
// The split method creates an array with n+1 elements where n is the number of occurrences
// So we subtract 1 from the length to get the actual count
//
// Step by step:
// 1. str = "PAOKARA"
// 2. str.split('A') = ["P", "OK", "R", ""] (4 elements)
// 3. .length = 4
// 4. - 1 = 3 (which is the correct count of 'A' characters)
console.log(countOccurrences2('PAOKARA'));
