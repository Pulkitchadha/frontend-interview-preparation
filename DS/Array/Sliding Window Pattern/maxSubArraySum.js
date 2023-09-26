// Sliding window Pattern
// Max sum of subarray
// Inputs : arr of number, number
// Output : number (Max Sum)
// maxSubarraySum([1,2,3,4,1,2,3,4],2) // 7
// maxSubarraySum([2,6,9,2,1,8,5,6,3],3) // 9
// maxSubarraySum([2,6],4) // 8
// maxSubarraySum() // 0
// maxSubarraySum(false, "test"); // 0

// Solution 1: O(n2), SC: O(1)
function maxSubarraySum(arr, n) {
    if (!Array.isArray(arr) || typeof n !== "number") return 0;
    if (!arr.length) return 0;

    let max = -Infinity;
    for (let i = 0; i < arr.length - n + 1; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += arr[i + j];
        }
        if (max < sum) {
            max = sum;
        }
    }
    return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)


// Solution 2: O(2n) = O(n), SC: O(1)
function maxSubarraySum(arr, n) {
    if (!Array.isArray(arr) || typeof n !== "number") return null;
    if (!arr.length || n < 1) return null;

    let tempSum = 0;
    let maxSum = 0;

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = 0; i < arr.length; i++) {
        tempSum = tempSum - arr[i] + arr[i + n];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    // ------------------- OR -----------------------
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

//          i
// 2, 6, 9, 2, 1, 8, 5, 6, 3
//             j