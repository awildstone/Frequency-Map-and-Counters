/**
 * 
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 * 
 * @param {string} sub 
 * @param {string} string 
 * @returns boolean
 */

function isSubsequence(sub, string) {
    //case substring is larger than string
    if (sub.length > string.length) return false;
    //case substring is empty
    if (!sub.length) return true;

    let subIndex = 0;
    let stringIndex = 0;
  
    while (stringIndex <= string.length - 1) {
        if (sub[subIndex] === string[stringIndex]) subIndex++;
        if (subIndex === sub.length) return true;

        //we haven't found the end of the subsequene so shift the stringIndex
        stringIndex++;
    }

    return false;  
}

module.exports = isSubsequence;
