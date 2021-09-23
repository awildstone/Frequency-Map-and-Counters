/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 * 
 * @param {number} num1 
 * @param {number} num2 
 */

function sameFrequency(num1, num2) {
    const num1Map = countDigitsMap(num1);
    const num2Map = countDigitsMap(num2);

    if (num1Map.size !== num2Map.size) return false;

    for (let key of num1Map.keys()) {
        if (!num2Map.has(key)) return false;
        if (num1Map.get(key) !== num2Map.get(key)) return false;
    }
    return true;
}

/**
 * Helper function to map the number of digits in a number.
 * 
 * @param {number} number 
 */
function countDigitsMap(number) {
    let stringNum = String(number);
    let digitMap = new Map();

    for (let num of stringNum) {
        let numCount = digitMap.get(num) || 0;
        digitMap.set(num, numCount + 1);
    }

    return digitMap;
}

module.exports = sameFrequency;
