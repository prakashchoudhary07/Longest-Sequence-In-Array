'use strict'

function longestSequence(sequence) {

 const set = new Set();

 sequence.forEach((num) => (set.add(num)));

 let length = 0;
 let maxLength = 0;
 let setIttr = set.values();
 let { value: start, done: done } = setIttr.next();

 while (!done) {
  
  let temp = start - 1;
  while (set.has(++temp)) {
   set.delete(temp);
   length++;
  }

  temp = start;

  while (set.has(--temp)) {
   set.delete(temp);
   length++;
  }

  maxLength = Math.max(maxLength, length);

  length = 0;

  ({ value: start, done: done } = setIttr.next());

 }

 return maxLength;

}


module.exports = longestSequence;
