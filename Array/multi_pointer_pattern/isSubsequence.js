// check if a string is subsequence in another string.
// Input - s1 string, s2 string.
// Output - boolen true if yes, false if no.
// Simple ex - isSubsequence("hi", "hi welcome"); // true
// Complex ex - isSubsequence("abc", "acb"); // false (order matters)
// Invalid input - isSubsequence(false, 10); // false
// Empty input - isSubsequence(); // false
// Empty input - isSubsequence("",""); // false


// Solution 1st : O(n), SC: O(1)
function isSubsequence(s1, s2) {
    if (typeof s1 !== "string" || typeof s2 !== "string") return false;
    if (!s1.length || !s2.length) return false;

    let i = 0;
    let j = 0;

    while (i <= s1.length) {
        if (s1[i] === s2[j]) i++;
        if (i === s1.length) return true;
        j++;
    }
    return false;
}

isSubsequence("abc", "acb");
