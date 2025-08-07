const nameMap = new Map([
  [1, 'John'],
  [2, 'Jane'],
  [3, 'Joe'],
]);

const myFunction = () => {};
const emptyObj = {};

const map2 = new Map([
  ['name', 'John'],
  [1, 'number one'],
  [true, 'really true'],
  [null, 'null'],
  [myFunction, 'empty function'],
  [emptyObj, 'empty object'],
]);

// Getting values
// console.log(nameMap.get(1));
// console.log(map2.get(myFunction));
// console.log(map2.get(emptyObj));

// Setting values
nameMap.set(4, 'Jack');
nameMap.set(5, 'Jill');

// Checking values
// console.log(nameMap.has(1));
// console.log(nameMap.has(6));

// Deleting values
nameMap.delete(1);
// console.log(nameMap.has(1));

// Get Size
// console.log(nameMap.size);

// Iterating (for...of)
for (let [key, value] of nameMap) {
  //   console.log(key, value);
}

// Using forEach
nameMap.forEach((value, key) => {
  //   console.log(key, value);
});

// Looping keys and values
// console.log(nameMap.keys());
// console.log(nameMap.values());

// Clearing
nameMap.clear();
// console.log(nameMap.size);
/**
 * Challenge: Word Frequency Counter
Instructions
Write a function called wordFrequencyCounter that takes a string as input and returns a map that represents the frequency of each word in the string. We did a similar challenge way back that counted the occurrences of a character. This function should count the occurrences of each word, ignoring case and excluding punctuation.

Function Signature

 * Returns a map that represents the frequency of each word in the input string.
 * @param {string} str - The input string containing words.
 * @returns {Map<string, number>} - The map with word frequency.

function wordFrequencyCounter(str) {
  // Your code here
}
Examples
wordFrequencyCounter('The quick brown fox jumps over the lazy dog.');
// Output: Map { 'the' => 2, 'quick' => 1, 'brown' => 1, 'fox' => 1, 'jumps' => 1, 'over' => 1, 'lazy' => 1, 'dog' => 1 }

wordFrequencyCounter(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
);
// Output: Map { 'lorem' => 1, 'ipsum' => 1, 'dolor' => 1, 'sit' => 1, 'amet' => 1, 'consectetur' => 1, 'adipiscing' => 1, 'elit' => 1 }
Constraints
The input string will only contain letters, spaces, and punctuation marks.
Hints
You can use the toLowerCase() method to convert the input string to lowercase, so you can ignore the case when counting word frequency.
Regular expressions can be helpful for splitting the string into words and removing punctuation marks.
You can use a map to store the word frequencies, where the word is the key, and the count is the value. Loop through each word, update the count in the map, and return the final map.
 */
const str = 'The quick brown fox jumps over the lazy dog.';
function wordFrequencyCounter(str) {
  const words = str
    .replaceAll(',', '')
    .replaceAll('.', '')
    .toLowerCase()
    .split(' ');
  const frequencies = new Map();
  for (const word of words) {
    if (!frequencies.has(word)) {
      frequencies.set(word, 1);
    } else {
      frequencies.set(word, frequencies.get(word) + 1);
    }
  }
  return frequencies;
}
// console.log(wordFrequencyCounter(str));

/**
 * Challenge: Phone Number Directory
Instructions
You are building a phone number directory application. Implement a function called phoneNumberDirectory that takes an array of phone numbers as input and returns a Map with names as keys and corresponding phone numbers as values.

Function Signature

 * Builds a phone number directory from an array of phone numbers.
 *
 * @param {string[]} phoneNumbers - An array of phone numbers in the format "Name:PhoneNumber".
 * @returns {Map<string, string>} - A Map with names as keys and corresponding phone numbers as values.

function phoneNumberDirectory(phoneNumbers: string[]): Map<string, string>
Examples
const phoneNumbers = [
  'John:123-456-7890',
  'Jane:987-654-3210',
  'Joe:555-555-5555',
];

console.log(phoneNumberDirectory(phoneNumbers));
// Output: Map { 'John' => '123-456-7890', 'Jane' => '987-654-3210', 'Joe' => '555-555-5555' }
Constraints
The input array elements should be formatted as NAME:PHONENUMBER
Hints
Loop through the input array and use the split() method to separate the name and phone number in each element of the phoneNumbers array before adding to the map
 */
