import React from "react";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import LotChecker from "./LotChecker.jsx";
import Textarea from "./Textarea.jsx";

function Layout() {
  return (
    <div className="Layout max-w-2xl mx-auto">
      <Header />
      <div className="Card max-w-2xl mx-auto">
        <Card content="Welcome to Ballpark Housing" />
      </div>
      <div className="App max-w-2xl mx-auto">
        <Textarea />
      </div>
      <div className="form flex flex-col max-w-2xl mx-auto">
        <LotChecker />
      </div>
    </div>
  );
}

export default Layout;
