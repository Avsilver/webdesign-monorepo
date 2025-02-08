import { useCalculator } from "../../CalcContext";

function DecimalButton() {
  const { screenData, setScreenData } = useCalculator();
  return (
    <button className="input" onClick={() => {}}>
      .
    </button>
  );
}

export default DecimalButton;
