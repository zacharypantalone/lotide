const takeUntil = function(array, callback) {
  const result = [];

  for (let item of array) {
    if (callback(item) === true) {
      return result;
    }
    result.push(item);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5]; // => [ 1, 2, 5, 7, 2 ]
const results1 = takeUntil(data1, (x) => x < 0);

console.log(results1);

const data2 = [

  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",

];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

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

//treat if like a filter, check for what you DON'T want

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  
  if (!result) {
    console.log(`🛑Assertion Failed🛑: [${arr1}] !== [${arr2}]`);
    return;
  }

  console.log(`✅Assertion Passed✅: [${arr1}] === [${arr2}]`);
};

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;