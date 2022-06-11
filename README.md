# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @zachary.pantalone/lotide`

**Require it:**

`const _ = require('@zachary.pantalone/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* Function(head) : This function takes in an array as the argument and returns the element that is indexed at [0].

* Function(tail) : This function returns everything except for the first item (head) of the provided array.

* Function(middle) : This function takes in an array as the argument and reterns the middle element of that array.

* Function(countLetters) : This function takes in an array as the argument and returns the number of times each
  letter appears within that array.  

* Function(countOnly) : This function takes in two arguments; one is collection of items and another which items we
  letter appears within that array.

* Function(eqArrays) : This function takes in two arrays as arguments and compares wether or not they are equal in
  and if they match up per element.

* Function(eqObjects) : This function takes in two objects as arguments and compares wether or noth their
  key-value pairs match up.

* Function(findKey) : This function takes in an object as one argument and the other argument is to find a  
  specific key.  

* Function(findKeyByValue) : This function takes in an object as one argument and the other argument is to find
  a key by it's value.

* Function(flatten) : This function takes in an array as an object and will return that array flattened if it finds
  any nested arrays within it.

* Function(letterPositions) : This function takes in an array as a argument and returns an object with the keys
  defined as the letters in that array and it's values defined as the number of times that letter appears. 

* Function(map) : This higher order function takes in an array and then a callback function as it's second argument
  that will pluch the [0] indexed element of each element of the array provided.

* Function(takeUntil) : This function takes two arguements; one is an array and another is a condition that tell
  the function to stop taking elements away to return until a specefic given condition is met.

* Function(without) : This function takes in an array as one argument and another array which indicates which
  elements to pull out of the first array.