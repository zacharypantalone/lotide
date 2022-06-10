const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed✅: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑Assertion Failed🛑: [${actual}] !== [${expected}]`);
  }
  
};

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



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

let result1 = eqObjects(cd, dc);
assertEqual(result1, true);

const cd2 = { c: "1", d: ["2", 3, 4] };
let result2 = eqObjects(cd, cd2);
assertEqual(result2, false); // => false

module.exports = eqObjects;
    
 

/*const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false*/

