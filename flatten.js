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

const assertArraysEqual = function (arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (!result) {
    console.log(`🛑Assertion Failed🛑: [${arr1}] !== [${arr2}]`);
    return;
  }

  console.log(`✅Assertion Passed✅: [${arr1}] === [${arr2}]`);
};

const flatten = function(arr) {
  /* so maybe what I would want to do is take this one array and join it somehow, then push it
  into an empty array and return that.*/
  //let's declare our empty array here
  let result = [];

  //Let's loop through flattenedArr parameter here.
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      result.push(parseInt(arr[i].join(', ')));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
