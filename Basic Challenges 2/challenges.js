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

console.log(findMissingNumber([1, 2, 3, 5]));
