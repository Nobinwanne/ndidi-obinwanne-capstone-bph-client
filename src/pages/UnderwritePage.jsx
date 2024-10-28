import React from "react";
import Underwrite from "../components/UnderWrite";
import Card from "../components/Card";

function UnderwritePage() {
  return (
    <>
      <div className="Card max-w-2xl mx-auto mt-8 flex pr-5 pl-5">
        <Card />
      </div>
      <div>
        <Underwrite />
      </div>
    </>
  );
}

export default UnderwritePage;
