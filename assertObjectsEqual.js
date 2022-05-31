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

const eqObjects = function(object1, object2) {
  
  let object1keys = Object.keys(object1);
  let object2keys = Object.keys(object2);
  if (object1keys.length !== object2keys.length) {
    return false;
  }
  
  
  for (let currentKey of object1keys) {
    const object1value = object1[currentKey];
    const object2value = object2[currentKey];

    //check if both value are arrays and if the are equal.
    
    if (Array.isArray(object1value) && Array.isArray(object2value)) {
      const arrayResult = eqArrays(object1value, object2value);
      
      if (arrayResult === false) {
        return false;
      }

    } else {
      //we get here only if the objects are not arrays
      if (object1value !== object2value) {
        return false;
      }

    }
    
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual, expected);
  
  if (!result) {
    console.log(`🛑Assertion Failed🛑: [${inspect(actual)}] !== [${inspect(expected)}]`);
    
    return;
  }
  console.log(`✅Assertion Passed✅: [${inspect(actual)}] === [${inspect(expected)}]`);

};

assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});


