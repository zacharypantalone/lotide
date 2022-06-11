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

module.exports = flatten;


