import { useState, useEffect } from "react";
import { useCalculator } from "../../../context";

function BackspaceButton() {
  const { output, setOutput, savedValue, setSavedValue } = useCalculator();

  const [delText, setDelText] = useState("Del");

  function updateOutput() {
    if (delText == "Del") {
      let num = output;
      let remainder = num % 10;
      num = (num - remainder) / 10;
      setOutput(num);
    } else {
      setSavedValue({});
    }
  }

  useEffect(() => {
    if (output == 0 && savedValue.hasSaved === true) {
      setDelText("AC");
    } else {
      setDelText("Del");
    }
  }, [output, savedValue]);

  return (
    <button className="input" onClick={updateOutput}>
      {delText}
    </button>
  );
}

export default BackspaceButton;
