// Timing our code

// O(n) - Linear Time Complexity
// Time grows linearly with input size
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// O(1) - Constant Time Complexity
// Time remains constant regardless of input size
function addUpTo1(n) {
  return (n * (n + 1)) / 2;
}
const t1 = performance.now();
// addUpTo(1000000000);
const t2 = performance.now();
// console.log(`First function time elapsed ${t2 - t1} ms`);
const t3 = performance.now();
// addUpTo1(1000000000);
const t4 = performance.now();
// console.log(`Second function time elapsed ${t4 - t3} ms`);

// What matters most?
// faster ?
// less memory-intensive ?
// more readable ?
// brevity ?

// 3. Manually timing is not consistent.
// 2. Different machines will record different times
// 3. For fast algorithms, speed measurements may not be precise enough?

//---------//

// Counting Operations

//Visualizing Time Complexity

//https://rithmschool.github.io/function-timer-demo/

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(n, 5); i++) {
    console.log(i);
  }
}
// logAtLeast5(2);
function subtotals(array) {
  let subtotalArray = Array(array.length);
  for (let i = 0; i < array.length; i++) {
    let subtotal = 0;
    for (let j = 0; j <= i; j++) {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
// console.log(subtotals([0, 0, 0, 0, 0]));

// Constant Time Complexity

// **O(1) -> O of 1**
// Constant time complexity means that the time required to complete a function is the same regardless of the size of the input data set.

// O(1) - Constant Time & Space
// Accessing array element by index is always constant time
function accessElement(arr, index) {
  return arr[index];
}
const arr1 = [1, 2, 3, 4, 5];
// console.time('Access element 1');
// console.log(accessElement(arr1, 3));
// console.timeEnd('Access element 1');

// const arr2 = new Array(1000).fill(2);
const arr2 = Array.from({ length: 10000 }, (_, i) => i + 1);
// console.time('Access element 1');
// console.log(accessElement(arr2, 333));
// console.timeEnd('Access element 1');

// Linear Time Complexity

// **O(n) -> O of n**
// Linear Time Complexity means that the time required to complete a function is directly proportional to the size of the input data set

// O(n) - Linear Time, O(1) - Constant Space
// Loops through each element once, uses fixed amount of memory
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.time('sumArray 1');
// console.log(sumArray(arr1));
// console.timeEnd('sumArray 1');

// console.time('sumArray 2');
// console.log(sumArray(arr2));
// console.timeEnd('sumArray 2');

// Quadratic Time Complexity

// **O(n²) -> O of n squared**
// Time grows exponentially with input size - nested loops

// O(n²) - Quadratic Time, O(1) - Constant Space
// Outer loop runs n times, inner loop runs n times for each outer iteration
function sumArray2(arr) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
    for (let j = 0; j < arr.length; j++) {
      sum2 += arr[j];
    }
  }
  return sum1 + sum2;
}
// console.time('sumArray1');
// console.log(sumArray2(arr1));
// console.timeEnd('sumArray1');
// console.time('sumArray2');
// console.log(sumArray2(arr2));
// console.timeEnd('sumArray2');

// Logarithmic Time Complexity

// **O(log n) -> O of log n**
// Time grows logarithmically - each step reduces problem size by half

// O(log n) - Logarithmic Time, O(log n) - Logarithmic Space (recursion stack)
// Uses divide-and-conquer approach to calculate power efficiently
function findPower(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  if (exponent % 2 === 0) {
    const halfPower = findPower(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    const halfPower = findPower(base, (exponent - 1) / 2);
    return base * halfPower * halfPower;
  }
}
// console.time('Find Power 1');
// console.log(findPower(2, 100));
// console.timeEnd('Find Power 1');
// console.time('Find Power 2');
// console.log(findPower(2, 1000000));
// console.timeEnd('Find Power 2');

// Space complexity examples

/** 
O(1) - Constant Space Complexity
O(1) - Constant Time Complexity

This function does not create any additional data structures or variables that depend on the input size
*/
function add(num1, num2) {
  return num1 + num2;
}

/** 
O(n) - Linear Space Complexity
O(n) - Linear Time Complexity

This function creates an array and pushes elements in it. As the input num increases, the size of the array increases proportionally. The space complexity grows linearly with the input
*/
function createArray(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  return arr;
}

// O(n²) - Quadratic Space & Time Complexity

/**
 Space Complexity: O(n²)
 Time Complexity: O(n²)
 This function creates a two dimensional array and fills it with values using a nested array. As the input num increases the size of the matrix increases proportionately.
 */

function createMatrix(num) {
  const matrix = [];

  for (let i = 0; i < num; i++) {
    matrix[i] = []; // Initialize as empty array
    for (let j = 0; j < num; j++) {
      matrix[i][j] = i + j;
    }
  }
  return matrix;
}

// console.log(createMatrix(4));

/**
 O(1) - Constant Space Complexity since it uses one variable
 O(n) - Linear Time Complexity since time increases for larger numbers
 */
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
