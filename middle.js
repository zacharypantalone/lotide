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

const middle = function (arr) {
  let result = [];

  if (arr.length < 3) {
    return "Not enough elements";
  }
  if (arr.length % 2 !== 0) {
    let i = (arr.length - 1) / 2;
    result.push(arr[i]);
  } else {
    let i = arr.length / 2;
    result.push(arr[i - 1]);
    result.push(arr[i]);
  }

  return result;
};
//console.log(middle([1, 2, 3])); // => [2]
//console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [3]

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
