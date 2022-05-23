//Let's impliment a function that can compare two arrays for a perfect match.

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

const assertArrayEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (!result) {
    console.log(`🛑Assertion Failed🛑: [${arr1}] !== [${arr2}]`);
    return;
  }
  
  console.log(`✅Assertion Passed✅: [${arr1}] === [${arr2}]`);
};

assertArrayEqual([1, 2, 3], [1, 2, 3]);
assertArrayEqual([1, 2, 3], [3, 2, 1]);
  
    

