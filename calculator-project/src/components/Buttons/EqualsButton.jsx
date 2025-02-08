import { useCalculator } from "../../CalcContext";

function EqualsButton() {
  const { screenData, setScreenData, operationStack, setOperationStack } =
    useCalculator();

  const math = (sign, a, b) => {
    const operation = {
      "+": (a, b) => Number(a) + Number(b),
      "-": (a, b) => Number(a) - Number(b),
      "*": (a, b) => Number(a) * Number(b),
      "/": (a, b) => Number(a) / Number(b),
      "": (a, b) => b,
    };
    return operation[sign](a, b);
  };

  function handleOperations() {
    const finalValueData = { ...screenData };

    //Loop through the stack
    let result = 0;
    let nextOp = "";
    for (let opValue of operationStack) {
      const currentNum = opValue.value;
      if (result == 0 && nextOp == "") {
        result = currentNum;
        nextOp = opValue.operation;
        continue;
      }
      result = math(nextOp, result, currentNum);
      console.log(result);
      nextOp = opValue.operation;
    }

    //Perform the final operation
    result = math(nextOp, result, finalValueData.value);
    console.log("Result: " + result);

    setScreenData({ ...screenData, value: result });
    setOperationStack([]);
  }
  return (
    <button className="input" onClick={handleOperations}>
      =
    </button>
  );
}

export default EqualsButton;
