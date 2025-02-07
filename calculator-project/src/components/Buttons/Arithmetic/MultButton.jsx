import { useCalculator } from "../../../context";

function MultButton() {
  const { output, setOutput, savedValue, setSavedValue } = useCalculator();

  function startMultiply() {
    if (savedValue.hasSaved == true) return;

    const operation = {
      hasSaved: true,
      value: output,
      operation: "mult",
      savedString: output + " * ",
    };

    setSavedValue(operation);
    setOutput(0);
  }

  return (
    <button className="input" onClick={startMultiply}>
      *
    </button>
  );
}

export default MultButton;
