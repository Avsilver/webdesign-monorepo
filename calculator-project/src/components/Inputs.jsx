import BackspaceButton from "./Buttons/BackspaceButton";
import NumberButton from "./Buttons/NumberButton";
import EqualsButton from "./Buttons/EqualsButton";
import ArithmeticButton from "./Buttons/ArithmeticButton";
import DecimalButton from "./Buttons/DecimalButton";
import "./Inputs.css";

function Inputs() {
  return (
    <div className="buttons">
      <div className="output-manipulation">
        <BackspaceButton></BackspaceButton>
      </div>
      <div className="numbers">
        <NumberButton num={"7"} />
        <NumberButton num={"8"} />
        <NumberButton num={"9"} />
        <NumberButton num={"4"} />
        <NumberButton num={"5"} />
        <NumberButton num={"6"} />
        <NumberButton num={"1"} />
        <NumberButton num={"2"} />
        <NumberButton num={"3"} />
        <NumberButton num={"0"} />
        <DecimalButton />
      </div>
      <div className="arithmetic">
        <ArithmeticButton operation="div" />
        <ArithmeticButton operation="mult" />
        <ArithmeticButton operation="sub" />
        <ArithmeticButton operation="add" />
        <EqualsButton />
      </div>
    </div>
  );
}

export default Inputs;
