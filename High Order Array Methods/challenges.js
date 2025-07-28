/**
 * Challenge: Sum of Squares of Even Numbers
Instructions
Let's start off with a fairly simple challenge, but one that uses a few different array methods. Write a function called sumOfEvenSquares that takes an array of numbers and returns the sum of the squares of the even numbers in the array.
 */
function sumOfEvenSquares(numbers) {
  return numbers.reduce((sum, cur) => {
    if (cur % 2 === 0) sum += cur * cur;
    return sum;
  }, 0);
}
// console.log(sumOfEvenSquares([1, 2, 3, 4, 5, 6]));
/**
 * Challenge: Calculate Total Sales
Instructions
Use the given array of product objects below, each with their name, price, and quantity sold. Additionally, you are given a tax rate as a percentage. Write a function called calculateTotalSalesWithTax that takes in an array of product objects, along with the tax rate, and returns the total sales amount including tax.

*/
const products = [
  { name: 'Apple', price: 0.5, quantity: 10 },
  { name: 'Banana', price: 0.3, quantity: 20 },
  { name: 'Orange', price: 0.6, quantity: 15 },
];
function calculateTotalSalesWithTax(products, tax) {
  const result = products.reduce((sales, product) => {
    sales += product.quantity * product.price;
    return sales;
  }, 0);
  return result + (result * tax) / 100;
}
// console.log(calculateTotalSalesWithTax(products, 8));

/**
 * Challenge: Highest Scoring Word
Instructions
Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3, and so on.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
 */

function highestScoringWord(str) {
  const words = str.split(' ');
  // const scores = words.map(word =>
  //   Array.from(word).reduce(
  //     (score, letter) => score + letter.charCodeAt(0) - 96,

  //     0
  //   )
  // );
  const scores = words.reduce((score, word) => {
    let tempScore = 0;
    for (const letter of word) {
      tempScore += letter.charCodeAt(0) - 96;
    }
    score.push(tempScore);
    return score;
  }, []);
  const highestScore = Math.max(...scores);
  const highestIndex = scores.indexOf(highestScore);
  return words[highestIndex];
}

// console.log(highestScoringWord('paokara ole leme'));

/**
 * Challenge: Valid Anagrams
Instructions
Write a function called validAnagrams that takes in two strings and determines whether they are valid anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */
function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  const letters1 = {};
  const letters2 = {};
  for (const letter of str1) {
    letters1[letter] = (letters1[letter] || 0) + 1;
  }
  for (const letter of str2) {
    letters2[letter] = (letters2[letter] || 0) + 1;
  }
  // for (let key in letters1) {
  //   if (letters1[key] !== letters2[key]) return false;
  // }
  // return true;
  console.log(Object.values(letters1));
  console.log(Object.keys(letters2));
  return Object.values(letters1).every(
    value => letters1[value] === letters2[value]
  );
}
// console.log(validAnagrams('listen', 'silent'));

/**
 * Challenge: Hashtag Generator
Instructions
Write a function called generateHashtag that takes a string as input and returns a hashtag-generated string according to the rules below. If the generated hashtag string is longer than 140 characters or the input/result is an empty string, the function should return false.
 */
function generateHashtag(str) {
  if (str.trim() === '') return false;
  const words = str.trim().split(' ');
  const capitalizedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const hashtag = '#' + capitalizedWords.join('');
  return hashtag;
}
// console.log(generateHashtag('PAOKara ole '));

/**
 * Challenge: Valid IPv4 Addresses
Instructions
Write a function called isValidIPv4 that takes a string as input and returns true if the input is a valid IPv4 address in dot-decimal format, and false otherwise. An IPv4 address should consist of four octets, with values between 0 and 255, inclusive.
 */

function isValidIPv4(ip) {
  let address = ip.split('.');
  if (address.length !== 4) return false;

  for (const piece of address) {
    if (Number(piece) < 0 || Number(piece) > 255) return false;
  }
  return true;
}
// console.log(isValidIPv4('123.23.123.123'));
// console.log(isValidIPv4('03.23.123.123'));

/**
 * Challenge: Car Mileage Analysis
Instructions
You are given an array of car objects, each containing information about a car's make, model, year, and mileage. Your goal is to perform some analysis on the car mileage data using high order array methods.

Implement a function called analyzeCarMileage which takes in an array of car objects and performs the following tasks:

Calculate the average mileage of all cars.
Find the car with the highest mileage.
Find the car with the lowest mileage.
Calculate the total mileage of all cars combined.
The function should return an object containing the calculated values as properties.
 */
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000 },
  { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
  { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
  { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
];

function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((total, cur) => (total += cur.mileage), 0);
  const averageMileage = totalMileage / cars.length;

  const lowestMileageCar = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );
  const highestMileageCar = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );
  return { totalMileage, averageMileage, highestMileageCar, lowestMileageCar };
}
// console.log(analyzeCarMileage(cars));

/**
 * Challenge: Password Validation
Instructions
Write a function called validatePassword that takes in a string and validates it based on the following criteria:

The password must be at least 8 characters long.
The password must contain at least one uppercase letter.
The password must contain at least one lowercase letter.
The password must contain at least one digit.

The function should return true if the password is valid according to the criteria, and false otherwise.


 */

function validatePassword(password) {
  if (password.length < 8) return false;
  const chars = password.split('');
  const upper = chars.some(
    char => char.charCodeAt(0) > 64 && char.charCodeAt(0) < 90
  );
  if (!upper) return upper;
  const lower = chars.some(
    char => char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123
  );
  if (!lower) return lower;
  const hasNumber = chars.some(
    char => char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57
  );
  if (!hasNumber) return hasNumber;
  return true;
}
console.log(validatePassword('P3aokara ole leme .'));
