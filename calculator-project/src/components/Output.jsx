import { useContext } from "react";
import { useCalculator } from "../context";

function Output() {
  const { output, setOutput } = useCalculator();

  return (
    <div className="output-container">
      <div className="output-text">{output}</div>
    </div>
  );
}

export default Output;
