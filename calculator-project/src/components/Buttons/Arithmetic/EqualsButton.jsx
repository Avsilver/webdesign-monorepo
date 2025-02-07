import { useCalculator } from "../../../context";
function EqualsButton() {
  const { savedValue, setSavedValue, outputData, setOutputData } =
    useCalculator();

  function performOperation() {
    if (savedValue.hasSaved == false) return;
    let newValue = 0;

    switch (savedValue.operation) {
      case "add":
        newValue = savedValue.value + outputData.value;
        break;
      case "sub":
        newValue = savedValue.value - outputData.value;
        break;
      case "mult":
        newValue = savedValue.value * outputData.value;
        break;
      case "div":
        if (outputData.value == 0) return;
        newValue = savedValue.value / outputData.value;
        break;
      default:
        break;
    }

    const resetData = {
      value: newValue,
      isOnDecimal: false,
      isFloat: false,
      currentDec: savedValue.currentDec,
    };

    setSavedValue({});
    setOutputData(resetData);
  }

  return (
    <button className="input" onClick={performOperation}>
      =
    </button>
  );
}

export default EqualsButton;
