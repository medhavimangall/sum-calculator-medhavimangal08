import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [num1, setnum1] = useState(0);
  let [sum, setsum] = useState(0);
  function handleChange(e) {
    let number = e.target.value;

    setnum1(number);
    setsum(sum + +number);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Sum Calculator</h1>
      <form>
        <input
          type="number"
          name="num1"
          placeholder="Enter first number"
          onChange={handleChange}
        ></input>
      </form>
      <p>Sum is: {sum}</p>
    </div>
  );
};

export default App;
