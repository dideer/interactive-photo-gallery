function hasSubarraySum(arr, target) {
    // Initialize left pointer to the start of the array
    let left = 0;
    // Initialize currSum to keep track of the running sum of the current subarray
    let currSum = 0;
  
    // Iterate through the array with the right pointer
    for (let right = 0; right < arr.length; right++) {
      // Add the current element to currSum
      currSum += arr[right];
  
      // While currSum is greater than the target
      while (currSum > target) {
        // Subtract the leftmost element from currSum
        currSum -= arr[left];
        // Move the left pointer one step to the right
        left++;
      }
  
      // If currSum is equal to the target, we have found a subarray that sums up to the target
      if (currSum === target) {
        return true;
      }
    }
  
    // If we have exhausted the array and haven't found a subarray that sums up to the target
    return false;
  }