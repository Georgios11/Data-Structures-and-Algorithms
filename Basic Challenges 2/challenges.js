/**
 
Challenge: FizzBuzz Array
Instructions
FizzBuzz is probably the most common interview question for entry level developers. At least, it used to be. It may not be used as much because of how common it was. It's a simple problem that tests your ability to think logically and write clean code.

Traditionally, you loop from 1 to 100 and print out each number. However, if the number is divisible by 3, you print out "Fizz" instead. If the number is divisible by 5, you print out "Buzz" instead. If the number is divisible by both 3 and 5, you print out "FizzBuzz" instead.

In this challenge, you will write a function called fizzBuzzArray that takes in a number and returns an array. The array should contain all the numbers from 1 to the number passed in. However, if the number is divisible by 3, you should replace the number with "Fizz". If the number is divisible by 5, you should replace the number with "Buzz". If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".
*/
function fizzBuzzArray(length) {
  // const array = Array.from({length},(_,()=>{  }))

  const array = [];
  for (let i = 1; i <= length; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('FizzBuzz');
    } else if (i % 3 === 0) {
      array.push('Fizz');
    } else if (i % 5 === 0) {
      array.push('Buzz');
    } else {
      array.push(i);
    }
  }
  return array;
}
// console.log(fizzBuzzArray(15));

// Write a function called arrayIntersection that takes in two arrays and returns an array containing the intersection of the two input arrays (i.e., the common elements that appear in both arrays).
function arrayIntersection(arr1, arr2) {
  const intersection = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i]))
      intersection.push(arr1[i]);
  }

  return intersection;
}
// console.log(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

/**
  
Challenge: Display Likes
Instructions
Write a function called displayLikes that takes in an array of names and returns a string of who likes the post.

The function should return a string formatted as follows:

If no one likes it, it should return 'no one likes this'
If one person likes it, it should return '{name} likes this'
If two people like it, it should return '{name1} and {name2} like this'
If three people like it, it should return '{name1}, {name2} and {name3} like this'
If more than three people like it, it should return '{name1}, {name2} and {x} others like this'
*/
function displayLikes(names) {
  const length = names.length;

  if (length === 0) {
    return 'no one likes this';
  } else if (length === 1) {
    return `${names[0]} likes this`;
  } else if (length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }
}

//Write a function called findMissingNumber that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  //with reduce
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  //with Loop
  // let actualSum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   actualSum += arr[i];
  // }
  return expectedSum - actualSum;
}

// console.log(findMissingNumber([1, 2, 3, 5]));

/** 
Challenge: Find Missing Letter
Instructions
Write a function called findMissingLetter that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.
*/
function findMissingLetter(arr) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const startIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }

  return '';
}

/**
 Challenge: Are all characters unique?
Instructions
Write a function called areAllCharactersUnique that takes in a string and returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated).
 */
function areAllCharactersUnique1(str) {
  let chars = [];

  for (let i = 0; i < str.length; i++) {
    if (chars.includes(str[i])) {
      return true;
    }
    chars.push(str[i]);
  }
  return false;
}
// console.log(areAllCharactersUnique1('paokara'));
function areAllCharactersUnique(str) {
  const chars = {};
  string = str.replaceAll(' ', '');
  for (let i = 0; i < str.length; i++) {
    const char = string[i];
    if (chars[char]) {
      return false;
    }
    chars[char] = true;
  }
  return true;
}
// console.log(areAllCharactersUnique('gamo tin trela mou'));
/**
 * Explanation
This solution  we use an object instead of a Set to keep track of the characters we've seen so far.

Then we iterate through the string and check if the current character is in the object. If it is, we return false because it means we've seen the character before. If it isn't, we add it to the object.

If we make it through the entire string without returning false, we return true because it means we haven't seen any characters more than once.
 */

//Write a function called findFirstNonRepeatingCharacter that takes in a string and returns the first non-repeating character in the string. If there are no non-repeating characters, the function should return null.
function findFirstNonRepeatingCharacter(str) {
  const chars = {};
  for (let i = 0; i < str.length; i++) {
    chars[str[i]] = (chars[str[i]] || 0) + 1;
  }
  for (const char of str) {
    if (chars[char] === 1) return char;
  }
  return null;
}
// console.log(findFirstNonRepeatingCharacter('PAOK'));
// console.log(findFirstNonRepeatingCharacter('aabbccdd'));

/**
 Explanation
Initialize an empty object to keep track of the number of times each character appears in the string.
Iterate through the string and add each character to the object. If the character is already in the object, we increment its count by 1. If it isn't, we set its count to 1.
Iterate through the string again and check the object to see if the current character has a count of 1. If it does, return it because it's the first non-repeating character.
If we make it through the entire string without returning a character, we return null because there are no non-repeating characters.
 */

/**
 * Challenge: Dice Game Simulation
Instructions
Write a function called diceGameSimulation that simulates this dice game. The function should take one argument:

numSimulations: The number of times to simulate the dice game.
The game rules are if a 7 or 11 are rolled, the player wins and they get a result of win. If a 2, 3 or 12 are rolled they lose and get a result of lose. Anything else and they get a result of roll again.

The function should return an array of objects, where each object represents a simulation result. Each object should contain the following properties:

dice1: The value of the first dice (a random number between 1 and 6).
dice2: The value of the second dice (a random number between 1 and 6).
sum: The sum of the two dice values.
result: The result of the roll, which can be "win", "lose", or "roll again".
 */
function diceGameSimulation(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    let sum = dice1 + dice2;
    let result = '';
    if (sum === 7 || sum === 11) {
      result = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    } else {
      result = 'roll again';
    }
    arr.push({ dice1, dice2, sum, result });
  }

  return arr;
}
// console.log(diceGameSimulation(4));

//Format Phone Number
function formatPhoneNumber(arr) {
  if (arr.length !== 10) throw new Error('Invalid numbers');

  for (const number of arr) {
    if (number < 0 || number > 9 || typeof number !== 'number')
      throw new Error('invalid data');
  }

  let areaCode = arr.slice(0, 3).join('');
  console.log(areaCode);
  let prefix = arr.slice(3, 6).join('');
  console.log(prefix);
  let lineNumber = arr.slice(6).join('');
  console.log(lineNumber);
  return `(${areaCode}) ${prefix}-${lineNumber}`;
}
// console.log(formatPhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

//Validate Email
function validateEmail(str) {
  if (!str.includes('@') || !str.includes('.')) {
    return 'Invalid email address';
  }
  return null;
}
// console.log(validateEmail('sfdemail.com'));
