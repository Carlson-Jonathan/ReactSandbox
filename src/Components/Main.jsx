import Calc from "./Pages/Calculator/Calculator";
import Home from "./Pages/Home";
import People from "./Pages/People/People";
import Vanilla from "./Pages/ArrowFunctions";

let pageToExport;

function SetPage(state) {
  console.log("Current state = " + state[0]);
  switch (state[0]) {
    case 1:
      pageToExport = Calc;
      break;
    case 2:
      pageToExport = People;
      break;
    case 3:
      pageToExport = Vanilla;
      break;
    // case 4:
    //   pageToExport = States;
    //   break;
    default:
      pageToExport = Home;
      break;
  }
  return pageToExport;
}

export default SetPage;

// Michael's API program for reference:
// https://codesandbox.io/s/pics-application-bp8ur
