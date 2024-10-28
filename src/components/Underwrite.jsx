import { useState } from "react";
import React from "react";
import Button from "./Button";

function Underwrite() {
  const [lotPrice, setLotPrice] = useState(0);
  const [sqFt, setSqFt] = useState(0);
  const [totalProjectCost, setTotalProjectCost] = useState(0);

  const calculateUnderwriting = () => {
    const hardCostPerSqFt = 125;
    const hardCostPercentage = 0.7;
    const softCostPercentage = 0.3;
    const hardCostMultiplier = (80 / 100) * 3;

    const hardCost = hardCostMultiplier * sqFt * hardCostPerSqFt;

    const softCost = (hardCost / hardCostPercentage) * softCostPercentage;

    const constructionCost = hardCost + softCost;

    const totalCost = parseFloat(lotPrice) + hardCost + softCost;

    setTotalProjectCost(totalCost);
  };

  return (
    <div className="underwriting-calculator mx-auto m-8 mt-4 flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow max-w-2xl justify-center">
      <h1 className="mt-2 mb-2">Underwriting Calculator</h1>
      <div className="mb-4">
        <label>Lot Price ($):</label>
        <input
          type="number"
          value={lotPrice}
          onChange={(e) => setLotPrice(e.target.value)}
        />
      </div>
      <div>
        <label>Square Footage (sq ft):</label>
        <input
          className="mb-2"
          type="number"
          value={sqFt}
          onChange={(e) => setSqFt(e.target.value)}
        />
      </div>
      <div className="w-42">
        <Button
          onClick={calculateUnderwriting}
          content="Calculate Total Project Cost"
        />
      </div>
      <div>
        <h2 className="mt-4">
          Total Project Cost: ${totalProjectCost.toFixed(2)}
        </h2>
      </div>
    </div>
  );
}

export default Underwrite;
