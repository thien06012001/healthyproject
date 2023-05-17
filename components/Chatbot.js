import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();

    setMessages([...messages, { text: userMessage, sender: "user" }]);
    setUserMessage("");

    const response = await axios.post("/api/chat", { message: userMessage });
    setMessages([...messages, { text: response.data, sender: "bot" }]);
  };

  return (
    <div>
      <h1>AI-powered Chatbot</h1>
      <div>
        {messages.map((message, index) => (
          <p key={index} className={message.sender}>
            {message.text}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;