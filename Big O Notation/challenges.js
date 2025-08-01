//CHALLENGE-> Max Sub array QUADRATIC

//Write a function called maxSubarraySum that takes an array of integers and a positive integer k as input. The function should find the maximum sum of any subarray of length k using an O(n^2) solution by using nested for loops.

/**
 Constraints
The input integer k will be between 1 and the length of the array.

Hints
You can use a nested loop to iterate through all possible sub arrays of length k and calculate their sums.
 */

/**
 * Finds the maximum sum of any subarray of length k using O(n²) approach
 * @param {number[]} arr - Array of integers
 * @param {number} k - Length of subarray to find
 * @returns {number|string} Maximum sum or error message
 *
 * Time Complexity: O(n²) - Nested loops where outer loop runs (n-k+1) times
 *                  and inner loop runs k times for each iteration
 * Space Complexity: O(1) - Only using a constant amount of extra space
 */
function maxSubarraySum(arr, k) {
  // Edge case: if k is larger than array length, it's impossible
  if (k > arr.length) {
    return 'Sub array length cannot be larger than array length';
  }

  // Initialize maxSum to track the highest sum found so far
  let maxSum = -Infinity;

  // Outer loop: iterate through all possible starting positions for sub arrays. We only need to check up to arr.length - k because beyond that, we can't form a complete subarray of length k
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;

    // Inner loop: calculate sum of subarray starting at position i. This loop runs k times to sum up k consecutive elements
    for (let j = i; j < i + k; j++) {
      console.log(arr[j]); // Debug: show each element being added
      currentSum += arr[j];
    }

    console.log('current sum', currentSum); // Debug: show sum of current subarray

    // Update maxSum if current subarray has a higher sum

    // if (currentSum > maxSum) maxSum = currentSum;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

/**
 * COMPLEXITY ANALYSIS:
 *
 * Time Complexity: O(n²)
 * - Outer loop runs (n-k+1) times ≈ O(n) when k is much smaller than n
 * - Inner loop runs k times for each outer iteration
 * - Total operations: (n-k+1) × k = nk - k² + k
 * - When k is proportional to n (e.g., k = n/2), this becomes O(n²)
 * - Even when k is small, we still have O(n) iterations in outer loop
 *
 * Space Complexity: O(1)
 * - Only using constant extra space: maxSum, currentSum, i, j
 * - No additional data structures that grow with input size
 * - Space usage remains the same regardless of array size
 *
 * Example with arr1 = [2,5,3,1,11,7,6,4], k = 3:
 * - n = 8, k = 3
 * - Outer loop iterations: 8-3+1 = 6 times
 * - Inner loop iterations: 3 times per outer iteration
 * - Total: 6 × 3 = 18 operations
 * - As n grows, this approaches O(n²) complexity
 */

// Test cases
const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
const k1 = 3;

const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
const k2 = 4;

// console.log('Max sum: ', maxSubarraySum(arr1, k1));
// console.log('Max sum: ', maxSubarraySum(arr2, k2));

/**
 * Sliding Window Technique - MAX SUB ARRAY LINEAR
 *
 * This function finds the maximum sum of any subarray of length k using the sliding window technique.
 * Instead of recalculating the sum of each subarray from scratch, we maintain a "window" of k elements
 * and slide it one position at a time, updating the sum efficiently.
 *
 * @param {number[]} arr - Array of integers
 * @param {number} k - Length of subarray to find
 * @returns {number} Maximum sum of any subarray of length k
 *
 * Time Complexity: O(n) - We only traverse the array once
 * Space Complexity: O(1) - Only using constant extra space
 */
function maxSubarraySlidingWindow(arr, k) {
  // Step 1: Initialize variables to track current window sum and maximum sum found
  let currentSum = 0; // Holds the sum of the current sliding window
  let maxSum = 0; // Holds the maximum sum found so far

  // Step 2: Calculate the sum of the first window (first k elements)
  // This gives us our initial window sum and sets maxSum to a valid starting value
  for (let i = 0; i < k; i++) {
    maxSum += arr[i]; // Add each element of the first window to maxSum
  }

  // Step 3: Set currentSum to the sum of the first window
  // Now both currentSum and maxSum represent the sum of the first k elements
  currentSum = maxSum;

  // Step 4: Slide the window one position at a time and update sums
  // Start from index k (the element after our first window ends)
  for (let i = k; i < arr.length; i++) {
    // Step 4a: Slide the window by removing the leftmost element and adding the new rightmost element
    // arr[i - k] is the element leaving the window (leftmost element of previous window)
    // arr[i] is the new element entering the window (rightmost element of new window)
    currentSum = currentSum - arr[i - k] + arr[i];

    console.log('Current sum :', currentSum); // Debug: show the sum of current window

    // Step 4b: Update maxSum if the current window has a higher sum
    maxSum = Math.max(maxSum, currentSum);
  }

  // Step 5: Return the maximum sum found across all windows
  return maxSum;
}
// console.log('Max sum: ', maxSubarraySlidingWindow(arr1, 3));
