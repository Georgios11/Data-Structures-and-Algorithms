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

// Constant time complexity means that the time required to complete a function is the same regardless of the size of the input data set.
function accessElement(arr, index) {
  return arr[index];
}
const arr1 = [1, 2, 3, 4, 5];
console.time('Access element 1');
console.log(accessElement(arr1, 3));
console.timeEnd('Access element 1');

// const arr2 = new Array(1000).fill(2);
const arr2 = Array.from({ length: 10000 }, (_, index) => index);
console.time('Access element 1');
console.log(accessElement(arr2, 333));
console.timeEnd('Access element 1');
