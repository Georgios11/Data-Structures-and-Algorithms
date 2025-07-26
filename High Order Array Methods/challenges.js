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
console.log(calculateTotalSalesWithTax(products, 8));
