import React from "react";
import "./styles.css";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";

// An example of multiple imports, though they are not used anywhere:
import Main /*, { secondaryExport1, secondaryExport2 } */ from "./Components/Main";
import Footer from "./Components/Footer";
// You can also use "import * as Object from ./Components/main" to get everything
// from that class as an object. To use, simply call "Object.functionName". This is
// generally not good practice though.

function App() {
  return (
    <div>
      <Heading />
      <Navbar />
      <Main
        propVariable="You can create prop variables and send them back to the 
      original function like this."
      />
      <Footer />
    </div>
  );
}

export default App;
