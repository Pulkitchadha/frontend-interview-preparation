// Frequency counter

1. Understand the problem:
* Write the problem in your words. = Check 2 array has same value and frequency.
* What are the inputs ? = 2 inputs - arr1 & arr2.
* What are the outputs ? = Boolean, True if same and false if not same.
* Can we determine the outputs from the input ? = yes, we can determine.
* Add comments for imp parts.

2. Explore concrete examples:
* Start with a simple example.
* Complex examples.
* Example with empty inputs.
* Examples with invalid inputs.

=> same([1, 2, 3], [1, 4, 9]) // true
=> same([1, 2, 1], [4, 1, 1]) // true
=> same([2, 2, 1], [1, 1, 4]); // false
=> same([2, 2, 1, 1], [1, 1, 4]); // false
=> same(); // false
=> same(true, false) // false
=> same("test", 10) // false

3. Break it down:
* Write the Pseudocode of the program.Don't start writing the code OR we can say write down the steps you need to take.

a.

4. Solve or simplify:
* Find the core difficulty in your program.
* Temporarily ignore that difficulty.
* Write a simplified solution.
* Incorporate that difficulty

5. Look back and refactor:
* Check the result or output.
* Can you understand it at a glance ?
* Can you use the method or solution for some other problem.
* Can you improve the performance of the solution ?
* Think about other solutions to the problem.
* Check how other people solved this problem.

// 1st appraoch : O(n2)
function same(arr1 = [], arr2 = []) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        let exist = false;
        const sq = arr1[i] ** 2;
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] === sq) {
                exist = true;
                arr2.splice(j, 1);
                break;
            }
        }
        if (!exist) return false;
    }
    return true;
}

// 2nd appraoch : O(n)
function same(arr1 = [], arr2 = []) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if (arr1.length !== arr2.length) return false;
}


same([1, 2, 3], [4, 1, 9])
















