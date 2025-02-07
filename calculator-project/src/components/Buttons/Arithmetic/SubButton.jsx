import { useCalculator } from "../../../context";

function SubButton() {
  const { output, setOutput, savedValue, setSavedValue } = useCalculator();

  function startSubtract() {
    if (savedValue.hasSaved == true) return;

    const operation = {
      hasSaved: true,
      value: output,
      operation: "sub",
      savedString: output + " - ",
    };

    setSavedValue(operation);
    setOutput(0);
  }

  return (
    <button className="input" onClick={startSubtract}>
      -
    </button>
  );
}

export default SubButton;
