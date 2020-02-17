import React, { useState } from "react";
import "./styles.css";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import SetPage from "./Components/Main";
import Footer from "./Components/Footer";

// You can also use "import * as Object from ./Components/main" to get everything
// from that class as an object. To use, simply call "Object.functionName". This is
// generally not good practice though.

function App() {
  let currentState = useState(1),
    Main;
  Main = SetPage(currentState);
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
