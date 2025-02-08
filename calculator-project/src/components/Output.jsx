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
    return screenData.value;
  }

  return (
    <div className="output-container">
      <div className="output-values">
        {showSaved()}
        <div className="output-text">{Number(getOutput())}</div>
      </div>
    </div>
  );
}

export default Output;
