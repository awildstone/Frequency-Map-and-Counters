/**
 * Write a function called pivotIndex which accepts an array of integers, and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right. If there are more than one valid pivot index, return the smallest value.
 * 
 * @param {numbers[]} nums 
 * @returns number (index)
 */

function pivotIndex(nums) {
    if (nums.length <= 2) return -1;

    //get the total sum of all of the numbers for the right, the leftSum initialized to 0;
    let rightSum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        //calculate the left sum from the current index
        leftSum += nums[i];

        if (leftSum === rightSum) return i;

        //subtract the value from the right side as we shift i right
        rightSum -= nums[i];
    }

    return -1;
}

module.exports = pivotIndex;
