import { useCalculator } from "../../CalcContext";

function NumberButton(props) {
  const { screenData, setScreenData } = useCalculator();

  function handleNumberClick() {
    const currentData = { ...screenData };
    currentData.value = currentData.value + props.num;
    setScreenData(currentData);
  }

  return (
    <button className="input" onClick={handleNumberClick}>
      {props.num}
    </button>
  );
}

export default NumberButton;
