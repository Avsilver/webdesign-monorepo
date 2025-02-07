import { useContext } from "react";
import { useCalculator } from "../context";

function Output() {
  const { output, savedValue } = useCalculator();

  function showSaved() {
    if (savedValue.hasSaved == true) {
      return <div className="output-saved">{savedValue.savedString}</div>;
    } else {
      return null;
    }
  }

  return (
    <div className="output-container">
      <div className="output-values">
        {showSaved()}
        <div className="output-text">{output}</div>
      </div>
    </div>
  );
}

export default Output;
