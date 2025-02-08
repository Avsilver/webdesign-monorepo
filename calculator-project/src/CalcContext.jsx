import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext({});

const CalculatorProvider = ({ children }) => {
  const [screenData, setScreenData] = useState({
    value: 0,
    isFloat: false,
    digitAfterDecimal: 0,
  });

  const [operationStack, setOperationStack] = useState([]);

  const resetScreenData = () => {
    setScreenData({ value: 0, isFloat: false, digitAfterDecimal: 0 });
  };

  const value = {
    screenData,
    setScreenData,
    operationStack,
    setOperationStack,
    resetScreenData,
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

const CalculatorConsumer = ({ children }) => {
  return (
    <CalculatorContext.Consumer>{children(context)}</CalculatorContext.Consumer>
  );
};

const useCalculator = () => {
  const context = useContext(CalculatorContext);
  return context;
};

export { CalculatorProvider, CalculatorConsumer, useCalculator };
