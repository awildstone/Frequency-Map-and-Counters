const { typeOf } = require("react-is");

/**
 * Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.
 * 
 * @param {number[]} nums 
 * @param {number} sum 
 * @returns total number of pairs
 */
function countPairs(nums, sum) {
    let numOfPairs = 0;
    //convert the array into a map so we can find/remove values in O(1) time
    let numsMap = generateMap(nums);
    
    for (let key of numsMap.keys()) {
        let diff = sum - key;
        numsMap.delete(key);
        if (numsMap.has(diff)) {
            numOfPairs++;
        }
    }

    return numOfPairs;
}

function generateMap(array) {
    let numsMap = new Map();

    for (let i = 0; i < array.length; i++) {
        numsMap.set(array[i], i);
    }
    return numsMap;
}

module.exports = countPairs;
