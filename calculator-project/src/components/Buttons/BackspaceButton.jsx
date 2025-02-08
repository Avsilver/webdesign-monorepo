import { useState, useEffect } from "react";
import { useCalculator } from "../../CalcContext";

function BackspaceButton() {
  let delText = "Del";

  const { screenData, resetScreenData, setScreenData } = useCalculator();

  function handleBackspace() {
    console.log("Backspace");
    const currentData = { ...screenData };
    currentData.value = currentData.value.toString().slice(0, -1);
    if (!currentData.value) {
      resetScreenData();
    } else {
      setScreenData(currentData);
    }
  }

  return (
    <button className="input" onClick={handleBackspace}>
      {delText}
    </button>
  );
}

export default BackspaceButton;
