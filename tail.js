

const assertEqualArray = function(actual, expected) {
  // We want to check if both arrays are empty
  if (actual.length === 0 & expected.length === 0) {
    return true;
  }
  // We want to check if the lengths are the same
  if (actual.length === expected.length) {
    // if the lengths are the same and if the items in both arrays match
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const tail = function(listOfItems) {
  
  const lengthOfListOfItems = listOfItems.length;
  const tail = listOfItems.slice(1, lengthOfListOfItems);
  console.log(tail);
  return tail;
  
};



module.exports = {tail, assertEqualArray};





// Create a function tail which returns
// +the "tail" of an array: everything except for the first item (head) of the provided array.
