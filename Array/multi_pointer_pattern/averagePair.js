// Find the given avg in the array.
// Inputs = array of numbers, avg.
// Output = boolean if true is exists, false if not.
// Simple ex = averagePair([1, 2, 3], 2.5); // true
// Complex ex = averagePair([-1,0,3,4,5,6], 4.1); // false
// Empty inputs = averagePair(); // false
// Invalid inputs = averagePair(1, false); // false

// Solution 1: O(n2), SC: O(1)
function averagePair(arr, avg) {
    if (!Array.isArray(arr) || typeof avg !== "number") return false;
    if (arr.length < 2 || avg < 0) return false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const tempAvg = (arr[i] + arr[j]) / 2;
            if (avg === tempAvg) return true;
        }
    }
    return false;
}

// Solution 2: O(n), SC : O()
function averagePair(arr, avg) {
    if (!Array.isArray(arr) || typeof avg !== "number") return false;

    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        const tempAvg = (arr[l] + arr[r]) / 2;
        if (tempAvg === avg) return true;
        else if (tempAvg < avg) l++;
        else r--;
    }
    return false;
}
averagePair([1, 2, 3], 2.5);