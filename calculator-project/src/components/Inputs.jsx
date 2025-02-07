import BackspaceButton from "./Buttons/Manipulation/BackspaceButton";
import NumberButton from "./Buttons/NumberButton";
import AddButton from "./Buttons/Arithmetic/AddButton";
import DivButton from "./Buttons/Arithmetic/DivButton";
import EqualsButton from "./Buttons/Arithmetic/EqualsButton";
import MultButton from "./Buttons/Arithmetic/MultButton";
import SubButton from "./Buttons/Arithmetic/SubButton";
import "./Inputs.css";

function Inputs() {
  return (
    <div className="buttons">
      <div className="output-manipulation">
        <BackspaceButton></BackspaceButton>
      </div>
      <div className="numbers">
        <NumberButton num={7} />
        <NumberButton num={8} />
        <NumberButton num={9} />
        <NumberButton num={4} />
        <NumberButton num={5} />
        <NumberButton num={6} />
        <NumberButton num={1} />
        <NumberButton num={2} />
        <NumberButton num={3} />
        <NumberButton num={0} />
      </div>
      <div className="arithmetic">
        <DivButton />
        <MultButton />
        <SubButton />
        <AddButton />
        <EqualsButton />
      </div>
    </div>
  );
}

export default Inputs;
