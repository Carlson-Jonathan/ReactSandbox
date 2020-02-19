import React, { useState } from "react";
import Calculate from "./DoMath";

function Display() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [answer, setAnswer] = useState(0);

  function Calculate() {
    console.log("Calculate was called");
    let answer;
    switch (operator) {
      case 1:
        setAnswer(Number(num1 + num2));
        setOperator("+");
        break;
      case 2:
        setAnswer(num1 + num2);
        setOperator("-");
        break;
      case 3:
        setAnswer(num1 + num2);
        setOperator("x");
        break;
      case 4:
        setAnswer(num1 + num2);
        setOperator("/");
        break;
      default:
        answer = 0;
    }
  }

  function SetNum1(event) {
    setNum1(event.target.value);
    setAnswer(num1 + num2);
    console.log("Num1 = " + num1);
  }

  function SetNum2(event) {
    setNum2(event.target.value);
    setAnswer(num1 + num2);
    console.log("Num2 = " + num2);
  }

  return (
    <div className="main">
      <h3>React Calculator:</h3>
      <label>
        First Number:
        <input type="number" onChange={SetNum1} style={{ width: "50px" }} />
      </label>
      <label>
        Second Number:
        <input type="number" onChange={SetNum2} style={{ width: "50px" }} />
      </label>
      <br />
      <label>
        Operation:
        <select onChange={Calculate}>
          <option value="add">Add</option>
          <option value="sub">Subtract</option>
          <option value="mul">Multiply</option>
          <option value="div">Dividie</option>
        </select>
      </label>
      <br />
      <hr />
      <p>
        Answer: {num1} {operator} {num2} = {answer}{" "}
      </p>
    </div>
  );
}

export default Display;
