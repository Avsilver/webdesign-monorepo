import { useCalculator } from "../../../context";

function DecimalButton() {
  const { outputData, setOutputData } = useCalculator();

  const currentData = { ...outputData };

  function updateOutput() {
    if (currentData.isFloat) return;
    if (currentData.isOnDecimal) return;

    currentData.isOnDecimal = true;
    currentData.isFloat = true;

    setOutputData(currentData);
  }

  return (
    <button className="input" onClick={updateOutput}>
      .
    </button>
  );
}

export default DecimalButton;
