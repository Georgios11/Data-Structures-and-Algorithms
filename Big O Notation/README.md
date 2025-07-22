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
