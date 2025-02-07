import { useCalculator } from "../../../context";

function DivButton() {
  const { output, setOutput, savedValue, setSavedValue } = useCalculator();

  function startDivision() {
    if (savedValue.hasSaved == true) return;

    const operation = {
      hasSaved: true,
      value: output,
      operation: "div",
      savedString: output + " / ",
    };

    setSavedValue(operation);
    setOutput(0);
  }

  return (
    <button className="input" onClick={startDivision}>
      /
    </button>
  );
}

export default DivButton;
