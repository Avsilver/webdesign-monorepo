import { useCalculator } from "../../CalcContext";

function PercentButton() {
  const { screenData, setScreenData } = useCalculator();

  function handleNegative() {
    setScreenData({ ...screenData, value: screenData.value * 0.01 });
  }

  return (
    <button className="input arith" onClick={handleNegative}>
      %
    </button>
  );
}

export default PercentButton;
