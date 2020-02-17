import React from "react";

// function Add(a, b) {
//   return a + b;
// }

// function Subtract(a, b) {
//   return a - b;
// }

function Multiply(a, b) {
  return a * b;
}

// function Divide(a, b) {
//   return a / b;
// }

function Calculate(props) {
  return (
    <div>
      <p>{Multiply(props.num1, props.num2)}</p>
    </div>
  );
}

export default Calculate;
