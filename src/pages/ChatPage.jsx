import React from "react";
import ChatUi from "../components/ChatUi";
import Card from "../components/Card";

function ChatPage() {
  return (
    <>
      <div className="Card max-w-2xl mx-auto mt-8 flex pr-5 pl-5">
        <Card />
      </div>
      <div>
        <ChatUi />
      </div>
    </>
  );
}

export default ChatPage;
