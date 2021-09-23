/**
 * Write a function called constructNote, which accepts two strings, a message and  some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
 * 
 * Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
 * 
 * @param {string, string} message, letters
 * @returns true/false
 */

/** 
 * Helper function to generate a Map of character and frequency counts. 
 * */

function generateCountMap(string) {
    let letterCounts = new Map();

    for (let char of string) {
        let charCount = letterCounts.get(char) || 0;
        letterCounts.set(char, charCount + 1);
    }
    return letterCounts;
}

function constructNote(message, letters) {
    if (message.length > letters.length) return false;
   
    const messageMap = generateCountMap(message);
    const lettersMap = generateCountMap(letters);

    for (let key of messageMap.keys()) {
        if (!lettersMap.has(key)) return false;
        if (messageMap.get(key) > lettersMap.get(key)) return false;
    }
    return true;
}

module.exports = constructNote;