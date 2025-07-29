// Countdown
function countDown(num) {
  //Base Case
  if (num <= 0) {
    console.log(num);
    console.log('All done!');
    return;
  }

  // Recursive Case
  console.log(num);
  num--;
  countDown(num);
}
// countDown(10);

// Sum Up To

function sumUpTo(n) {
  //Base Case
  if (n === 1) {
    console.log(`sumUpTo(${n}) returns 1`);
    return 1;
  }
  //Recursive Case
  console.log(`sumUpTo(${n}) calls sumUpto(${n - 1}) + ${n}`);
  const result = n + sumUpTo(n - 1);
  console.log(`sumUpTo(${n}) returns ${result}`);
  return result;
}
const result = sumUpTo(5);
// console.log(result);

function factorial(n) {}
