import { useCalculator } from "../../context";

function NumberButton(props) {
  const { outputData, setOutputData } = useCalculator();

  const currentData = { ...outputData };

  function updateOutput() {
    let newValue = currentData.value;

    if (currentData.isOnDecimal == true || currentData.isFloat == true) {
      currentData.currentDec++;
      newValue = newValue + props.num / 10 ** currentData.currentDec;
      currentData.value = parseFloat(newValue.toFixed(currentData.currentDec));
      currentData.isOnDecimal = false;
    } else {
      newValue = newValue * 10 + props.num;
      currentData.value = newValue;
    }

    setOutputData(currentData);
  }

  return (
    <button className="input" onClick={updateOutput}>
      {props.num}
    </button>
  );
}

export default NumberButton;
