import { useState, createContext } from "react";
import Output from "./components/Output";
import { CalculatorProvider } from "./context";
import Inputs from "./components/Inputs";

function App() {
  return (
    <div className="container">
      <div className="calc-container">
        <CalculatorProvider>
          <Output />
          <Inputs />
        </CalculatorProvider>
      </div>
    </div>
  );
}

export default App;
