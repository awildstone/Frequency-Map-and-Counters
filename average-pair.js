/**
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
 * 
 * @param {int[]} nums 
 */

function averagePair(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let average = nums[left] + nums[right] / 2;

        if (average === target) return true;

        if (average < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

module.exports = averagePair;