import { useCalculator } from "../CalcContext";
import { useEffect } from "react";

function Output() {
  const { screenData, resetScreenData, operationStack } = useCalculator();

  function showSaved() {
    let outputString = "";

    for (let op of operationStack) {
      outputString = `${outputString} ${Number(op.value)} ${op.operation}`;
    }

    return <div className="output-saved">{outputString}</div>;
  }

  //Log When stack changed
  useEffect(() => {
    console.log(operationStack);
  }, [operationStack]);

  //Update when screenData changed

  function getOutput() {
    if (Number.isNaN(screenData.value)) {
      console.log(screenData.value + " is not a number");
      resetScreenData();
    }

    if (screenData.isFloat) {
      return screenData.value;
    } else {
      return Number(screenData.value);
    }
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
