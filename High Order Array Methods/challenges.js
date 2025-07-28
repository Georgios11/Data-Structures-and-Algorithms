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
console.log(generateHashtag('PAOKara ole '));
