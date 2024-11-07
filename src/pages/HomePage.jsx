import React from "react";
import Card from "../components/Card";
import { useState } from "react";
// import PromptQuestions from "../components/PromptQuestions";
import LotChecker from "../components/LotChecker";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [showLotChecker, setShowLotChecker] = useState(false);
  const [showPromptQuestions, setshowPromptQuestions] = useState(false);

  const handleLotCheckerClick = (e) => {
    e.preventDefault();
    navigate("/lotchecker");
  };
  // const handlePromptQuestionsClick = () => {
  //   setshowPromptQuestions(true);
  // };
  const handleFindListingsClick = (e) => {
    navigate("/listings");
  };
  const handleChatClick = (e) => {
    e.preventDefault();
    navigate("/chat");
  };
  const handleAddListingClick = (e) => {
    e.preventDefault();
    navigate("/addlisting");
  };

  return (
    <>
      <div className="Card max-w-2xl mx-auto mt-8 flex pr-5 pl-5">
        <Card />
      </div>
      <div className="max-w-2xl mx-auto gap-6 flex justify-between mt-32 overflow-y-scroll pr-5 pl-5">
        <div>
          <button
            onClick={handleFindListingsClick}
            className="w-full text-left border border-zinc-200 rounded-lg p-2 text-sm hover:bg-zinc-100 transition-colors flex flex-col"
          >
            <span className="font-medium">Click to Find Listings</span>
            <span className="text-zinc-500 dark:text-zinc-400">
              Find Listings
            </span>
          </button>
          {/* {showPromptQuestions && <PromptQuestions />} */}
        </div>

        <div>
          <button
            onClick={handleLotCheckerClick}
            className="w-full text-left border border-zinc-200 rounded-lg p-2 text-sm hover:bg-zinc-100 transition-colors flex flex-col"
          >
            <span className="font-medium">Click to Find Vacant Lots</span>
            <span className="text-zinc-500 dark:text-zinc-400">
              Find Vacant Lots
            </span>
          </button>
          {showLotChecker && <LotChecker />}
        </div>
      </div>
      <div className="max-w-2xl mx-auto gap-6 flex justify-between mt-20 mb-20 overflow-y-scroll pr-5 pl-5">
        <div>
          <button
            onClick={handleChatClick}
            className="w-full text-left border border-zinc-200 rounded-lg p-2 text-sm hover:bg-zinc-100 transition-colors flex flex-col"
          >
            <span className="font-medium">
              Click to Learn About Real Estate
            </span>
            <span className="text-zinc-500 dark:text-zinc-400">Chat</span>
          </button>
        </div>

        <div>
          <button
            onClick={handleAddListingClick}
            className="w-full text-left border border-zinc-200 rounded-lg p-2 text-sm hover:bg-zinc-100 transition-colors flex flex-col"
          >
            <span className="font-medium">Click to Add a Listing</span>
            <span className="text-zinc-500 dark:text-zinc-400">Add</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