const phoneNumbers = [
  'John:123-456-7890',
  'Jane:987-654-3210',
  'Joe:555-555-5555',
];
function phoneNumberDirectory(nums) {
  const result = new Map();
  for (const num of nums) {
    const [name, number] = num.split(':');
    result.set(name, number);
  }
  return result;
}
// console.log(phoneNumberDirectory(phoneNumbers));

/**
 * Challenge: Anagram Grouping
Anagrams are words or phrases formed by rearranging the letters of another word or phrase. For example, cinema is an anagram of iceman.

Instructions
Write a function called anagramGrouping that takes an array of strings as input and returns an array of arrays, where each sub-array contains words that are anagrams of each other.

Function Signature

 * Returns an array of arrays, where each sub-array contains words that are anagrams of each other.
 * @param {string[]} words - The input array of strings containing words.
 * @returns {string[][]} - The array of arrays with anagram groups.

function anagramGrouping(words: string[]): string[][];
Examples
anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']);
// Output: [['cat', 'act', 'tac'], ['dog', 'god']]

anagramGrouping(['listen', 'silent', 'enlist', 'hello', 'world']);
// Output: [['listen', 'silent', 'enlist'], ['hello'], ['world']]
Constraints
The input array words will contain only lowercase alphabetical characters.
Hints
You can use a map to store the anagram groups, where the key is the sorted characters of each word, and the value is an array of words that have the same sorted characters
You can sort a string by splitting it into an array of chars and calling .sort() and then join() it back to a string
You can use Array.from() to convert a map to an array
 */
function anagramGrouping(strings) {
  const anagrams = new Map();
  for (const word of strings) {
    const sorted = word.split('').sort().join('');
    if (anagrams.has(sorted)) {
      anagrams.get(sorted).push(word);
    } else {
      anagrams.set(sorted, [word]);
    }
  }
  const groups = Array.from(anagrams.values());
  return groups;
}
// console.log(anagramGrouping(['listen', 'silent', 'enlist', 'hello', 'world']));
// console.log(anagramGrouping(['cat', 'act', 'dog', 'god', 'tac']));

/**
 * Challenge 1: Character Frequency Counter
 * Instructions
 * Write a function called characterFrequencyCounter that takes a string as input and returns a Map where the keys are characters and the values are their frequencies in the string. Ignore spaces and be case-sensitive.
 *
 * Function Signature
 * @param {string} str - The input string
 * @returns {Map<string, number>} - Map with character frequencies
 *
 * Examples
 * characterFrequencyCounter('hello'); // Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
 * characterFrequencyCounter('programming'); // Map { 'p' => 1, 'r' => 2, 'o' => 1, 'g' => 2, 'a' => 1, 'm' => 2, 'i' => 1, 'n' => 1 }
 *
 * Constraints
 * - Input string will only contain letters and spaces
 * - Case-sensitive (uppercase and lowercase are different)
 * - Ignore spaces in the count
 */
function characterFrequencyCounter(str) {
  const chars = str.replaceAll(' ', '').split('');
  const frequencies = new Map();
  for (const char of chars) {
    if (frequencies.has(char)) {
      frequencies.set(char, frequencies.get(char) + 1);
    } else {
      frequencies.set(char, 1);
    }
  }
  return frequencies;
}
// console.log(characterFrequencyCounter('hello'));
/**
 * Challenge 2: Student Grade Tracker
 * Instructions
 * Create a function called studentGradeTracker that takes an array of student objects (each with name and grade properties) and returns a Map where keys are grade levels ('A', 'B', 'C', 'D', 'F') and values are arrays of student names who have that grade.
 *
 * Function Signature
 * @param {Array<{name: string, grade: number}>} students - Array of student objects
 * @returns {Map<string, string[]>} - Map with grade levels as keys and student names as values
 *
 * Examples
 * const students = [
 *   { name: 'Alice', grade: 95 },
 *   { name: 'Bob', grade: 87 },
 *   { name: 'Charlie', grade: 92 },
 *   { name: 'Diana', grade: 78 }
 * ];
 * studentGradeTracker(students);
 * // Output: Map { 'A' => ['Alice', 'Charlie'], 'B' => ['Bob'], 'C' => ['Diana'] }
 *
 * Grade Ranges:
 * - A: 90-100
 * - B: 80-89
 * - C: 70-79
 * - D: 60-69
 * - F: 0-59
 */
