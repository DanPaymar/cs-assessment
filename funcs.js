// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true;
            }
        }
    }
    return false;
}
console.log(addToZero([1, 3, 3, -1]));

// O(n2) time complexity

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

const hasUniqueChars = (word) => {
    let charArray = [];

    for (let i = 0; i < word.length; i++) { // loop over the word
        if (charArray.includes(word[i])) { 
            return false; 
        }
        charArray.push(word[i]); // push the chars of word into the array
    }
    return true; 
}
console.log(hasUniqueChars("Monday")); 
console.log(hasUniqueChars("Moonday")); 

// O(n) time complexity

// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(str) {
    const regex = /([a-z])(?!.*\1)/g;
    return (str.toLowerCase().match(regex) || []).length === 26;
}

const str = 'The quick brown fox jumps over the lazy dog';
console.log(`The string "${str}" is ${isPangram(str) ? 'a pangram' : 'not a pangram'}.`);

// O(n) time complexity
// O(1) space complexity

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

let arr = ["hi", "hello", "goodbye"]
function findLongWord() {
    return arr.sort(function (a, b) {
        return b.length - a.length
    })[0]
}
console.log(findLongWord())

// O(n) complexity