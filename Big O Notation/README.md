# Big O Notation

## The Need for Big O Notation

- It is important to have a precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our application

## Timing our code

### The Problem with Manual Timing

Consider these two functions that add up numbers from 1 to n:

```javascript
// Function 1: O(n) - Linear time complexity
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// Function 2: O(1) - Constant time complexity
function addUpTo1(n) {
  return (n * (n + 1)) / 2;
}
```

### Why Manual Timing Isn't Reliable

1. **Inconsistent Results**: Different runs can produce different timing results
2. **Machine Dependencies**: Different computers will record different times
3. **Precision Issues**: For fast algorithms, speed measurements may not be precise enough
4. **External Factors**: System load, background processes, and other factors affect timing

### What Really Matters?

When evaluating code performance, consider:

- **Speed**: How fast does the algorithm run?
- **Memory Usage**: How much memory does it consume?
- **Readability**: Is the code easy to understand and maintain?
- **Brevity**: Is the solution concise?

### The Solution: Big O Notation

Big O notation provides a standardized way to describe algorithm performance without relying on timing measurements. It focuses on the **worst-case scenario** and how the algorithm scales with input size.

## Counting Operations

- Rather than counting time, which is also variable, we count the _number_ of operations the computer has to perform

## Visualizing Time Complexity

[<Performance>Performance Tracker</u> ->](https://rithmschool.github.io/function-timer-demo/)

## Intro to Big O Notation

**It allows us to talk formally about how the runtime of an algorithm grows as the input grows**
It is a way to describe the upper bound (worst case scenario) of how the run time or space requirements of an algorithm grow in relation to the size of the input.

O-> Order Of

## Time Complexity

- What is runtime?
  - Runtime is the measure of something in seconds, milliseconds or any other unit

**Time Complexity is how the runtime scales as the input grows. This is how we understand how a function/algorithm performs**

### Main Types of Time Complexity

- Constant: O(1) -> O of 1
  Runtime stays the same no matter how big the input is
- Linear: O(n) -> O of n
  Runtime scales linearly as the input grows (45 degree angle)
- Quadratic: O(n²) -> O of n squared
  Runtime scales quadratically as the input grows
- Logarithmic: O(log n) -> O of log n
  Runtime scales logarithmically as the input grows

### Array Operations Complexity Table

| Operation                | Time Complexity | Space Complexity | Description                        |
| ------------------------ | --------------- | ---------------- | ---------------------------------- |
| **Access**               | O(1)            | O(1)             | Accessing an element by index      |
| **Search**               | O(n)            | O(1)             | Finding an element by value        |
| **Insertion**            |                 |                  |                                    |
| - At end (push)          | O(1)            | O(1)             | Adding element to the end          |
| - At beginning (unshift) | O(n)            | O(1)             | Adding element to the beginning    |
| - At middle (splice)     | O(n)            | O(1)             | Adding element at specific index   |
| **Deletion**             |                 |                  |                                    |
| - From end (pop)         | O(1)            | O(1)             | Removing last element              |
| - From beginning (shift) | O(n)            | O(1)             | Removing first element             |
| - From middle (splice)   | O(n)            | O(1)             | Removing element at specific index |
| **Sorting**              |                 |                  |                                    |
| - Built-in sort          | O(n log n)      | O(log n)         | JavaScript's default sort          |
| - Bubble Sort            | O(n²)           | O(1)             | Simple but inefficient             |
| - Quick Sort             | O(n log n)      | O(log n)         | Efficient divide-and-conquer       |
| - Merge Sort             | O(n log n)      | O(n)             | Stable sorting algorithm           |
| **Other Operations**     |                 |                  |                                    |
| - Slice                  | O(n)            | O(n)             | Creating a copy of portion         |
| - Concat                 | O(n)            | O(n)             | Combining arrays                   |
| - Reverse                | O(n)            | O(1)             | Reversing array in place           |
| - Join                   | O(n)            | O(n)             | Converting to string               |

### Key Insights:

1. **Random Access**: Arrays excel at O(1) access by index due to contiguous memory allocation
2. **Insertion/Deletion at Ends**: Very efficient O(1) operations
3. **Insertion/Deletion at Beginning/Middle**: Requires shifting elements, making it O(n)
4. **Search**: Linear time O(n) as you may need to check every element
5. **Sorting**: Most efficient algorithms achieve O(n log n) time complexity

### Practical Examples:

```javascript
// O(1) - Constant time operations
const arr = [1, 2, 3, 4, 5];
arr[2]; // Access by index
arr.push(6); // Add to end
arr.pop(); // Remove from end

// O(n) - Linear time operations
arr.indexOf(3); // Search by value
arr.unshift(0); // Add to beginning
arr.shift(); // Remove from beginning
arr.splice(2, 1); // Remove from middle

// O(n log n) - Sorting
arr.sort(); // Built-in sort
```

### When to Use Arrays:

**Best for:**

- Frequent random access by index
- Adding/removing elements at the end
- When you know the size in advance
- Sequential data processing

**Consider alternatives when:**

- Frequent insertions/deletions at beginning
- Need to search frequently (consider Set/Map)
- Dynamic size requirements (consider LinkedList)

## Constant Time Complexity

**O(1) -> O of 1**

- Constant time complexity means that the time required to complete a function is the same regardless of the size of the input data set.

```javascript
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
```

## Linear Time Complexity

**O(n) -> O of n**

**Linear Time Complexity means that the time required to complete a function is directly proportional to the size of the input data set**

```javascript
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.time('sumArray 1');
console.log(sumArray(arr1));
console.timeEnd('sumArray 1');

console.time('sumArray 2');
console.log(sumArray(arr2));
console.timeEnd('sumArray 2');
```
