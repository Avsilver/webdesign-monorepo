import { useContext, useEffect } from "react";
import { useCalculator } from "../context";

function BackspaceButton() {
  const { output, setOutput } = useCalculator();

  function updateOutput() {
    let num = output;
    let remainder = num % 10;
    num = (num - remainder) / 10;
    setOutput(num);
  }

  return (
    <button className="input" onClick={updateOutput}>
      Del
    </button>
  );
}

export default BackspaceButton;
