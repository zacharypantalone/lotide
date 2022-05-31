const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑Assertion Failed🛑: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(sentence) {
  let resultObject = {};

  for (let letters of sentence) {
    if (letters !== " ") {
      if (resultObject[letters]) {
        resultObject[letters] += 1;
      } else {
        resultObject[letters] = 1;
      }
    }
  }
  return resultObject;
};

console.log(countLetters("lighthouse in the house"));
