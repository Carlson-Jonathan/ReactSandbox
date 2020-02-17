/******************************************************************************
 * This is an example of how to print out a normal array using the map()
 * function. It also illustrates how you can use alternative syntax to declare
 * an anonymous function to make code shorter, and possibly more readable.
 ******************************************************************************/
import React from "react";

// Example of how to modify an array using map():
var someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Vanilla method when using an anonymous function:
const modifiedArray = someArray.map(function(num) {
  return num * 2;
  // modifiedArray outputs "2, 4, 6, 8..."
});

// Alternative (optional) syntax 1 for declaring anonymous functions:
const alternateArray1 = someArray.map(num => {
  return num * 3;
});

// Alternative syntax 2 for declaring anonymous functions:
const alternateArray2 = someArray.map(num => num * 4);

// Though it is possible to use more than 1 parameter and have more than 1
// statmenet with the alternateive syntax, it would be better to use
// traditional for readability.

/******************* Display everything to the HTML output ******************/
let example, arrayToDisplay;

// Select which array you want to display
example = 2;

if (example === 1) arrayToDisplay = modifiedArray;
else if (example === 2) arrayToDisplay = alternateArray1;
else if (example === 3) arrayToDisplay = alternateArray2;

// Note: the index and key is to eliminate a warning only.
function ShowNumber(displayArray, index) {
  return (
    <div key={index}>
      <p style={{ float: "left" }}>{displayArray},&nbsp;</p>
    </div>
  );
}

function ShowAllNumbers() {
  return (
    <div>
      <br />
      Your array is... {arrayToDisplay.map(ShowNumber)}
    </div>
  );
}

export default ShowAllNumbers;
