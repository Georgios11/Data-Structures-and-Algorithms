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