function studentGradeTracker(students) {
  const grades = new Map();
  grades.set('A', []);
  grades.set('B', []);
  grades.set('C', []);
  grades.set('D', []);
  grades.set('E', []);
  grades.set('F', []);
  for (const student of students) {
    if (student.grade >= 90) {
      grades.get('A').push(student.name);
    } else if (student.grade >= 80) {
      grades.get('B').push(student.name);
    } else if (student.grade >= 70) {
      grades.get('C').push(student.name);
    } else if (student.grade >= 60) {
      grades.get('D').push(student.name);
    } else {
      grades.get('F').push(student.name);
    }
  }
  return grades;
}
const students = [
  { name: 'Alice', grade: 95 },
  { name: 'Bob', grade: 87 },
  { name: 'Charlie', grade: 92 },
  { name: 'Diana', grade: 78 },
];
// console.log(studentGradeTracker(students));
/**
 * Challenge 3: Inventory Management
 * Instructions
 * Implement a function called inventoryManagement that takes an array of product transactions (each with product name, quantity, and transaction type: 'add' or 'remove') and returns a Map representing the current inventory levels.
 *
 * Function Signature
 * @param {Array<{product: string, quantity: number, type: 'add'|'remove'}>} transactions - Array of inventory transactions
 * @returns {Map<string, number>} - Map with product names as keys and current quantities as values
 *
 * Examples
 * const transactions = [
 *   { product: 'laptop', quantity: 5, type: 'add' },
 *   { product: 'mouse', quantity: 10, type: 'add' },
 *   { product: 'laptop', quantity: 2, type: 'remove' },
 *   { product: 'keyboard', quantity: 3, type: 'add' }
 * ];
 * inventoryManagement(transactions);
 * // Output: Map { 'laptop' => 3, 'mouse' => 10, 'keyboard' => 3 }
 *
 * Constraints
 * - Quantity cannot go below 0 (if remove would make it negative, set to 0)
 * - All product names are strings
 * - All quantities are positive integers
 */
const transactions = [
  { product: 'laptop', quantity: 5, type: 'add' },
  { product: 'mouse', quantity: 10, type: 'add' },
  { product: 'laptop', quantity: 2, type: 'remove' },
  { product: 'keyboard', quantity: 3, type: 'add' },
];
function inventoryManagement(transactions) {
  const inventory = new Map();
  for (const { product, quantity, type } of transactions) {
    const current = inventory.get(product) || 0;

    const newQuantity =
      type === 'add' ? current + quantity : Math.max(0, current - quantity);
    inventory.set(product, newQuantity);
  }
  return inventory;
}
console.log(inventoryManagement(transactions));
/**
 * Challenge 4: Word Length Distribution
 * Instructions
 * Write a function called wordLengthDistribution that takes a string and returns a Map where keys are word lengths and values are arrays of words with that length.
 *
 * Function Signature
 * @param {string} str - The input string
 * @returns {Map<number, string[]>} - Map with word lengths as keys and arrays of words as values
 *
 * Examples
 * wordLengthDistribution('The quick brown fox jumps over the lazy dog');
 * // Output: Map {
 * //   3 => ['The', 'fox', 'the', 'dog'],
 * //   5 => ['quick', 'brown', 'jumps'],
 * //   4 => ['over', 'lazy']
 * // }
 *
 * Constraints
 * - Ignore punctuation
 * - Case-sensitive (keep original case)
 * - Words are separated by spaces
 */

/**
 * Challenge 5: Shopping Cart Calculator
 * Instructions
 * Create a function called shoppingCartCalculator that takes an array of items (each with name and price) and returns a Map with item names as keys and objects containing price, quantity, and total cost as values.
 *
 * Function Signature
 * @param {Array<{name: string, price: number}>} items - Array of shopping items
 * @returns {Map<string, {price: number, quantity: number, total: number}>} - Map with item details
 *
 * Examples
 * const items = [
 *   { name: 'apple', price: 1.50 },
 *   { name: 'banana', price: 0.75 },
 *   { name: 'apple', price: 1.50 },
 *   { name: 'orange', price: 2.00 }
 * ];
 * shoppingCartCalculator(items);
 * // Output: Map {
 * //   'apple' => { price: 1.50, quantity: 2, total: 3.00 },
 * //   'banana' => { price: 0.75, quantity: 1, total: 0.75 },
 * //   'orange' => { price: 2.00, quantity: 1, total: 2.00 }
 * // }
 *
 * Constraints
 * - All prices are positive numbers
 * - Round totals to 2 decimal places
 * - Items with the same name should be grouped together
 */
