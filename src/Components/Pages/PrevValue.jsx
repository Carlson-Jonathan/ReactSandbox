import React, { useState } from "react";

function PrevValue() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(event) {
    let newName = event.target.value;
    let inputNum = event.target.name;

    // prevValue is a pre-set variable. Call it with an anon function.
    setFullName(prevValue => {
      return inputNum === "0"
        ? { firstName: newName, lastName: prevValue.lastName }
        : { firstName: prevValue.firstName, lastName: newName };
    });
  }

  return (
    <div className="main">
      <h3>Complex States and prevValue Function</h3>
      <p>
        This page demonstrates how to use objects with the setState function.
        The object here is the full name of a person with its members being the
        first and last names. This also demonstrates how to call the previous
        values of states to fill unchanging object members.
      </p>
      First Name: <input type="text" onChange={handleChange} name="0" />
      <br />
      Last Name: <input type="text" onChange={handleChange} name="1" />
      <br />
      <br />
      Hello there {fullName.firstName} {fullName.lastName}!
      <hr />
      <h3>Misc Tips:</h3>
      <p>
        Don't ever attempt to access the event inside a state changing function.
      </p>
    </div>
  );
}

export default PrevValue;
