import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext({});

const CalculatorProvider = ({ children }) => {
  const [outputData, setOutputData] = useState({
    value: 0,
    isOnDecimal: false,
    isFloat: false,
    currentDec: 0,
  });

  const [savedValue, setSavedValue] = useState({
    hasSaved: false,
    value: 0,
    operation: "none",
    savedString: "",
  });

  const value = {
    outputData,
    setOutputData,
    savedValue,
    setSavedValue,
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
