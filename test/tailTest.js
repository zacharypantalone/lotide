const {tail, assertEqualArray} = require('../tail');




const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqualArray(result, ["Lighthouse", "Labs"]));