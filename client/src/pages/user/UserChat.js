import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001"); // Replace with your server URL

const UserChat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming messages
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up event listener
    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message.trim() === "") return;

    // Emit the message to the server
    socket.emit("message", { sender: "user", content: message });

    // Update local state
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: message },
    ]);

    setMessage("");
  };

  return (
    <div>
      <h2>User Chat</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.sender}: </strong>
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default UserChat;
