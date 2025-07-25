// Timing our code
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
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

// **O(n) -> O of n**

// Constant time complexity means that the time required to complete a function is the same regardless of the size of the input data set.
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

// **O(1) -> O of 1**

//Linear Time Complexity means that the time required to complete a function is directly proportional to the size of the input data set

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
console.time('Find Power 1');
console.log(findPower(2, 100));
console.timeEnd('Find Power 1');
console.time('Find Power 2');
console.log(findPower(2, 1000000));
console.timeEnd('Find Power 2');
