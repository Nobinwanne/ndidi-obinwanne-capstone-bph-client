import React from "react";
import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const api_key = import.meta.env.VITE_OPENAI_API_KEY;

function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am BpH. How can I help you today?",
      sender: "BpH",
      direction: "incoming",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);

    setTyping(true);

    await processMessageToBpH(newMessages);
  };

  async function processMessageToBpH(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "BpH") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    //role: "user" -> a message from the user, "asistant" -> a response from BpH
    //"system" -> generally one initial message defining how we want BpH to talk

    const systemMessage = {
      role: "system",
      content:
        "You are a helpful assistant specializing in real estate development. Explain all concepts like I am a new real estate developer starting my first deal",
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + api_key,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        const assistantMessage = data.choices[0].message.content;

        setMessages([
          ...chatMessages,
          {
            message: assistantMessage,
            sender: "BpH",
            direction: "incoming",
          },
        ]);
        setTyping(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setTyping(false);
      });
  }

  return (
    <div className="App">
      <div
        className="max-w-2xl mx-auto overflow-hidden rounded-lg bg-white shadow mt-8"
        style={{ position: "relative", height: "30rem", width: "40rem" }}
      >
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={
                typing ? <TypingIndicator content="BpH is Typing" /> : null
              }
            >
              {messages.map((message, i) => (
                <Message
                  key={i}
                  model={{
                    message: message.message,
                    sender: message.sender,
                    direction: message.direction,
                  }}
                />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;
