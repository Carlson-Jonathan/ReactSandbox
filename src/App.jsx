import React, { useState } from "react";
import "./styles.css";
import Heading from "./Components/Heading";
import Navbar, { st } from "./Components/Navbar";
import SetPage from "./Components/SetPage";
import Footer from "./Components/Footer";

// You can also use "import * as Object from ./Components/main" to get everything
// from that class as an object. To use, simply call "Object.functionName". This is
// generally not good practice though.

function App() {
  const currentState = useState(2);
  console.log("Current state set as " + currentState[0]);
  let Main = SetPage(currentState[0]);
  return (
    <div>
      <Heading />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
