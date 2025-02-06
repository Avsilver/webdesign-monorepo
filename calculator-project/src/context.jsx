import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext({});

const CalculatorProvider = ({ children }) => {
  const [output, setOutput] = useState(0);

  const value = {
    output,
    setOutput,
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
