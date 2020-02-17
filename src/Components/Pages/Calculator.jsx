import React from "react";

function Add(a, b) {
  return a + b;
}

function Subtract(a, b) {
  return a - b;
}

function Multiply(a, b) {
  return a * b;
}

function Divide(a, b) {
  return a / b;
}

function Display() {
  return (
    <div>
      <h3>React Caclulator:</h3>
      <form method="get" action="ebay.com">
        <input type="number" name="num1" />
        <br />
        <input type="number" name="num2" />
        <br />
        <select>
          <option value="add">Add</option>
          <option value="sub">Subtract</option>
          <option value="mul">Multiply</option>
          <option value="div">Dividie</option>
        </select>
        <input type="submit" value="Calculate" />
      </form>
    </div>
  );
}

export default Display;
export { Add, Subtract, Multiply, Divide };
