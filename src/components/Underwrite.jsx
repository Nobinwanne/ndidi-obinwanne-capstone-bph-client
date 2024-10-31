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

    const lotPriceNum = parseFloat(lotPrice);
    const sqFtNum = parseFloat(sqFt);

    const hardCost = hardCostMultiplier * sqFtNum * hardCostPerSqFt;
    const softCost = (hardCost / hardCostPercentage) * softCostPercentage;
    const totalCost = lotPriceNum + hardCost + softCost;

    setTotalProjectCost(totalCost);
  };

  return (
    <div className="underwriting-calculator mx-auto m-8 mt-4 flex pr-5 pl-5 overflow-hidden flex-col rounded-lg bg-white shadow max-w-2xl justify-center">
      <h1 className="mt-2 mb-2">Underwriting Calculator</h1>
      <div className="mb-4">
        <label htmlFor="lot_price">
          Lot Price ($):
          <input
            id="lot_price"
            type="number"
            value={lotPrice}
            onChange={(e) => setLotPrice(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="square_footage">
          Square Footage (sq ft):
          <input
            id="square_footage"
            className="mb-2"
            type="number"
            value={sqFt}
            onChange={(e) => setSqFt(e.target.value)}
          />
        </label>
      </div>
      <div className="w-42">
        <button
          className="w-42 text-left border border-zinc-200 rounded-lg p-2 text-sm hover:bg-zinc-100 transition-colors flex flex-col"
          onClick={calculateUnderwriting}
        >
          Calculate Total Project Cost
        </button>
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
