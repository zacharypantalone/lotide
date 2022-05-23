//Let's impliment a function that can compare two arrays for a perfect match.

const assertEqual = function(actual, expected) {
  let count = 0;
  for (let i = 0; i < actual.length; i++) {
    
    if (actual[i] === expected[i]) {
      count += 1;
    }
  }
  if (count === actual.length) {
    console.log(`✅Assertion Passed✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑Assertion Failed🛑: [${actual}] !== [${expected}]`);
  }
};
    
assertEqual([1, 2, 3], [1, 2, 3]);
assertEqual([1, 2, 3], [3, 2, 1]);

