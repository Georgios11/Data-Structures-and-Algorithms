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

## Quadratic Time Complexity

**O(n²) -> O of n squared**

**Quadratic time complexity means that the time required to complete a function is proportional to the square of the input data set**

**Less efficient than linear time**

```javascript
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
console.time('sumArray1');
console.log(sumArray2(arr1)); //90;
console.timeEnd('sumArray1'); //0.097900390625 ms
console.time('sumArray2');
console.log(sumArray2(arr2)); //500100005000
console.timeEnd('sumArray2'); //sumArray2: 98.31103515625 ms
```

## Logarithmic Time Complexity

**O(log n) -> O of log n**

**Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set**

**What it means: The work the algorithm does grows much more slowly than the input—specifically, with the logarithm of the input size. If you double the input, you only do a tiny bit more work (one extra step if using base-2 log).**

- Example: Binary search in a sorted array.
  - 10 elements → about 4 steps (since log₂10 ≈ 3.3)
  - 1,000 elements → about 10 steps (since log₂1,000 ≈ 9.97)
  - 1,000,000 elements → about 20 steps (since log₂1,000,000 ≈ 19.9)

```javascript
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
console.log(findPower(2, 100)); //1.2676506002282294e+30
console.timeEnd('Find Power 1'); //Find Power 1: 0.119140625 ms
console.time('Find Power 2');
console.log(findPower(2, 1000000)); //Infinity
console.timeEnd('Find Power 2'); //Find Power 2: 0.02880859375 ms
```

**As the input data set grows, it gets more efficient**

## Space Complexity

**Space complexity refers to the amount of memory or storage space that a function/algorithm consumes based on the size of its input**

**Both time and space complexity are expressed in Big O Notation**

**In many cases, the space complexity of a function will be the same as the time complexity, however, this is not always the case**

### Space Complexity Rules

1. Variables & data structures take up space
2. Function calls take up space
3. The space complexity of a function is the sum of the space complexities of that functions variables, data structures and function calls

## Sliding Window Technique

The sliding window technique is a powerful algorithmic approach used to solve various array or string-related problems efficiently. It involves maintaining a "window" that slides through an array or string, allowing you to track and process a subset of elements without the need for nested loops.

This technique can be used to maximize the time complexity of your algorithms. In the last video, we did a sub array sum algorithm that used nested for loops and had a time and space complexity of O(n^2), which is not very efficient. In the next video, we're going to refactor that solution and make it linear O(n) by using this sliding window technique. The reason I'm showing you this technique is to give you an example of doing the same thing and improving efficiency and complexity.

- Finding subarrays with specific properties
- Calculating sums, averages, or other metrics over a fixed-size window
- Finding the longest/shortest substring with certain characteristics
- Optimizing algorithms that would otherwise use nested loops

### How It Works

1. **Initialize Variables**: Set up two pointers, usually named left and right, to define the boundaries of the sliding window. Additionally, you might need variables to store the current state, like sums or frequencies. For our example, we'll need a currentSum and maxSum
2. **Initial Window**: We start by positioning the window at the beginning of the array or string and calculate the initial state or value based on the elements within the window. Since we're getting the sum of k elements, we'll start with a window of k elements. In this example k or the window size is 3.
3. **Slide the Window**: We'll move the right pointer to the right, expanding the window by one element. Update the state or value based on the newly added element. In our case, we would calculate the new sum with the new element.
4. **Adjust the Window**: Depending on specific conditions or constraints, you might need to shrink or adjust the window by moving the left pointer to the right, thus excluding an element from the window. Again, update the state accordingly.
5. **Repeat**: Continue sliding and adjusting the window until the right pointer reaches the end of the array or string. During this process, keep track of the desired information (maximum/minimum, frequency, substring, etc.).

### Advantages

- **Optimized Time Complexity**: Sliding window reduces the time complexity by avoiding redundant calculations. It's particularly beneficial for situations where brute-force solutions would require nested loops.
- **Space Efficiency**: The technique doesn't require storing all individual subarrays or substrings, reducing memory usage.

- **Elegant -Simple Solutions**: Once understood, sliding window problems often become easier to solve compared to their naive counterparts.

### Notes

- Sliding window is best suited for problems that involve contiguous subarrays or substrings.
- The technique can have variations such as dynamic window size or two-pointer sliding.
- Be cautious of edge cases where the window size becomes important for efficiency or correctness.

### Example: Maximum Sum Subarray of Size K

```javascript
function maxSumSubarray(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i]; // Remove first, add new
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Example usage
const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
console.log(maxSumSubarray(arr, 4)); // Output: 24 (subarray [2, 10, 2, 3])
```

### Time Complexity Analysis

- **Time Complexity**: O(n) - we only traverse the array once
- **Space Complexity**: O(1) - we only use a constant amount of extra space
- **Without sliding window**: This would typically require O(n\*k) time with nested loops

### Variable Window Example: Longest Substring Without Repeating Characters

```javascript
function longestSubstringWithoutRepeating(str) {
  let start = 0;
  let maxLength = 0;
  let charMap = new Map();

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    // If character exists in current window, move start pointer
    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      start = charMap.get(currentChar) + 1;
    }

    charMap.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage
console.log(longestSubstringWithoutRepeating('abcabcbb')); // Output: 3 ("abc")
console.log(longestSubstringWithoutRepeating('bbbbb')); // Output: 1 ("b")
```

This technique is essential for optimizing array/string processing algorithms and is frequently used in coding interviews and real-world applications.
