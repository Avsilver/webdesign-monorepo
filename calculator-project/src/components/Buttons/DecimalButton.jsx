import { useCalculator } from "../../CalcContext";

function DecimalButton() {
  const { screenData, setScreenData } = useCalculator();

  function handleDecimalClick() {
    const currentData = { ...screenData };
    if (!currentData.value.toString().includes(".")) {
      currentData.value = currentData.value + ".";
      currentData.isFloat = true; 
    }
    setScreenData(currentData);
  }

  return (
    <button className="input" onClick={handleDecimalClick}>
      .
    </button>
  );
}

export default DecimalButton;
