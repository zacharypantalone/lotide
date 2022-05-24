const eqArrays = function (arr1, arr2) {
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

const without = function(source, itemsToRemove) {
  
  let result = [];
  
  for (let i = 0; i < source.length; i++) {
    
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // 2, 3
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);






