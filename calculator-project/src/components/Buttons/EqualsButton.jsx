import { useCalculator } from "../../CalcContext";

function EqualsButton() {
  const {
    screenData,
    setScreenData,
    operationStack,
    setOperationStack,
    roundFloat,
  } = useCalculator();

  const math = (sign, a, b) => {
    const operation = {
      "+": (a, b) => Number(a) + Number(b),
      "-": (a, b) => Number(a) - Number(b),
      "*": (a, b) => Number(a) * Number(b),
      "/": (a, b) => handleDivision(a, b),
      "": (a, b) => Number(b),
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
    result = roundFloat(result);
    console.log("Result: " + result);

    setScreenData({ ...screenData, value: result });
    setOperationStack([]);
  }

  function handleDivision(a, b) {
    if (b == 0) {
      return;
    } else {
      return roundFloat(Number(a) / Number(b));
    }
  }

  return (
    <button className="input arith" onClick={handleOperations}>
      =
    </button>
  );
}

export default EqualsButton;
