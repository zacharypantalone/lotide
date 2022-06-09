const tail = require('../tail');
const assert = require('chai').assert;




//const result = tail(["Hello", "Lighthouse", "Labs"]);


describe("#tail", () => {
  
  it("returns ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });





});