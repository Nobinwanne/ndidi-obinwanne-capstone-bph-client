import React from "react";
import LotChecker from "../components/LotChecker";
import Card from "../components/Card";

function LotCheckerPage() {
  return (
    <>
      <div className="Card max-w-2xl mx-auto mt-8 flex pr-5 pl-5">
        <Card />
      </div>
      <div className="max-w-2xl mx-auto mt-8 flex flex-col pr-5 pl-5">
        <LotChecker />
      </div>
    </>
  );
}

export default LotCheckerPage;
