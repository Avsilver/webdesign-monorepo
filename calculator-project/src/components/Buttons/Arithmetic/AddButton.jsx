import { useCalculator } from "../../../context";

function AddButton() {
  const { output, setOutput, savedValue, setSavedValue } = useCalculator();

  function startAddition() {
    if (savedValue.hasSaved == true) return;

    const operation = {
      hasSaved: true,
      value: output,
      operation: "add",
      savedString: output + " + ",
    };

    setSavedValue(operation);
    setOutput(0);
  }

  return (
    <button className="input" onClick={startAddition}>
      +
    </button>
  );
}

export default AddButton;
