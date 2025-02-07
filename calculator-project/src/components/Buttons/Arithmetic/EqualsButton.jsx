import { useCalculator } from "../../../context";
function EqualsButton() {
  const { savedValue, setSavedValue, output, setOutput } = useCalculator();

  function performOperation() {
    if (savedValue.hasSaved == false) return;
    let newValue = 0;

    switch (savedValue.operation) {
      case "add":
        newValue = savedValue.value + output;
        break;
      case "sub":
        newValue = savedValue.value - output;
        break;
      case "mult":
        newValue = savedValue.value * output;
        break;
      case "div":
        if (output == 0) return;
        newValue = savedValue.value / output;
        break;
      default:
        break;
    }

    function handleDivision(quotient, divisor) {}

    setSavedValue({});
    setOutput(newValue);
  }

  return (
    <button className="input" onClick={performOperation}>
      =
    </button>
  );
}

export default EqualsButton;
