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


const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["you", "can't", "always", "get", "what", "you", "want"];
const words3 = ["eight", "days", "a", "week"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};




const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
//assertArraysEqual([1, 2, 3], [3, 2, 1]);

const results2 = map(words2, word => word[0]);
assertArraysEqual(results2, ['y', 'c', 'a', 'g', 'w', 'y', 'w']);


const results3 = map(words3, word => word[0]);
assertArraysEqual(results3, ['e', 'd', 'a', 'w']);