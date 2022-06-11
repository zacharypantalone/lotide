const middle = function(arr) {
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
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])); // => [3]



module.exports = middle;

