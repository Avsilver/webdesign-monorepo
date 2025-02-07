import { useState, useEffect } from "react";
import { useCalculator } from "../../../context";

function BackspaceButton() {
  const { outputData, setOutputData, savedValue, setSavedValue } =
    useCalculator();

  const [delText, setDelText] = useState("Del");

  const currentData = { ...outputData };

  function updateOutput() {
    let newValue = currentData.value;
    if (delText == "Del") {
      if (currentData.isOnDecimal) {
        currentData.isOnDecimal = false;
        currentData.isFloat = false;
      } else if (currentData.isFloat) {
        newValue =
          newValue -
          newValue.toString().slice(-1) / 10 ** currentData.currentDec;
        currentData.currentDec--;
        newValue = parseFloat(newValue.toFixed(currentData.currentDec));
        if (currentData.currentDec == 0) {
          currentData.isOnDecimal = true;
        }
      } else {
        newValue = Math.floor(newValue / 10);
      }

      currentData.value = newValue;
      setOutputData(currentData);
    } else {
      setSavedValue({});
    }
  }

  useEffect(() => {
    if (outputData.value == 0 && savedValue.hasSaved === true) {
      setDelText("AC");
    } else {
      setDelText("Del");
    }
  }, [outputData.value, savedValue]);

  return (
    <button className="input" onClick={updateOutput}>
      {delText}
    </button>
  );
}

export default BackspaceButton;
