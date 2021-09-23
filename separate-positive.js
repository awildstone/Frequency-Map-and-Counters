/**
 * Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).
 * 
 * @param {numbers[]} nums 
 * @returns nums modified in place
 */

function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] < 0 && nums[right] > 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        } else if (nums[left] > 0) {
            left++;
        } else if (nums[right] < 0) {
            right--;
        }
    }

    return nums;
}

module.exports = separatePositive;