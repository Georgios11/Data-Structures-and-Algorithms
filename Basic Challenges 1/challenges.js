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
// console.log(countOccurrences2('PAOKARA'));

// Write a function called findMaxNumber that takes in an array of numbers and returns the largest number in the array.
function findMaxNumber(arr) {
  console.log(...arr);
  return Math.max(...arr);
}

// console.log(findMaxNumber([1, 2, 3]));
function findMaxNumber2(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
// console.log(findMaxNumber2([1, 2, 333, 3, 4, 5]));

//Write a function called titleCase that takes in a string and returns the string with the first letter of each word capitalized.

function titleCase(str) {
  const words = str.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
// console.log(titleCase('paokara ole leme'));

// Write a function called reverseString that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. If you get stuck, you can always use the built-in methods to solve the problem.

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// console.log(reverseString('Anna'));

// Write a function called isPalindrome that takes in a string and returns true if the string is a palindrome and false if it is not.

function isPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i].toLowerCase();
  }
  return reversed === str.toLowerCase();
}
// console.log(isPalindrome('Madam'));

//Write a function called countVowels that takes in a string and returns the number of vowels in the string.

function countVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const letters = str.toLowerCase().split('');
  for (const letter of letters) {
    if (vowels.includes(letter)) count++;
  }
  return count;
}
// console.log(countVowels('paokara ole leme'));

// Write a function called removeDuplicates that takes in an array and returns a new array with duplicates removed.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// console.log(removeDuplicates([1, 2, 1, 'a', 'b', 'a']));
function removeDuplicates1(arr) {
  const noDuplicates = [];
  for (const element of arr) {
    if (!noDuplicates.includes(element)) noDuplicates.push(element);
  }
  return noDuplicates;
}
console.log(removeDuplicates1([1, 2, 1, 'a', 'b', 'a']));
