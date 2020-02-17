import React from "react";
import Calculate from "./DoMath";

function Display() {
  return (
    <div className="main">
      <h3>Here is my calculator page:</h3>
      <Calculate num1={3} num2={5} operation={"add"} />
    </div>
  );
}

// function Display() {
//   return (
//     <Calculate
//         <h3>React Caclulator:</h3>
//         <form method="get">
//           num1 = <input type="number" name="num1" />
//           <br />
//           num2 = <input type="number" name="num2" />
//           <br />
//           operation = <select>
//             <option value="add">Add</option>
//             <option value="sub">Subtract</option>
//             <option value="mul">Multiply</option>
//             <option value="div">Dividie</option>
//           </select>
//           <input type="submit" value="Calculate" />
//         </form>
//     />
//   );
// }

export default Display;
// export { Add, Subtract, Multiply, Divide };
