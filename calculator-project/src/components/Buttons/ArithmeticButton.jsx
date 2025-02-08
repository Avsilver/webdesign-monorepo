import { useCalculator } from "../../CalcContext";

function ArithmeticButton(props) {
  const { screenData, resetScreenData, operationStack, setOperationStack } =
    useCalculator();

  const operators = {
    add: "+",
    sub: "-",
    mult: "*",
    div: "/",
  };

  let currOperator = operators[props.operation] || "";

  function handleAppendOperation() {
    const currentData = { ...screenData };
    setOperationStack([
      ...operationStack,
      { ...currentData, operation: currOperator },
    ]);
    resetScreenData();
  }

  return (
    <button className="input arith" onClick={handleAppendOperation}>
      {currOperator}
    </button>
  );
}

export default ArithmeticButton;
