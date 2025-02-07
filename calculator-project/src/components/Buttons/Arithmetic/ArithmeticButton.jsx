import { useCalculator } from "../../../context";

function ArithmeticButton(props) {
  const { output, setOutput, savedValue, setSavedValue } = useCalculator();

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
      value: output,
      operation: props.operation,
      savedString: `${output} ${currOperator}`,
    };

    setSavedValue(operation);
    setOutput(0);
  }

  return (
    <button className="input" onClick={startArith}>
      {currOperator}
    </button>
  );
}

export default ArithmeticButton;
