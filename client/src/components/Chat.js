// App.js

import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8081");

function App() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    // Join the user-specific chat room
    if (currentUser) {
      const userId = currentUser.id;
      socket.emit("join", userId);
    }

    // Listen for incoming messages
    socket.on("newMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up the socket connection and event listener when the component unmounts
    return () => {
      socket.disconnect();
      socket.off("newMessage");
    };
  }, [currentUser]);

  const handleSendMessage = () => {
    const message = {
      sender: currentUser.id,
      receiver: "RECIPIENT_ID",
      message: messageInput,
    };

    // Emit the message to the server
    socket.emit("message", message);

    // Clear the input field
    setMessageInput("");
  };

  const handleLogin = async () => {
    try {
      // Make an API request to authenticate the user and obtain a token
      const response = await fetch("http://localhost:8081/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "user@example.com",
          password: "password",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCurrentUser(data.user);
        setToken(data.token);
      } else {
        // Handle login error
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <h1>Chat Application</h1>
      {currentUser ? (
        <div>
          <h2>Welcome, {currentUser.name}</h2>
          <div>
            <h3>Messages:</h3>
            <ul>
              {messages.map((message, index) => (
                <li key={index}>
                  <strong>{message.sender}: </strong>
                  {message.message}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      ) : (
        <div>
          <h2>Please log in to start chatting.</h2>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default App;
