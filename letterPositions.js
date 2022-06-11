const eqArrays = function(arr1, arr2) {
  
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  //this is the happy path
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  
  if (!result) {
    console.log(`🛑Assertion Failed🛑: [${arr1}] !== [${arr2}]`);
    return;
  }

  console.log(`✅Assertion Passed✅: [${arr1}] === [${arr2}]`);
};

const letterPositions = function(sentence) {
  const results = {};

  for (let letter of sentence) {
    if (letter !== " ") {
      if (!results.hasOwnProperty[letter]) {
        results[letter] = [];
      }
    }
  }
  for (let i = 0; i < sentence.length; i++) {
    
    if (results.hasOwnProperty(sentence[i])) {
      results[sentence[i]].push(i);
    }
  }
  return results;
};
let results = letterPositions("lighthouse in the house");
assertArraysEqual(results.l, [0]);

console.log(results);

module.exports = letterPositions;
