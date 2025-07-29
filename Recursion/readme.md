# Recursion

## What Is Recursion

A function that calls itself until a **base case** is **true**. It breaks the problem down into smaller instances of the same problem.

```javascript
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
countDown(10);
```

### Recursion vs Iteration

#### Recursion

- A function calls itself to solve a smaller version of the same problem.
- New instance gets added to the call stack every time it is called.
- Recursion can minimize the amount of code needed and is often more elegant.

#### Iteration

- A block of code is called until a condition is met
- Iteration does not add functions to the call stack, so it is more memory efficient.

## Recursive Unwinding (Sum Up To)

- After the base case is met, the recursive function starts returning values and **'unwinding'**.
- As it unwinds, the functions are taken of the call stack.
- The values are returned in the reversed order.

```javascript
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
console.log(result);
```

### How It Works: Step-by-Step Breakdown

**Goal:** Calculate the sum of numbers from 1 to n (e.g., 1+2+3+4+5 = 15)

**The Recursive Process:**

1. **Initial Call:** `sumUpTo(5)`

   - Since 5 ≠ 1, it calls `sumUpTo(4) + 5`
   - Function pauses here, waiting for `sumUpTo(4)` to return

2. **Recursive Calls (Building the Stack):**

   - `sumUpTo(4)` calls `sumUpTo(3) + 4`
   - `sumUpTo(3)` calls `sumUpTo(2) + 3`
   - `sumUpTo(2)` calls `sumUpTo(1) + 2`
   - `sumUpTo(1)` hits the base case and returns `1`

3. **The Unwinding (Returning Values):**
   - `sumUpTo(1)` returns `1`
   - `sumUpTo(2)` returns `2 + 1 = 3`
   - `sumUpTo(3)` returns `3 + 3 = 6`
   - `sumUpTo(4)` returns `4 + 6 = 10`
   - `sumUpTo(5)` returns `5 + 10 = 15`

**Console Output:**

```
sumUpTo(5) calls sumUpTo(4) + 5
sumUpTo(4) calls sumUpTo(3) + 4
sumUpTo(3) calls sumUpTo(2) + 3
sumUpTo(2) calls sumUpTo(1) + 2
sumUpTo(1) returns 1
sumUpTo(2) returns 3
sumUpTo(3) returns 6
sumUpTo(4) returns 10
sumUpTo(5) returns 15
15
```

**Key Concepts:**

- **Base Case:** Stops the recursion (when n === 1)
- **Recursive Case:** Breaks problem into smaller subproblem (n + sumUpTo(n-1))
- **Call Stack:** Each recursive call adds a new function to the stack
- **Unwinding:** After base case, functions return values in reverse order

## Fibonacci Sequence

## Factorial

The factorial of a number/integer is the product of that number and all of the numbers below it. It is denoted as 5! (factorial of 5).

```text
- 0! = 1
- 1! = 1
- 2! = 2 * 1 = 2
- 3! = 3 * 2 * 1 = 6
- 4! = 4 * 3 * 2  * 1 = 24
- 5! = 5 * 4 * 3 * 2 * 1 = 120
```

## Power

```js
function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
```

### Explanation

- The base case of the recursion is when the exponent is 0. In this case, we return 1 because any number raised to the power of 0 is 1.
- For any other value of exponent, we break down the problem into smaller parts. To raise the base to the power of exponent, we can start by multiplying the base by the result of the function called with the same base and the exponent decremented by 1. This recursive step forms the essence of the algorithm, as it continually reduces the problem until it reaches the base case.

Let's us `power(2, 5)` and look at the exact steps including reaching the base case and unwinding and cycling through the returns:

```js
base = 2
exponent = 5
exponent !== 0 so base case is skipped
return 2 * power(2, 4)
exponent = 4
return 2 * power(2, 3)
exponent = 3
return 2 * power(2, 2)
exponent = 2
return 2 * power(2, 1)
exponent = 1
return 2 * power(2, 0)
exponent = 0
return 1
```

Now we start unwinding:

```js
return 1 * 2 = 2
return 2 * 2 = 4
return 4 * 2 = 8
return 8 * 2 = 16
return 16 * 2 = 32
```

## Array Sum

The array sum problem involves calculating the sum of all elements in an array using recursion. This is another classic example of breaking down a problem into smaller subproblems.

```javascript
const arr = [1, 2, 3, 4];
function sum(arr) {
  if (arr.length === 1) return arr[0];

  return arr[arr.length - 1] + sum(arr.slice(0, -1));
}
```

### Explanation

- The `arraySum` function uses a recursive approach to calculate the sum of an array of numbers.
- The base case is when the array is empty. In this case, the function returns 0, as the sum of an empty array is 0.
- In the recursive case, the function adds the first element of the array (`arr[0]`) to the sum of the rest of the array (`arraySum(arr.slice(1))`).
- The recursion continues until the array becomes empty and the base case is reached.

Here's a breakdown of how the recursion progresses when calculating the sum of [1, 2, 3, 4, 5]:

- `arraySum([1, 2, 3, 4, 5])` returns 1 + arraySum([2, 3, 4, 5])
- `arraySum([2, 3, 4, 5])` returns 2 + arraySum([3, 4, 5])
- `arraySum([3, 4, 5])` returns 3 + arraySum([4, 5])
- `arraySum([4, 5])` returns 4 + arraySum([5])
- `arraySum([5])` returns 5 + arraySum([])
- `arraySum([])` reaches the base case and returns 0
- At this point, the recursive calls start "unwinding," and the values are added up:

- 5 + 0 = 5 Returned from arraySum([5])
- 4 + 5 = 9 Returned from arraySum([4, 5])
- 3 + 9 = 12 Returned from arraySum([3, 4, 5])
- 2 + 12 = 14 Returned from arraySum([2, 3, 4, 5])
- 1 + 14 = 15 Returned from arraySum[1, 2, 3, 4, 5]

So, the final result is 15, which is the sum of all the numbers in the original array [1, 2, 3, 4, 5].
