const tail = function(listOfItems) {
  const lengthOfListOfItems = listOfItems.length;
  const tail = listOfItems.slice(1, lengthOfListOfItems);
  
  console.log(tail);
  return tail;
  
};



module.exports = tail;





// Create a function tail which returns
// +the "tail" of an array: everything except for the first item (head) of the provided array.
