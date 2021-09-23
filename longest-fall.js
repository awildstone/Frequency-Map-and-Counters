/**
 * Write a function called longestFall, which accepts an array of integers, and returns the length of the longest consecutive decrease of integers.
 * 
 * @param {numbers[]} nums 
 * @returns number (count of longest fall)
 */

function longestFall(nums) {
    //case empty nums
    if (nums.length === 0) return 0;

    let highestCount = 0;
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i-1] > nums[i]) {
            count++;
            highestCount = Math.max(highestCount, count);
        } else {
            //chain is broken reset count
            count = 1;
        }
    }

    return Math.max(highestCount, count);
}

module.exports = longestFall;
