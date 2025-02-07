import { useContext } from "react";
import { useCalculator } from "../context";

function Output() {
  const { outputData, savedValue } = useCalculator();

  function showSaved() {
    if (savedValue.hasSaved == true) {
      return <div className="output-saved">{savedValue.savedString}</div>;
    } else {
      return null;
    }
  }

  function getOutput() {
    logData();
    let outputString = outputData.value;
    if (outputData.isOnDecimal) {
      outputString += ".";
    } else if (outputData.isFloat) {
      outputString = outputData.value.toFixed(outputData.currentDec);
    }
    return outputString;
  }

  function logData() {
    console.log("Current Value: " + outputData.value);
    console.log("isOnDecimal: " + outputData.isOnDecimal);
    console.log("IsFloat: " + outputData.isFloat);
    console.log("Current Decimal Index: " + outputData.currentDec);
  }

  return (
    <div className="output-container">
      <div className="output-values">
        {showSaved()}
        <div className="output-text">{getOutput()}</div>
      </div>
    </div>
  );
}

export default Output;
