'use strict'
const sequence = [2, 5, 6, 1, 8, 3, 10, 4];

const set = new Set();

sequence.forEach((num) => (set.add(num)));

console.log(set);

let i = 0;
let length = 0;
let maxLength = 0;
let setIttr = set.values();

while (i < sequence.length) {
 
  let start = setIttr.next().value;
  let tmep = start-1;
  while (set.has(++tmep)) {
  set.delete(tmep);
  length++;  
  i++;
 }

 tmep = start;

 while(set.has(--tmep)){
  set.delete(tmep);
  length++;  
  i++;
 }

 if(length > maxLength){
  maxLength = length;
  length = 0;
 }

}

console.log(maxLength);
