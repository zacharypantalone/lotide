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

module.exports = countLetters;
