import { useCalculator } from "../../CalcContext";

function NumberButton(props) {
  const { screenData, setScreenData, roundFloat } = useCalculator();

  function handleNumberClick() {
    const currentData = { ...screenData };
    if (currentData.isFloat) {
      currentData.value = currentData.value + props.num;
    } else {
      currentData.value = Number(currentData.value + props.num);
    }
    setScreenData(currentData);
  }

  return (
    <button className="input" onClick={handleNumberClick}>
      {props.num}
    </button>
  );
}

export default NumberButton;
