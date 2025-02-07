import { useCalculator } from "../../../context";

function ArithmeticButton(props) {
  const { outputData, setOutputData, savedValue, setSavedValue } =
    useCalculator();

  const operators = {
    add: "+",
    sub: "-",
    mult: "*",
    div: "/",
  };

  let currOperator = operators[props.operation] || "";

  function startArith() {
    if (savedValue.hasSaved == true) return;

    const operation = {
      hasSaved: true,
      value: outputData.value,
      operation: props.operation,
      savedString: `${outputData.value} ${currOperator}`,
    };

    setSavedValue(operation);
    setOutputData({ ...outputData, value: 0 });
  }

  return (
    <button className="input" onClick={startArith}>
      {currOperator}
    </button>
  );
}

export default ArithmeticButton;
