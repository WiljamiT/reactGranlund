import React, { useState, useEffect, useCallback } from "react";
import usePost from "../../hooks/usePost";
import { FaRobot } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import "./Chat.css";
import { TypingAnimation } from "../magicui/typing-animation";

interface ChatResponse {
  message: string;
}

interface Message {
  sender: string;
  content: string;
  timestamp: string;
}

const Chat: React.FC = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const { postData, response, status, error } = usePost<ChatResponse>(
    "https://pybackend-gdfwd5frc4g6hqaj.westeurope-01.azurewebsites.net/api/chat",
  );

  const getCurrentTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const sendMessage = useCallback(async () => {
    if (input.trim() === "") return;

    setMessages((prev) => [
      ...prev,
      { sender: "You", content: input, timestamp: getCurrentTimestamp() },
    ]);

    await postData({ message: input });

    setInput("");
  }, [input, postData]);

  useEffect(() => {
    if (status === "success" && response) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          content: response.message,
          timestamp: getCurrentTimestamp(),
        },
      ]);
    } else if (status === "error") {
      setMessages((prev) => [
        ...prev,
        {
          sender: "Error",
          content: error || "Failed to get response",
          timestamp: getCurrentTimestamp(),
        },
      ]);
    }
  }, [status, response, error]);

  const renderMessage = useCallback((message: Message, index: number) => {
    const isAI = message.sender === "AI";
    const isError = message.sender === "Error";

    return (
      <div key={index} className={`message ${message.sender.toLowerCase()}`}>
        <div className="message-header">
          {isAI ? <FaRobot className="message-icon" /> : <></>}
        </div>
        <div className={`message-content ${isError ? "error" : ""}`}>
          {isAI ? <TypingAnimation text={message.content} /> : message.content}
        </div>
        <div className="timestamp">{message.timestamp}</div>
      </div>
    );
  }, []);

  return (
    <div className="chat-div">
      <div className="chat-container">
        <header>
          <div className="header-infos">
            <h2>
              Digitaalinen <b>Avustaja</b>
            </h2>
            <FaRobot />
          </div>
          <div className="header-i">
            <i>
              Rajoitettu 10 viestiä per minuutti. Tiedot rajoittuu vuodelle ~22.
            </i>
          </div>
        </header>
        <div className="chat-messages">{messages.map(renderMessage)}</div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Kirjoita viestisi tähän..."
          />
          <button
            onClick={sendMessage}
            disabled={status === "loading"}
            className="send-button"
          >
            <IoIosSend />
            {status === "loading" ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
