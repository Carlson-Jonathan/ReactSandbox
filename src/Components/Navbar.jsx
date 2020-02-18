import React from "react";
import SetPage from "./SetPage";

function Navbar(props) {
  return (
    <ul className="navBox" id="navigationBar">
      <li onClick={() => props.changeState(0)} className="navItem">
        Home
      </li>
      <li onClick={() => props.changeState(1)} className="navItem">
        Calculator
      </li>
      <li onClick={() => props.changeState(2)} className="navItem">
        People
      </li>
      <li onClick={() => props.changeState(3)} className="navItem">
        Arrows
      </li>
      <li onClick={() => props.changeState(4)} className="navItem">
        Nav 5
      </li>
    </ul>
  );
}

export default Navbar;
