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
console.log(sumOfEvenSquares([1, 2, 3, 4, 5, 6]));
