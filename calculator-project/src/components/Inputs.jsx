import BackspaceButton from "./BackspaceButton";
import NumberButton from "./NumberButton";

function Inputs() {
  return (
    <div className="buttons">
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
      <BackspaceButton />
    </div>
  );
}

export default Inputs;
