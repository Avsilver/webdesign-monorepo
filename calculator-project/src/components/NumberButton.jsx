import { useContext, useEffect } from "react";
import { useCalculator } from "../context";

function NumberButton(props) {
  const { output, setOutput } = useCalculator();

  function updateOutput() {
    let num = output;
    num = num * 10 + props.num;
    setOutput(num);
  }

  return (
    <button className="input" onClick={updateOutput}>
      {props.num}
    </button>
  );
}

export default NumberButton;
