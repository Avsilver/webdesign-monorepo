import { useCalculator } from "../../CalcContext";

function NegativeButton() {
  const { screenData, setScreenData } = useCalculator();

  function handleNegative() {
    setScreenData({ ...screenData, value: screenData.value * -1 });
  }

  return (
    <button className="input arith" onClick={handleNegative}>
      <sup>+</sup>&#8260;<sub>&#8722;</sub>
    </button>
  );
}

export default NegativeButton;
