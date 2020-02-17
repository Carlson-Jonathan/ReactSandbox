import React, { useState } from "react";
import SetPage from "./SetPage";

let globalState;

function Navbar() {
  const [currentState, changeState] = useState(0);

  function setState(newState) {
    changeState(newState);
    globalState = currentState;
    console.log("State changed to " + currentState);
  }

  return (
    <ul className="navBox">
      <li onClick={() => setState(1)} className="navItem">
        Home
      </li>
      <li onClick={() => setState(2)} className="navItem">
        Calculator
      </li>
      <li onClick={() => setState(3)} className="navItem">
        Nav3
      </li>
      <li onClick={() => setState(4)} className="navItem">
        Nav4
      </li>
      <li onClick={() => setState(5)} className="navItem">
        Nav5
      </li>
    </ul>
  );
}

function getState(inputState) {
  const [currentState, changeState] = useState(0);
  changeState(inputState);
  console.log("Helper Function State = " + currentState);
  return currentState;
}

export default Navbar;
export { getState };
