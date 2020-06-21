const longestSequence = require('./LongestSequence');

const tests = [
 { randomNum: [], maxSequence: 0 },
 { randomNum: [2, 4, 5], maxSequence: 2 },
 { randomNum: [2, 5, 6, 1, 8, 3, 10, 4], maxSequence: 6 },
 { randomNum: [2, 5, 6, 1, 8, 3, 10, 4, 0], maxSequence: 7 },
 { randomNum: [-1, -5, -3, -4, 0, 2, -2, -1], maxSequence: 6 },
 { randomNum: [-1, -5, -3, -4, 0, 2, -1], maxSequence: 3 },
 { randomNum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], maxSequence: 10 },
 { randomNum: [2, 5, 6, 1, 8, 3, 10, 0, -1], maxSequence: 8 },  // Wrong test case on purpose
];

let { randomNum: numArr, maxSequence: result } = { randomNum: 0, maxSequence: 0 };
tests.forEach(test => {
 ({ randomNum: numArr, maxSequence: result } = test);
 console.log('Input: ' + numArr + ' Output: ' + result +' --> ', areEqual(longestSequence(numArr), result));
})

function areEqual(a, b) {
 if (a === b){
  return true;
 }else{
  return `Expected: ${b} Got: ${a}, ${a===b}`;
 }
}