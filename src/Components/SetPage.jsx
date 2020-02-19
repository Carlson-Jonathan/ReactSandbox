import Calc from "./Pages/Calculator/Calculator";
import Home from "./Pages/Home";
import People from "./Pages/People/People";
import Arrows from "./Pages/ArrowFunctions";
import Time from "./Pages/Counter";

let pageToExport;

function SetPage(page) {
  switch (page) {
    case 1:
      pageToExport = Calc;
      break;
    case 2:
      pageToExport = People;
      break;
    case 3:
      pageToExport = Arrows;
      break;
    case 4:
      pageToExport = Time;
      break;
    default:
      pageToExport = Home;
      break;
  }
  return pageToExport;
}

export default SetPage;

// Michael's API program for reference:
// https://codesandbox.io/s/pics-application-bp8ur
