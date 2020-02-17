import Calc from "./Pages/Calculator";
import Home from "./Pages/Home";
import People from "./Pages/People/People";
import Vanilla from "./Pages/ArrowFunctions";

let pageToExport;
let page = 3;

switch (page) {
  case 1:
    pageToExport = Calc;
    break;
  case 2:
    pageToExport = People;
    break;
  case 3:
    pageToExport = Vanilla;
    break;
  default:
    pageToExport = Home;
    break;
}

export default pageToExport;
