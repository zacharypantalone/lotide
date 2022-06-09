const eqArrays = require('./eqArrays');

//treat if like a filter, check for what you DON'T want

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (!result) {
    console.log(`🛑Assertion Failed🛑: [${arr1}] !== [${arr2}]`);
    return;
  }

  console.log(`✅Assertion Passed✅: [${arr1}] === [${arr2}]`);
};


assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

module.exports = assertArraysEqual;
